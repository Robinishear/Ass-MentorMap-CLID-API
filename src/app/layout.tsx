import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SmoothScroll } from "@/components/smooth-scroll";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FoodHub | Discover & Order Delicious Meals",
  description:
    "The premium food delivery experience. Browse menus, order from top providers, and track your meals in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
         style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 560'%3E%3Cdefs%3E%3Cstyle%3E@keyframes f1{0%25{transform:translate(0,0)}50%25{transform:translate(-10px,0)}100%25{transform:translate(0,0)}}@keyframes f2{0%25{transform:translate(0,0)}50%25{transform:translate(-5px,-5px)}100%25{transform:translate(0,0)}}@keyframes f3{0%25{transform:translate(0,0)}50%25{transform:translate(0,-10px)}100%25{transform:translate(0,0)}}.t1{animation:f1 5s infinite}.t2{animation:f2 4s infinite}.t3{animation:f3 6s infinite}%3C/style%3E%3C/defs%3E%3Crect width='1440' height='560' fill='%23060f1f'/%3E%3Cpath class='t1' fill='rgba(28,83,142,.25)' d='M908.937 499.771c58.078 1.08 118.066-17.393 148.092-67.119 30.899-51.171 25.085-116.504-6.609-167.186-29.87-47.766-85.146-69.733-141.483-69.632-56.136.101-111.728 21.999-140.603 70.139-29.652 49.434-27.953 111.941 1.756 161.341 28.837 47.95 82.904 71.415 138.847 72.456'/%3E%3Cpath class='t2' fill='rgba(28,83,142,.2)' d='M259.634 578.042c46.609 1.29 97.341-5.119 122.806-44.178 27.393-42.016 24.795-98.28-2.486-140.369-25.252-38.959-74.018-52.494-120.32-49.093-40.428 2.97-72.056 30.163-93.16 64.773-22.25 36.49-39.054 80.78-18.41 118.201 21.147 38.332 67.809 49.455 111.57 50.666'/%3E%3Cpath class='t3' fill='rgba(28,83,142,.3)' d='M685.308 758.679c53.666.92 102.054-34.019 125.777-82.166 21.399-43.43 3.739-91.512-19.192-134.153-24.699-45.93-54.564-96.072-106.585-99.735-56.773-3.997-110.095 32.063-136.192 82.641-24.265 47.026-8.996 101.352 17.672 147.058 26.403 45.251 66.137 85.457 118.52 86.355'/%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen"
        className={`${plusJakartaSans.variable} ${fraunces.variable} font-sans antialiased bg-cream text-charcoal`}>
        <SmoothScroll />
        {children}
        <Footer></Footer>
      
      </body>
    </html>
  );
}
