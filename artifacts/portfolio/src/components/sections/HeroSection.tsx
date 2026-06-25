"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Eye, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const titleText = "Rahul Doulagar";
  
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-40 dark:opacity-20" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative"
        >
          {/* Avatar Placeholder */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto bg-gradient-to-tr from-primary to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20" />
            </div>
          </div>
          
          {/* Orbital icons */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-dashed border-border/50 rounded-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background border rounded-md flex items-center justify-center text-[10px] font-bold">
              Fg
            </div>
            <div className="absolute bottom-1/4 -right-3 w-6 h-6 bg-background border rounded-md flex items-center justify-center text-[10px] font-bold">
              Xd
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter">
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={char === " " ? "mr-4" : ""}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6 max-w-2xl text-gradient"
        >
          UI/UX Designer & Motion Graphic Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          I craft intuitive user interfaces and bring brands to life through motion — where great design feels effortless and every frame tells a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Button size="lg" asChild className="h-12 px-8 rounded-full">
            <Link href="#work">
              <Eye className="mr-2 w-4 h-4" />
              View My Work
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-12 px-8 rounded-full">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="ghost" asChild className="h-12 px-8 rounded-full">
            <Link href="#contact">
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            <ArrowDown className="w-6 h-6" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
