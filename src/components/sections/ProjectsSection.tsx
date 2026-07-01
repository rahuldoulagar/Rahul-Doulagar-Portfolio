"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectsSection() {
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Selected Work
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="All" className="w-full overflow-x-auto pb-2" onValueChange={setActiveCategory}>
              <TabsList className="bg-transparent border w-max">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-4 py-2"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-300 glass border-border/50">
                  <div className={`h-48 md:h-60 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    
                    {/* Mock UI elements in the thumbnail */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-card rounded-t-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-[60%] flex flex-col overflow-hidden border border-border/50">
                      <div className="h-6 w-full bg-muted/50 border-b flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="p-4 flex flex-col gap-3">
                        <div className="h-4 w-1/2 bg-muted rounded-md" />
                        <div className="h-24 w-full bg-muted/50 rounded-md" />
                        <div className="h-4 w-3/4 bg-muted rounded-md" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{project.category}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 border-t border-border/10 flex gap-4 mt-auto">
                    <Button variant="default" size="sm" className="w-full group/btn">
                      Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
