"use client";

import React from "react";
import { 
  Pizza, Utensils, Soup, Sandwich, Beef, Coffee, 
  Search, CalendarCheck, ChefHat, ArrowRight, Star, Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeContent = () => {
  return (
    // Background color changed to a very dark food-themed charcoal
    <div className="space-y-32 py-24 text-white overflow-hidden ">
      
      {/* Categories Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              Explore Top <span className="text-orange-500">Delicacies</span>
            </h2>
            <p className="text-gray-400 text-lg">আপনার প্রিয় সব খাবার এবং টপ শেফদের সার্ভিস পান এক জায়গায়।</p>
          </div>
          <Button variant="ghost" className="text-orange-400 hover:text-orange-300">View All Menus <ArrowRight className="ml-2 size-4" /></Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: "Fast Food", icon: <Pizza />, color: "bg-orange-500/10 text-orange-400" },
            { name: "Local Curry", icon: <Soup />, color: "bg-amber-500/10 text-amber-400" },
            { name: "Healthy", icon: <Beef />, color: "bg-emerald-500/10 text-emerald-400" },
            { name: "Snacks", icon: <Sandwich />, color: "bg-rose-500/10 text-rose-400" },
            { name: "Gourmet", icon: <ChefHat />, color: "bg-yellow-500/10 text-yellow-400" },
            { name: "Beverage", icon: <Coffee />, color: "bg-cyan-500/10 text-cyan-400" },
          ].map((cat, i) => (
            <div key={i} className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.08] transition-all duration-500 text-center cursor-pointer overflow-hidden">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-orange-500/5 to-transparent`} />
              <div className={`mb-6 inline-flex p-4 rounded-2xl ${cat.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {React.cloneElement(cat.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-white font-bold text-lg relative z-10">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Experts Section (Chefs/Providers) */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Master Chefs</span></h2>
          <p className="text-gray-400 text-lg font-light">সেরা সব হোম শেফ এবং প্রফেশনাল কুজিন এক্সপার্টদের হাতের জাদুকরী স্বাদ নিতে আজই বুক করুন।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Chef Ariful", role: "Italian & French Cuisine", rating: "4.9", price: "45", img: "https://i.pravatar.cc/150?u=chef1" },
            { name: "Nusrat Jahan", role: "Traditional Bengali Specialist", rating: "5.0", price: "30", img: "https://i.pravatar.cc/150?u=chef2" },
            { name: "Chef Tanvir", role: "Pastry & Dessert Artist", rating: "4.8", price: "35", img: "https://i.pravatar.cc/150?u=chef3" },
          ].map((chef, i) => (
            <div key={i} className="group  border border-white/5 rounded-[2.5rem] p-8 hover:border-orange-500/30 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <Star className="fill-yellow-400 text-yellow-400 size-3.5" />
                  <span className="text-xs font-bold">{chef.rating}</span>
                </div>
              </div>
              
              <img src={chef.img} className="w-24 h-24 rounded-[2rem] mb-6 object-cover ring-4 ring-orange-500/20 group-hover:scale-105 transition-transform duration-500" alt={chef.name} />
              <h3 className="text-2xl font-bold mb-2">{chef.name}</h3>
              <p className="text-orange-400/80 font-medium mb-6">{chef.role}</p>
              
              <div className="flex items-center justify-between py-6 border-t border-white/5">
                <div className="text-sm text-gray-400 italic">Booking starts from</div>
                <div className="text-2xl font-black text-white">${chef.price}<span className="text-sm font-normal text-gray-500">/meal</span></div>
              </div>
              <Button className="w-full h-14 bg-blue-400/20 hover:bg-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 transition-all active:scale-95">
                Order Now
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-b from-orange-600/10 to-transparent p-12 md:p-24 rounded-[4rem] border border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How FoodHub Works</h2>
            <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Find Your Menu", desc: "আপনার পছন্দের ডিশ বা শেফকে ক্যাটাগরি থেকে বেছে নিন।", icon: <Search /> },
              { title: "Order/Book", desc: "আপনার ডেলিভারি টাইম এবং লোকেশন সেট করে অর্ডার করুন।", icon: <CalendarCheck /> },
              { title: "Quick Delivery", desc: "সেরা স্বাদে গরম গরম খাবার পৌছে যাবে আপনার দরজায়।", icon: <Truck /> },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 group hover:bg-orange-600 transition-colors duration-500 shadow-2xl">
                  {React.cloneElement(step.icon as React.ReactElement, { className: "size-10 group-hover:text-white group-hover:scale-110 transition-all" })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-12">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-gradient-to-b from-orange-600/10 to-transparent p-12 md:p-24 shadow-[0_0_50px_rgba(234,88,12,0.3)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Craving for something <br /> special?
            </h2>
            <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              স্বাদ এবং মানের সেরা মিলনমেলায় আপনাকে স্বাগতম। আজই যোগ দিন ফুডহাব কমিউনিটিতে।
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-500 font-black px-10 py-8 text-xl rounded-[1.5rem] shadow-xl transition-transform hover:scale-105 active:scale-95">
                Join as a Customer
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-10 py-8 text-xl rounded-[1.5rem] backdrop-blur-md shadow-xl transition-transform hover:scale-105 active:scale-95">
                Start Cooking for Us
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeContent;