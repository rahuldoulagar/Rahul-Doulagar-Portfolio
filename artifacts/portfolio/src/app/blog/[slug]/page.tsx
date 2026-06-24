import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { PageTransition } from "@/components/shared/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  if (relatedPosts.length === 0) {
    relatedPosts.push(...blogPosts.filter(p => p.slug !== post.slug).slice(0, 2));
  }

  return (
    <PageTransition>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background text-foreground pb-24">
        {/* Hero Area */}
        <div className={`w-full pt-32 pb-24 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <Button asChild variant="ghost" className="mb-8 text-white hover:text-white/80 hover:bg-white/10">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-none">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-4 md:px-8 mt-16 flex flex-col lg:flex-row gap-16">
          <article className="lg:w-2/3 prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2>The Changing Landscape</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <blockquote>
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <h3>Looking Forward</h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </article>
          
          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="glass p-6 rounded-2xl border border-border/50">
                <h3 className="font-bold text-lg mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-mono">
                    AM
                  </div>
                  <div>
                    <p className="font-medium">Alex Morgan</p>
                    <p className="text-sm text-muted-foreground">UI/UX Designer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Senior designer passionate about creating intuitive and beautiful digital experiences.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map(related => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                      <div className="flex gap-4 items-center">
                        <div className={`w-16 h-16 rounded-md bg-gradient-to-br ${related.gradient} shrink-0`} />
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{related.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
