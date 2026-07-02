"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Latest Insights
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden group cursor-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass border-border/50">
                  <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{post.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-xs font-medium text-foreground/70">
                      {post.date}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
