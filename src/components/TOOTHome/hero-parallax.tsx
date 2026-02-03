"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  // Logic to handle exactly 6 images per row
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(6, 12);
  const thirdRow = products.slice(12, 18);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 150, damping: 25, bounce: 0 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 600]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [10, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.1, 1]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-600, 0]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[250vh] py-20 overflow-hidden antialiased relative flex flex-col [perspective:1000px] bg-[#050505]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          translateY,
          opacity,
        }}
        className="mt-[-100px]"
      >
        <div className="flex flex-col gap-10">
          {/* Row 1 */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
            {firstRow.map((product, idx) => (
              <ProductCard key={"row1" + idx} product={product} translate={translateX} />
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div className="flex flex-row space-x-10">
            {secondRow.map((product, idx) => (
              <ProductCard key={"row2" + idx} product={product} translate={translateXReverse} />
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
            {thirdRow.map((product, idx) => (
              <ProductCard key={"row3" + idx} product={product} translate={translateX} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 md:py-40 px-6 relative z-50 text-center">
      <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight">
        The Future of <br />
        <span className="text-emerald-500 italic">Creative Design</span>
      </h1>
      <p className="max-w-xl mx-auto text-neutral-400 text-lg md:text-xl mt-6 font-light">
        High-fidelity interfaces crafted with precision and modern technology.
      </p>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      className="group h-[300px] w-[500px] relative shrink-0 rounded-lg overflow-hidden border border-white/5 bg-[#111]"
    >
      <a href={product.link} className="block h-full w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        {/* Simple, Clear Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="px-6 py-2 border border-white text-white text-sm uppercase tracking-widest bg-black/50 backdrop-blur-sm">
                View Project
            </div>
        </div>
      </a>
      
      {/* Title that appears at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <p className="text-white font-medium text-lg opacity-80 group-hover:opacity-100 transition-opacity">
          {/* {product.title || "Untitled Work"} */}
        </p>
      </div>
    </motion.div>
  );
};