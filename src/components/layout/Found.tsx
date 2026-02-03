"use client";

import Link from "next/link";
import { Home, Sparkles, Waves, Anchor } from "lucide-react";

export default function Found() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-300 rounded-full blur-[2px] animate-[float-up_12s_infinite_linear]"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              animationDuration: `${Math.random() * 8 + 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 space-y-4 flex flex-col items-center">
        
        <div className="relative group mb-8">
          <div className="absolute -inset-20 bg-cyan-600/20 blur-[120px] rounded-full opacity-60 animate-pulse" />
          
          <h1 className="text-[150px] md:text-[250px] font-black leading-none tracking-tighter select-none relative flex">
            <span className="animate-[liquid-float_4s_ease-in-out_infinite] text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">4</span>
            <span className="animate-[liquid-float_5s_ease-in-out_infinite] text-cyan-400 mx-[-10px] md:mx-[-20px] drop-shadow-[0_0_60px_rgba(34,211,238,0.8)]">0</span>
            <span className="animate-[liquid-float_4.5s_ease-in-out_infinite] text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">4</span>
          </h1>

          <div className="absolute -bottom-20 left-0 w-full flex justify-center scale-y-[-0.5] opacity-10 blur-md pointer-events-none italic font-black text-[150px] md:text-[250px] text-cyan-300">
            404
          </div>
        </div>

        <div className="space-y-4 max-w-xl mx-auto backdrop-blur-xl bg-cyan-950/20 p-8 rounded-[3.5rem] border border-cyan-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform hover:scale-105 duration-500">
          <div className="flex justify-center gap-3 mb-2">
            <Anchor className="text-cyan-400 size-6 animate-bounce" />
            <span className="text-cyan-300 font-black tracking-[0.5em] text-xs uppercase">Deep Waters Ahead</span>
            <Sparkles className="text-cyan-400 size-6 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
             Lost in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">Ocean?</span>
          </h2>
          
          <p className="text-cyan-100/60 font-medium text-lg italic">
উফ! আপনার পেজটি খাবারের সাগরে তলিয়ে গেছে। একটু ডুব দিয়ে ওকে খুঁজে আনুন তো! 😎   </p>
        </div>

        <div className="flex justify-center pt-10">
          <Link href="/" className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full p-[3px] transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]">
            {/* Spinning Border */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#0ea5e9_50%,#06b6d4_100%)]" />
            
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-12 py-2 text-xl font-black text-white backdrop-blur-3xl transition-all group-hover:bg-cyan-600">
              <Home className="mr-3 size-6 transition-transform group-hover:-translate-y-1" />
              Navigate to Shore
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[200%] h-24 animate-[wave-flow_15s_linear_infinite] opacity-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,52.38,57.82,29.06,125,50.28,191.1,38,62.58-11.63,113-52.85,174.5-62,71.29-10.6,143.6,1,211.3,31.25,48,21.43,101.35,33.57,153.2,25.8V0Z" className="fill-cyan-500"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes liquid-float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
        @keyframes float-up {
          0% { transform: translateY(110vh) scale(0); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
        }
        @keyframes wave-flow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}