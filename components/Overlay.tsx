"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 logic
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2 logic
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3 logic
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.9], [100, -100]);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-start pt-32 md:pt-40 pointer-events-auto"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-widest text-white mb-2 leading-tight text-center uppercase">
            Arjun<br /><span className="text-white/50">Agnihotri.</span>
          </h1>
          <p className="text-white/60 uppercase tracking-[0.2em] text-sm mt-4">
            Data Analyst
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-24 pointer-events-auto"
        >
          <h2 className="text-3xl md:text-6xl font-semibold max-w-xl leading-tight text-white">
            Transforming <br/><span className="italic text-white/50 font-light">data into insights.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex items-center justify-end px-4 md:px-16 lg:px-24 text-right pointer-events-auto"
        >
          <div className="flex flex-col items-end max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
              Bridging <br/><span className="text-white/60 italic font-light">analytics & strategy.</span>
            </h2>
            <div className="w-24 h-[2px] bg-white/40 my-8"></div>
            <p className="text-white/80 md:text-lg leading-relaxed font-light drop-shadow-md">
              Motivated Data Analyst fresher bridging numbers and business decisions 
              through Power BI, Python, and SQL.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
