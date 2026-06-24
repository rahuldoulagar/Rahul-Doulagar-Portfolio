import Link from "next/link";
import { Github, Twitter, Linkedin, Dribbble } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-slate-300 py-16 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary/50 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold font-mono tracking-tighter">
                RD
              </div>
              <span className="font-semibold tracking-tight text-white text-lg">
                Rahul Doulagar
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs">
              Designing digital products that feel inevitable. Crafting interfaces 
              where form and function exist in perfect harmony.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-6">Work</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#work" className="hover:text-primary transition-colors">Featured Projects</Link></li>
              <li><Link href="#case-study" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#experience" className="hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="/resume.pdf" className="hover:text-primary transition-colors">Resume</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#services" className="hover:text-primary transition-colors">UI Design</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">UX Research</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Design Systems</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Prototyping</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact Me</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><a href="mailto:hello@rahuldoulagar.design" className="hover:text-primary transition-colors">hello@rahuldoulagar.design</a></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {year} Rahul Doulagar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & built with <span className="text-red-500">❤</span> by Rahul Doulagar
          </p>
        </div>
      </div>
    </footer>
  );
}
