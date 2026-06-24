"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Client Voices
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </motion.div>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="w-full relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-6 px-4 pb-8"
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Double array for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <Card key={`${testimonial.id}-${idx}`} className="w-[300px] md:w-[400px] shrink-0 glass bg-card/50">
              <CardContent className="p-6 md:p-8 flex flex-col h-full justify-between gap-6">
                <div className="text-primary/20 text-4xl font-serif mb-2 leading-none h-6">"</div>
                <p className="text-sm md:text-base italic flex-1 text-foreground/90 whitespace-normal">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Avatar className="h-10 w-10 border border-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/50 text-foreground font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{testimonial.name}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.title}, {testimonial.company}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
      
      {/* Logos Strip */}
      <div className="container mx-auto px-4 mt-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {["Stripe", "Linear", "Figma", "Vercel", "Notion", "Arc"].map(logo => (
            <span key={logo} className="font-bold text-xl md:text-2xl tracking-tighter text-foreground/40 font-mono">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
