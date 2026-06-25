import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

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
              <li><a href="mailto:frankrahul297@gmail.com" className="hover:text-primary transition-colors">frankrahul297@gmail.com</a></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.behance.net/gallery/248518759/Presentation" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.577 1.878 1.368 2.208.53.208 1.086.208 1.617 0 .695-.298 1.14-.857 1.338-1.559l3.433.38zM16.007 13h3.949c-.072-1.11-.578-1.722-1.86-1.722-1.112 0-1.898.598-2.089 1.722zm-6.74-2.5c.688-.385 1.155-1.065 1.155-2.002 0-2.1-1.6-3-3.622-3H1v12h5.963c2.072 0 3.999-.951 3.999-3.2 0-1.195-.621-2.101-1.695-2.798zM4.071 7.5H6.1c.8 0 1.442.4 1.442 1.2 0 .9-.71 1.3-1.5 1.3H4.07V7.5zm2.3 7H4.07v-2.7H6.4c1.1 0 1.7.5 1.7 1.35 0 .9-.63 1.35-1.73 1.35z"/></svg>
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
