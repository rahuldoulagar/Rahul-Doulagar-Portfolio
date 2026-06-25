"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Brands Served", value: "15+" },
    { label: "Promotions", value: "3" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                I'm a UI/UX and Motion Graphic Designer at eYantra Ventures, passionate about crafting visual experiences that are both beautiful and purposeful.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Since joining eYantra Ventures in 2023 as a Jr. Graphic Designer, I've grown steadily through four roles — driven by curiosity, craft, and a genuine love for design. Today I work across graphic design, UI/UX, and motion graphics, helping brands communicate clearly and look great doing it.
              </p>
            </div>

            <div className="relative pl-8 border-l-4 border-primary/30 my-10">
              <span className="absolute -top-4 -left-3 text-6xl text-primary/20 font-serif leading-none">"</span>
              <p className="text-xl md:text-2xl font-medium italic text-foreground leading-snug">
                Great design is felt, not noticed. Whether it's a seamless interface or a frame of animation — if it moves people, it's working.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</span>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden glass flex items-center justify-center bg-card/30"
          >
            {/* Abstract visual element */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background z-0" />
            
            <div className="relative z-10 w-64 h-64">
              {/* Outer ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/30 rounded-full border-dashed"
              />
              
              {/* Middle ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-purple-500/30 rounded-full"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
              </motion.div>
              
              {/* Inner core */}
              <div className="absolute inset-16 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-md opacity-50" />
              <div className="absolute inset-16 bg-card border border-border rounded-full flex items-center justify-center backdrop-blur-sm z-20">
                <span className="font-bold text-2xl tracking-tighter">RD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
