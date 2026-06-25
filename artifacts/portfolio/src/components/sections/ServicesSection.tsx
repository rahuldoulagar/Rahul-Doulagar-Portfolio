"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layout, Layers, Image, Play, Presentation } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  "UI/UX Design": <Layout className="w-8 h-8 text-primary" />,
  "Motion Graphics": <Play className="w-8 h-8 text-primary" />,
  "Graphic Design": <Image className="w-8 h-8 text-primary" />,
  "Social Media Design": <Layers className="w-8 h-8 text-primary" />,
  "Presentation Design": <Presentation className="w-8 h-8 text-primary" />
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            How I Can Help
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass border-border/50 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 p-3 bg-primary/10 w-max rounded-xl">
                    {iconMap[service.title] || <Layout className="w-8 h-8 text-primary" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-sm flex items-center text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href="#contact" 
                      className="inline-flex items-center text-sm font-medium text-primary group/link"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
