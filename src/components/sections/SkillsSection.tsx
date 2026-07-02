"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";

export function SkillsSection() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            My Arsenal
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Tools and processes I use to bring ideas to life. I believe in choosing the right instrument for the problem at hand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold border-b pb-2">{category}</h3>
              
              <div className="space-y-6">
                {skills.filter(s => s.category === category).map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium flex items-center gap-2">
                        <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0 mr-2">
                          {skill.name.charAt(0)}
                        </Badge>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
