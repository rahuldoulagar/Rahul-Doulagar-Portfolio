"use client";

import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PageTransition } from "@/components/shared/PageTransition";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkGallerySection } from "@/components/sections/WorkGallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <PageTransition>
      <ScrollProgress />
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background text-foreground">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkGallerySection />
        <TestimonialsSection />
        <ExperienceSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </PageTransition>
  );
}
