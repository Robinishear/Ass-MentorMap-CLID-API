"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChefHat, Check } from "lucide-react";

export function LoadingSpinner({ className }: { className?: string }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFinished(true), 200); 
          return 100;
        }
        return prev + 1;
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0c0a09] transition-all duration-700",
      (isFinished && progress === 100) ? "opacity-0 pointer-events-none scale-110" : "opacity-100",
      className
    )}>
      <div className="relative flex items-center justify-center">
        <div className={cn(
          "absolute size-36 rounded-full border-t-2 border-orange-500 border-r-transparent border-b-2 border-l-transparent shadow-[0_0_25px_rgba(234,88,12,0.4)] transition-all duration-500",
          isFinished ? "rotate-0 scale-110 border-orange-400" : "animate-[spin_2s_linear_infinite]"
        )} />
        
        <div className="relative z-10 flex items-center justify-center">
          {!isFinished ? (
            <div className="animate-pulse text-orange-500">
              <ChefHat size={56} strokeWidth={1.5} />
            </div>
          ) : (
            <div className="animate-[scale-up_0.5s_ease-out] text-emerald-500 bg-emerald-500/10 rounded-full p-4">
              <Check size={56} strokeWidth={3} className="animate-[check-bounce_0.5s_ease-out]" />
            </div>
          )}
        </div>

        <div className={cn(
          "absolute size-40 blur-[60px] rounded-full transition-colors duration-500",
          isFinished ? "bg-emerald-600/20" : "bg-orange-600/10"
        )} />
      </div>

      <div className="mt-16 w-72 text-center space-y-4">
        <div className="flex justify-between items-end mb-1">
          <p className={cn(
            "font-black text-[10px] tracking-[0.4em] uppercase transition-colors duration-300",
            isFinished ? "text-emerald-500" : "text-white"
          )}>
            {isFinished ? "Order Ready!" : "Preparing your meal"}
          </p>
          <span className={cn(
            "font-mono text-xs font-bold transition-colors duration-300",
            isFinished ? "text-emerald-500" : "text-orange-500"
          )}>{progress}%</span>
        </div>
        
        <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(234,88,12,0.8)]",
              isFinished ? "bg-emerald-500 shadow-emerald-500/50" : "bg-gradient-to-r from-orange-600 to-orange-400"
            )}
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[10px] text-gray-500 italic min-h-[1rem]">
          {progress < 40 && "Heating up the oven..."}
          {progress >= 40 && progress < 80 && "Adding secret spices..."}
          {progress >= 80 && progress < 100 && "Plating your dashboard..."}
          {isFinished && "Bon Appétit! Jumping in..."}
        </p>
      </div>

      <style jsx>{`
        @keyframes scale-up {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes check-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}

