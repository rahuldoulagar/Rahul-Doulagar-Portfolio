export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "work" | "freelance" | "certification";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  gradient: string;
}
