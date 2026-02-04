"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Star,
  Eye,
  Utensils,
  Pizza,
  Soup,
  Beef,
  Coffee,
  IceCream,
  Cookie,
  Cake,
  Flame,
  ChefHat,
  Salad,
  Sandwich,
  Croissant,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useCart } from "@/store/useCart";
import { toast } from "react-hot-toast";

const MealIllustration = ({ id }: { id: string }) => {
  const icons = [
    Pizza,
    Soup,
    Beef,
    Coffee,
    IceCream,
    Cookie,
    Cake,
    Flame,
    ChefHat,
    Salad,
    Sandwich,
    Croissant,
    Utensils,
  ];

  // Use id to pick a deterministic "random" icon
  const iconIndex = id
    ? id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      icons.length
    : 0;
  const Icon = icons[iconIndex];

  return (
    <div className='w-full h-full bg-cream flex items-center justify-center relative overflow-hidden'>
      {/* --- Decorative Patterns --- */}
      <div
        className='absolute inset-0 opacity-[0.03] pointer-events-none'
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0a0a0a 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className='relative z-10 size-24 bg-white border-4 border-charcoal flex items-center justify-center rotate-3  group-hover:rotate-0 group-hover:scale-110 transition-all duration-500'>
        <Icon className='size-12 text-brand' strokeWidth={2.5} />
      </div>

      {/* --- Abstract Shapes --- */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 border-4 border-charcoal/5 rounded-full rotate-45' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-56 border-2 border-charcoal/5 rounded-full -rotate-12' />
    </div>
  );
};

interface MealCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl?: string | null;
  description?: string | null;
  category?: string;
  providerName?: string;
  providerId: string;
}

export function MealCard({
  id,
  name,
  price,
  imageUrl,
  description,
  category,
  providerName,
  providerId,
}: MealCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id,
      name,
      price,
      imageUrl,
      restaurantId: providerId,
      restaurantName: providerName,
    });
    toast.success(`${name} added to cart!`, {
      icon: "🍱",
      style: {
        border: "3px solid #0a0a0a",
        padding: "16px",
        color: "#0a0a0a",
        fontWeight: "900",
        textTransform: "uppercase",
        borderRadius: "0",
        background: "#fff",
        boxShadow: "8px 8px 0px 0px rgba(255,87,34,1)",
      },
      duration: 2000,
    });
  };
  return (
  <Card className="group relative border border-white/5 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-6 hover:border-orange-500/30 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col h-full">
  
  <div className="relative aspect-square overflow-hidden rounded-[2rem] mb-6">
    {imageUrl ? (
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    ) : (
      <MealIllustration id={id} />
    )}
    
    <div className="absolute top-4 right-4 z-10">
      <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        <Star className="fill-yellow-400 text-yellow-400 size-3.5" />
        <span className="text-xs font-bold text-white">4.8</span>
      </div>
    </div>
  </div>

  <div className="flex-grow space-y-2">
    <div className="flex flex-col gap-1">
      {category && (
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400/80">
          {category}
        </span>
      )}
      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
        {name}
      </h3>
    </div>

    {providerName && (
      <p className="text-sm font-medium text-gray-400 italic">
        Chef: <span className="text-white/80 not-italic">{providerName}</span>
      </p>
    )}

    {description && (
      <p className="text-sm text-gray-500 line-clamp-2 font-light leading-relaxed">
        {description}
      </p>
    )}
  </div>

  <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
    <div className="flex items-center justify-between">
      <div className="text-xs text-gray-500 italic">Price starts from</div>
      <div className="text-2xl font-black text-white">
        ${Number(price).toFixed(2)}
        <span className="text-xs font-normal text-gray-500">/meal</span>
      </div>
    </div>

    <div className="grid grid-cols-5 gap-2">
      <Button 
        onClick={handleAddToCart}
        className="col-span-1 h-14 bg-white/5 hover:bg-white/10 text-white rounded-2xl border border-white/10 transition-all active:scale-95"
      >
        <Plus className="size-6" />
      </Button>
      
      <Button 
        asChild
        className="col-span-4 h-14 bg-orange-500/10 hover:bg-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/10 transition-all active:scale-95 border border-orange-500/20"
      >
        <Link href={`/meals/${id}`}>
          Order Now
        </Link>
      </Button>
    </div>
  </div>
</Card>
  );
}
