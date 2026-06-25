import { Project, Skill, Experience, Service, Testimonial, BlogPost } from "./types";

export const projects: Project[] = [
  {
    id: "finova",
    title: "Finova Banking App",
    category: "Mobile",
    description: "Mobile banking redesign for 2M+ users focused on clarity and accessibility.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: "luminary",
    title: "Luminary Design System",
    category: "Systems",
    description: "Enterprise design system with 200+ components driving consistency across 15+ products.",
    tags: ["Design Systems", "Figma", "Documentation"],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    id: "zenflow",
    title: "Zenflow Productivity",
    category: "Web",
    description: "Focus and task management web app designed to minimize cognitive load.",
    tags: ["Web App", "Interaction Design", "Motion"],
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    id: "carta",
    title: "Carta E-commerce",
    category: "Web",
    description: "Luxury fashion e-commerce platform with a focus on immersive editorial experiences.",
    tags: ["E-commerce", "Visual Design", "Web"],
    gradient: "from-orange-400 to-rose-400"
  },
  {
    id: "pulse",
    title: "Pulse Health Platform",
    category: "Mobile",
    description: "Patient-centered health tracking dashboard that simplifies complex medical data.",
    tags: ["Healthcare", "Dashboard", "Mobile"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    id: "nova",
    title: "Nova Brand Identity",
    category: "Branding",
    description: "Complete brand system and visual language for a high-growth AI tech startup.",
    tags: ["Branding", "Identity", "Guidelines"],
    gradient: "from-violet-600 to-fuchsia-600"
  }
];

export const skills: Skill[] = [
  { name: "Figma", category: "Design Tools", level: 95 },
  { name: "Adobe Illustrator", category: "Design Tools", level: 88 },
  { name: "Photoshop", category: "Design Tools", level: 82 },
  { name: "Adobe XD", category: "Design Tools", level: 78 },
  { name: "After Effects", category: "Motion & Video", level: 85 },
  { name: "Premiere Pro", category: "Motion & Video", level: 75 },
  { name: "Motion Graphics", category: "Motion & Video", level: 88 },
  { name: "Wireframing", category: "UX & Interaction", level: 92 },
  { name: "Prototyping", category: "UX & Interaction", level: 88 },
  { name: "Interaction Design", category: "UX & Interaction", level: 85 },
  { name: "User Research", category: "UX & Interaction", level: 78 }
];

export const experience: Experience[] = [
  {
    id: "exp-4",
    role: "Assistant Manager – UI/UX & Motion Graphic Designer",
    company: "eYantra Ventures",
    period: "Jun 2026 – Present",
    type: "work",
    description: "Expanded scope into UI/UX and motion design — crafting user interfaces, interaction flows, and animated brand content for clients across multiple industries."
  },
  {
    id: "exp-3",
    role: "Assistant Manager – Graphic Designer",
    company: "eYantra Ventures",
    period: "Jun 2025 – Jun 2026",
    type: "work",
    description: "Stepped into a leadership role overseeing design team deliverables, managing client communications, and maintaining quality standards across all projects."
  },
  {
    id: "exp-2",
    role: "Executive – Graphic Designer",
    company: "eYantra Ventures",
    period: "Jun 2024 – Jun 2025",
    type: "work",
    description: "Promoted for consistent delivery — led graphic projects end-to-end, mentored junior designers, and elevated brand storytelling across campaigns."
  },
  {
    id: "exp-1",
    role: "Jr. Graphic Designer",
    company: "eYantra Ventures",
    period: "Jun 2023 – Jun 2024",
    type: "work",
    description: "Kickstarted my design career creating visual assets, brand collaterals, social media graphics, and marketing materials for diverse clients."
  },
];

export const services: Service[] = [
  {
    id: "srv-1",
    title: "UI/UX Design",
    description: "Intuitive interfaces crafted from user research to pixel-perfect delivery.",
    deliverables: ["High-fidelity mockups", "Interactive prototypes", "User flows & wireframes"]
  },
  {
    id: "srv-2",
    title: "Motion Graphics",
    description: "Animated content that brings your brand to life across every screen.",
    deliverables: ["Logo animations", "Social media reels", "Brand motion identity"]
  },
  {
    id: "srv-3",
    title: "Graphic Design",
    description: "Visual storytelling through brand collaterals, print, and digital assets.",
    deliverables: ["Brand identity", "Marketing collateral", "Social media design"]
  },
  {
    id: "srv-4",
    title: "Social Media Design",
    description: "Scroll-stopping visuals designed for engagement, reach, and brand recall.",
    deliverables: ["Post & story templates", "Campaign creatives", "Reel thumbnails"]
  },
  {
    id: "srv-5",
    title: "Presentation Design",
    description: "Compelling decks that communicate ideas with clarity and visual impact.",
    deliverables: ["Pitch decks", "Corporate presentations", "Report layouts"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Sarah Chen",
    title: "VP of Product",
    company: "Finova",
    quote: "Alex transformed our complex banking flows into an intuitive experience. Our completion rates skyrocketed.",
    rating: 5,
    initials: "SC"
  },
  {
    id: "t-2",
    name: "Marcus Johnson",
    title: "Engineering Lead",
    company: "Luminary",
    quote: "The design system Alex built is a masterpiece. It bridges the gap between design and development flawlessly.",
    rating: 5,
    initials: "MJ"
  },
  {
    id: "t-3",
    name: "Elena Rodriguez",
    title: "CEO",
    company: "Nova",
    quote: "Working with Alex was a revelation. They don't just make things look good; they think deeply about the business goals.",
    rating: 5,
    initials: "ER"
  },
  {
    id: "t-4",
    name: "David Kim",
    title: "Founder",
    company: "Zenflow",
    quote: "An exceptional eye for detail. The micro-interactions Alex added made our app feel truly premium.",
    rating: 5,
    initials: "DK"
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-ui-ai",
    title: "The Future of UI: Where AI Meets Design",
    excerpt: "Exploring how artificial intelligence is reshaping the way we think about user interfaces and the designer's role.",
    content: "Full content here...",
    date: "Oct 15, 2023",
    readTime: "5 min read",
    category: "Industry",
    author: "Rahul Doulagar",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    slug: "building-design-systems",
    title: "Building Design Systems That Scale",
    excerpt: "A practical guide to creating component libraries that developers actually want to use.",
    content: "Full content here...",
    date: "Sep 28, 2023",
    readTime: "8 min read",
    category: "Systems",
    author: "Rahul Doulagar",
    gradient: "from-purple-500 to-fuchsia-600"
  },
  {
    slug: "dark-mode-more-than-trend",
    title: "Why Dark Mode is More Than a Trend",
    excerpt: "The psychological and physiological reasons why dark mode has become a baseline expectation for users.",
    content: "Full content here...",
    date: "Aug 12, 2023",
    readTime: "4 min read",
    category: "UX Research",
    author: "Rahul Doulagar",
    gradient: "from-slate-700 to-black"
  }
];
