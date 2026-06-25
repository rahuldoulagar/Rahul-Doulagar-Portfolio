"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Mail, Linkedin, Twitter, Send, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    toast.success("Message sent successfully!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-30 rotate-180" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Available for new projects
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let's Create Something Remarkable
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Whether you have a specific project in mind or just want to chat about design, I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-card border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:frankrahul297@gmail.com" className="font-medium hover:text-primary transition-colors">
                    frankrahul297@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-card border flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"></path></svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+917097483082" className="font-medium hover:text-primary transition-colors">+91 70974 83082</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-12 h-12 rounded-full bg-card border flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="font-medium">Hyderabad, India (Remote ok)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.behance.net/gallery/248518759/Presentation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border bg-card flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:-translate-y-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.577 1.878 1.368 2.208.53.208 1.086.208 1.617 0 .695-.298 1.14-.857 1.338-1.559l3.433.38zM16.007 13h3.949c-.072-1.11-.578-1.722-1.86-1.722-1.112 0-1.898.598-2.089 1.722zm-6.74-2.5c.688-.385 1.155-1.065 1.155-2.002 0-2.1-1.6-3-3.622-3H1v12h5.963c2.072 0 3.999-.951 3.999-3.2 0-1.195-.621-2.101-1.695-2.798zM4.071 7.5H6.1c.8 0 1.442.4 1.442 1.2 0 .9-.71 1.3-1.5 1.3H4.07V7.5zm2.3 7H4.07v-2.7H6.4c1.1 0 1.7.5 1.7 1.35 0 .9-.63 1.35-1.73 1.35z"/></svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl border border-border/50 relative"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-background/50 border-border/50 focus-visible:ring-primary"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background/50 border-border/50 focus-visible:ring-primary"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select 
                    id="projectType"
                    className="flex h-9 w-full rounded-md border border-input bg-background/50 px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                    {...register("projectType")}
                  >
                    <option value="">Select...</option>
                    <option value="ui">UI Design</option>
                    <option value="ux">UX Research</option>
                    <option value="full">End-to-end Product</option>
                    <option value="system">Design System</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget</Label>
                  <select 
                    id="budget"
                    className="flex h-9 w-full rounded-md border border-input bg-background/50 px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                    {...register("budget")}
                  >
                    <option value="">Select...</option>
                    <option value="small">&lt; $5k</option>
                    <option value="medium">$5k - $15k</option>
                    <option value="large">$15k - $30k</option>
                    <option value="xl">&gt; $30k</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="min-h-[120px] bg-background/50 border-border/50 focus-visible:ring-primary resize-none"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
