"use client";

import React from "react";
import { 
  Facebook, Instagram, Twitter, Mail, Phone, MapPin, 
  UtensilsCrossed, ArrowUpRight, Youtube 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-600/10 to-transparent border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                <UtensilsCrossed className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                Food<span className="text-blue-500">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Experience the future of food delivery. We bring the finest cuisines 
              from local experts straight to your creative space.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <Twitter size={18} />, link: "#" },
                { icon: <Youtube size={18} />, link: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Explore</h3>
            <ul className="space-y-4">
              {["Browse Meals", "Top Providers", "Special Offers", "Join as Provider"].map((item) => (
                <li key={item}>
                  <a href="#" className="group text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-xs tracking-[0.2em]">Support</h3>
            <ul className="space-y-4">
              {["Help Center", "Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="group text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Get in Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-2 rounded-lg"><MapPin size={16} className="text-blue-400" /></div>
                <span className="text-sm text-gray-400">Dhanmondi, Dhaka,<br />Bangladesh</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-2 rounded-lg"><Phone size={16} className="text-blue-400" /></div>
                <span className="text-sm text-gray-400">+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-2 rounded-lg"><Mail size={16} className="text-blue-400" /></div>
                <span className="text-sm text-gray-400">hi@foodhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-[11px] uppercase tracking-widest">
            © 2026 FoodHub Inc. <span className="mx-2">|</span> Made with Passion in Bangladesh
          </div>
          
          <div className="flex items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {/* Payment Icons Placeholder (Using Lucide Icons as placeholder or simple text) */}
            <div className="flex gap-4 items-center grayscale">
               <div className="px-3 py-1 border border-white/20 rounded text-[10px] text-white font-bold uppercase tracking-tighter">Visa</div>
               <div className="px-3 py-1 border border-white/20 rounded text-[10px] text-white font-bold uppercase tracking-tighter">Mastercard</div>
               <div className="px-3 py-1 border border-white/20 rounded text-[10px] text-white font-bold uppercase tracking-tighter">bKash</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;