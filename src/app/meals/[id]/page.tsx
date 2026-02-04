"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Star,
  Clock,
  ShieldCheck,
  ShoppingCart,
  MapPin,
  Store,
  Pizza,
  Beef,
  Soup,
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
  Plus,
  Minus,
  Utensils as UtensilsIcon,
  MessageSquare,
} from "lucide-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/store/useCart";
import { toast } from "react-hot-toast";
import { CartSheet } from "@/components/cart-sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    UtensilsIcon,
  ];

  const iconIndex = id
    ? id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      icons.length
    : 0;
  const Icon = icons[iconIndex];

  return (
    <div className='w-full h-full bg-cream flex items-center justify-center relative overflow-hidden'>
      <div
        className='absolute inset-0 opacity-[0.03] pointer-events-none'
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0a0a0a 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className='relative z-10 size-40 bg-white border-4 border-charcoal flex items-center justify-center rotate-3 shadow-[12px_12px_0px_0px_rgba(255,87,34,1)]'>
        <Icon className='size-20 text-brand' strokeWidth={2.5} />
      </div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 border-8 border-charcoal/5 rounded-full rotate-45' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 border-4 border-charcoal/5 rounded-full -rotate-12' />
    </div>
  );
};

interface Review {
  id: string;
  rating: number;
  comment?: string;
  createdAt: string;
  customer: {
    name: string;
    image?: string | null;
  };
}

interface Meal {
  id: string;
  name: string;
  price: string;
  imageUrl: string | null;
  description: string | null;
  categoryId: string;
  providerId: string;
  category: { name: string };
  provider: {
    restaurantName: string;
    address: string;
    cuisineType: string;
  };
}

export default function MealDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      : 0;

  const handleAddToCart = () => {
    if (!meal) return;

    // Add multiple quantities at once
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: meal.id,
        name: meal.name,
        price: Number(meal.price),
        imageUrl: meal.imageUrl,
        restaurantId: meal.providerId,
        restaurantName: meal.provider.restaurantName,
      });
    }

    toast.success(
      `${quantity > 1 ? `${quantity}x ` : ""}${meal.name} added to basket!`,
      {
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
      },
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mealRes, reviewsRes] = await Promise.all([
          fetch(`/api/meals/${id}`),
          fetch(`/api/reviews/meal/${id}`),
        ]);

        const mealJson = await mealRes.json();
        const reviewsJson = await reviewsRes.json();

        if (mealJson.success) setMeal(mealJson.data);
        if (reviewsJson.success) setReviews(reviewsJson.data);
      } catch (error) {
        console.error("Failed to fetch meal data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className='min-h-screen bg-cream'>
        <LoadingSpinner
          text='Preparing the details...'
          size='xl'
          className='h-screen'
        />
      </div>
    );
  }

  if (!meal) {
    return (
      <div className='min-h-screen bg-amber-600 flex flex-col items-center justify-center gap-8 p-6 text-center'>
        <div className='size-32 bg-white border-4 border-charcoal flex items-center justify-center rotate-6 shadow-[8px_8px_0px_0px_rgba(10,10,10,1)]'>
          <Utensils className='size-16 text-brand' />
        </div>
        <div>
          <h1 className='text-4xl font-serif font-black text-charcoal tracking-tighter uppercase'>
            Flavor Missing
          </h1>
          <p className='text-sm font-bold text-gray-400 uppercase tracking-widest mt-2 font-mono'>
            This dish seems to have left the kitchen.
          </p>
        </div>
        <Button
          asChild
          className='bg-brand text-white font-black uppercase tracking-widest rounded-none border-2 border-charcoal px-8 py-6 hover:bg-black transition-all shadow-[8px_8px_0px_0px_rgba(10,10,10,1)]'>
          <Link href='/meals'>Back to Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#0a0a0a] text-white'>
  {/* --- Sticky Header --- */}
  <header className='bg-black/20 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40'>
    <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
      <Button
        onClick={() => router.back()}
        variant='ghost'
        className='group font-bold uppercase tracking-widest text-xs flex items-center gap-3 px-0 hover:bg-transparent text-white/70 hover:text-orange-400 transition-colors'>
        <div className='size-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-all'>
          <ChevronLeft className='size-5' />
        </div>
        Back
      </Button>

      <div className='flex items-center gap-4'>
        <Badge className='bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] px-4 py-2 hidden md:block'>
          AUTHENTIC {meal.category.name}
        </Badge>
        <CartSheet />
      </div>
    </div>
  </header>

  <main className='max-w-7xl mx-auto px-6 py-12 md:py-20'>
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start'>
      
      {/* --- Image Section --- */}
      <div className='lg:col-span-6 space-y-8'>
        <div className='relative aspect-square rounded-[3rem] border border-white/10 bg-white/5 shadow-2xl overflow-hidden group'>
          {meal.imageUrl ? (
            <Image
              src={meal.imageUrl}
              alt={meal.name}
              fill
              className='object-cover transition-transform duration-1000 group-hover:scale-110'
              priority
            />
          ) : (
            <MealIllustration id={meal.id} />
          )}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
          <div className='absolute bottom-8 left-8'>
            <Badge className='bg-orange-500 text-white border-none rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest shadow-xl shadow-orange-600/20'>
              {meal.category.name}
            </Badge>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          {[
            { icon: Clock, label: "25-30 MIN" },
            { icon: Star, label: averageRating > 0 ? `${averageRating.toFixed(1)} (${reviews.length})` : "NO REVIEWS", active: averageRating > 0 },
            { icon: ShieldCheck, label: "QUALITY CHECK" }
          ].map((item, idx) => (
            <div key={idx} className='bg-white/5 border border-white/10 rounded-[1.5rem] p-5 flex flex-col items-center gap-2 backdrop-blur-sm'>
              <item.icon className={`size-5 ${item.active ? "text-orange-400 fill-orange-400" : "text-orange-400"}`} />
              <span className='text-[9px] font-bold uppercase tracking-widest text-white/60 text-center'>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className='lg:col-span-6 space-y-10'>
        <div className='space-y-6'>
          <h1 className='text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none'>
            {meal.name}
          </h1>
          <div className='flex items-center gap-4'>
            <div className='h-px w-12 bg-orange-500' />
            <p className='text-4xl font-black text-orange-400 tracking-tighter'>
              ${Number(meal.price).toFixed(2)}
            </p>
          </div>
        </div>

        <p className='text-lg font-light text-gray-400 leading-relaxed border-l-2 border-orange-500/30 pl-8'>
          {meal.description || "Chef-crafted masterpiece prepared with seasonal local ingredients."}
        </p>

        {/* --- Restaurant Info --- */}
        <Card className='rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden'>
          <CardContent className='p-8 space-y-6'>
            <div className='flex items-center gap-4'>
              <div className='size-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center'>
                <Store className='size-7 text-orange-400' />
              </div>
              <div>
                <p className='text-[10px] font-black text-orange-500/60 uppercase tracking-[0.2em] mb-1'>
                  Kitchen Origin
                </p>
                <h3 className='font-bold text-xl text-white uppercase'>
                  {meal.provider.restaurantName}
                </h3>
              </div>
            </div>
            <div className='flex items-center gap-3 text-sm font-medium text-gray-400 border-t border-white/5 pt-6'>
              <MapPin className='size-4 text-orange-400 shrink-0' />
              <span className='truncate'>{meal.provider.address}</span>
            </div>
          </CardContent>
        </Card>

        {/* --- Action Section --- */}
        <div className='space-y-6'>
          <div className='flex items-center justify-between bg-white/5 border border-white/10 rounded-[2rem] p-4 backdrop-blur-md'>
            <div className='flex items-center gap-6'>
              <Button
                variant='ghost'
                size='icon'
                className='size-12 rounded-full border border-white/10 hover:bg-orange-500 hover:text-white transition-all text-white'
                onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className='size-4' />
              </Button>
              <span className='text-3xl font-black text-white w-10 text-center'>
                {quantity}
              </span>
              <Button
                variant='ghost'
                size='icon'
                className='size-12 rounded-full border border-white/10 hover:bg-orange-500 hover:text-white transition-all text-white'
                onClick={() => setQuantity(quantity + 1)}>
                <Plus className='size-4' />
              </Button>
            </div>
            <div className='text-right pr-4'>
              <p className='text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1'>Subtotal</p>
              <p className='text-2xl font-black text-white'>
                ${(Number(meal.price) * quantity).toFixed(2)}
              </p>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className='w-full h-20 bg-orange-500 hover:bg-orange-600 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-lg transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98] group'>
            <ShoppingCart className='size-6 mr-3 group-hover:rotate-12 transition-transform' />
            Order This Meal
          </Button>
        </div>
      </div>
    </div>

    {/* --- Reviews Section --- */}
    <section className='mt-32 space-y-16'>
      <div className='text-center max-w-2xl mx-auto space-y-4'>
        <h2 className='text-5xl md:text-6xl font-bold text-white tracking-tighter'>
          Kitchen <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Talk</span>
        </h2>
        <div className='flex items-center justify-center gap-2'>
           <div className='h-px w-8 bg-white/20' />
           <p className='text-xs font-bold text-gray-500 uppercase tracking-[0.3em]'>
             {reviews.length} Verified Reviews
           </p>
           <div className='h-px w-8 bg-white/20' />
        </div>
      </div>

      {reviews.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {reviews.map((review) => (
            <Card key={review.id} className='rounded-[2.5rem] border border-white/5 bg-white/5 backdrop-blur-md overflow-hidden hover:border-orange-500/30 transition-all duration-500'>
              <CardContent className='p-8 space-y-6'>
                <div className='flex justify-between items-start'>
                  <div className='flex items-center gap-4'>
                    <Avatar className='size-12 rounded-2xl border border-white/10'>
                      <AvatarImage src={review.customer.image || ""} />
                      <AvatarFallback className='bg-orange-500 text-white font-black'>
                        {review.customer.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='font-bold text-sm text-white uppercase'>{review.customer.name}</p>
                      <p className='text-[10px] font-medium text-gray-500'>{new Date(review.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className='bg-orange-500/10 border border-orange-500/20 text-orange-400 px-3 py-1.5 rounded-full flex items-center gap-1.5'>
                    <span className='text-xs font-black'>{review.rating}</span>
                    <Star className='size-3 fill-orange-400' />
                  </div>
                </div>
                <p className='text-gray-400 text-sm italic font-medium leading-relaxed'>
                  &quot;{review.comment || "AMAZING FLAVOR, HIGHLY RECOMMENDED!"}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className='py-20 rounded-[3rem] border border-white/5 border-dashed bg-white/5 flex flex-col items-center justify-center text-center p-12 space-y-4'>
           <MessageSquare className='size-12 text-white/10 mb-2' />
           <h3 className='text-xl font-bold text-white uppercase tracking-tight'>The silence is delicious</h3>
           <p className='text-xs font-medium text-gray-500 uppercase tracking-widest'>Be the first to share your experience</p>
        </div>
      )}
    </section>
  </main>

  <footer className='mt-32 border-t border-white/5 bg-black/40 py-16'>
    <div className='max-w-7xl mx-auto px-6 text-center'>
      <p className='text-[10px] font-bold text-white/30 uppercase tracking-[0.5em]'>
        Premium Culinary Experience • FoodHub Network 2026
      </p>
    </div>
  </footer>
</div>
  );
}
