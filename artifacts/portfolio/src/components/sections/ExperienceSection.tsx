"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1.5 md:mt-0 z-10 shadow-[0_0_0_4px_var(--background)]" />

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <div className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform border border-border/50">
                      <div className={`flex flex-col gap-2 ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <Badge variant="outline" className="w-max mb-2">
                          {item.period}
                        </Badge>
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <p className="text-lg text-primary">{item.company}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.type === "certification" 
                            ? "Completed professional certification to formalize expertise."
                            : "Led design initiatives, collaborated with engineering, and delivered high-impact user experiences."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
