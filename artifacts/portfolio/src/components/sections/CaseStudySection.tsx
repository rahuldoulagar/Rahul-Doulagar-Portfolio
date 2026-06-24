"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function CaseStudySection() {
  return (
    <section id="case-study" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <Badge className="w-max mb-6">Featured Case Study</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Finova Banking
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Redesigning the mobile experience for 2M+ users to increase financial literacy and task completion.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">The Problem</h4>
                <p className="text-sm">Users found the existing app overwhelming, leading to a 40% drop-off rate during key transactions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">The Solution</h4>
                <p className="text-sm">A simplified, modular architecture that surfaces contextual actions when users actually need them.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center p-8"
          >
            {/* Abstract App Mockup */}
            <div className="relative w-full max-w-[320px] h-full max-h-[640px] bg-background border border-border/50 rounded-[2.5rem] shadow-2xl p-4 flex flex-col gap-4 overflow-hidden z-10">
              {/* Status bar area */}
              <div className="w-full h-6 flex justify-between items-center px-4 mb-4">
                <div className="text-[10px] font-medium">9:41</div>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                </div>
              </div>

              {/* App Content Mock */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-4 w-24 bg-muted rounded" />
                  <div className="h-6 w-32 bg-primary/40 rounded" />
                </div>
              </div>

              <div className="h-32 w-full bg-gradient-to-r from-blue-500/80 to-cyan-400/80 rounded-xl mb-6 flex flex-col justify-between p-4">
                <div className="h-4 w-16 bg-white/30 rounded" />
                <div className="h-8 w-32 bg-white/50 rounded" />
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <div className="w-5 h-5 rounded bg-primary/40" />
                    </div>
                    <div className="h-2 w-10 bg-muted rounded" />
                  </div>
                ))}
              </div>

              <div className="flex-1 bg-muted/30 rounded-xl p-4 space-y-4">
                <div className="h-4 w-24 bg-muted rounded" />
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary/20" />
                      <div className="flex flex-col gap-1">
                        <div className="h-3 w-16 bg-muted rounded" />
                        <div className="h-2 w-12 bg-muted/50 rounded" />
                      </div>
                    </div>
                    <div className="h-3 w-12 bg-primary/30 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating metric badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-4 md:-left-8 glass px-4 py-3 rounded-xl border border-border shadow-lg z-20 flex flex-col gap-1"
            >
              <span className="text-xs text-muted-foreground">Task Completion</span>
              <span className="text-xl font-bold text-green-500">+40%</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/3 -right-4 md:-right-8 glass px-4 py-3 rounded-xl border border-border shadow-lg z-20 flex flex-col gap-1"
            >
              <span className="text-xs text-muted-foreground">App Store</span>
              <span className="text-xl font-bold flex items-center gap-1">4.8 <span className="text-yellow-500">★</span></span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
