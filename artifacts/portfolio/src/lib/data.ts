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
  { name: "Adobe XD", category: "Design Tools", level: 85 },
  { name: "Sketch", category: "Design Tools", level: 80 },
  { name: "Photoshop", category: "Design Tools", level: 75 },
  { name: "Illustrator", category: "Design Tools", level: 75 },
  { name: "User Research", category: "UX Process", level: 90 },
  { name: "Wireframing", category: "UX Process", level: 95 },
  { name: "Prototyping", category: "UX Process", level: 90 },
  { name: "Usability Testing", category: "UX Process", level: 85 },
  { name: "Design Systems", category: "Systems", level: 95 },
  { name: "Interaction Design", category: "Systems", level: 90 },
  { name: "Motion Design", category: "Systems", level: 80 },
  { name: "Accessibility", category: "Systems", level: 85 }
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Senior UI/UX Designer",
    company: "Stripe",
    period: "2022–Present",
    type: "work"
  },
  {
    id: "exp-2",
    role: "Product Designer",
    company: "Linear",
    period: "2020–2022",
    type: "work"
  },
  {
    id: "exp-3",
    role: "UI Designer",
    company: "Figma",
    period: "2018–2020",
    type: "work"
  },
  {
    id: "exp-4",
    role: "Junior Designer",
    company: "Freelance",
    period: "2017–2018",
    type: "freelance"
  },
  {
    id: "cert-1",
    role: "UX Design Certificate",
    company: "Google",
    period: "2019",
    type: "certification"
  },
  {
    id: "cert-2",
    role: "UX Certification",
    company: "Nielsen Norman Group",
    period: "2021",
    type: "certification"
  }
];

export const services: Service[] = [
  {
    id: "srv-1",
    title: "UI Design",
    description: "Visual interfaces that delight users and elevate your brand.",
    deliverables: ["High-fidelity mockups", "Interactive prototypes", "Asset export"]
  },
  {
    id: "srv-2",
    title: "UX Design",
    description: "User-centered research and flows to solve real problems.",
    deliverables: ["User journey maps", "Wireframes", "Usability testing"]
  },
  {
    id: "srv-3",
    title: "Product Design",
    description: "End-to-end product thinking from concept to launch.",
    deliverables: ["Product strategy", "Feature definition", "Cross-functional collaboration"]
  },
  {
    id: "srv-4",
    title: "Design Systems",
    description: "Scalable component libraries for consistent experiences.",
    deliverables: ["Component library", "Design tokens", "Usage guidelines"]
  },
  {
    id: "srv-5",
    title: "User Research",
    description: "Data-driven user insights to inform product decisions.",
    deliverables: ["User interviews", "Surveys", "Persona development"]
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
