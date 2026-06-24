"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

type GalleryItem = {
  id: number;
  title: string;
  category?: string;
  type: "image" | "video";
  src: string;
};

const portfolioWorks: GalleryItem[] = [
  {
    id: 1,
    title: "Corporate Branding",
    category: "Branding",
    type: "image",
    src: "/works/project1.jpg",
  },
  {
    id: 2,
    title: "Mobile App UI",
    category: "Mobile",
    type: "video",
    src: "/works/project2.mp4",
  },
  {
    id: 3,
    title: "Web Dashboard",
    category: "Web",
    type: "image",
    src: "/works/project3.jpg",
  },
  {
    id: 4,
    title: "Product Design",
    category: "Product",
    type: "image",
    src: "/works/project4.jpg",
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "Branding",
    type: "video",
    src: "/works/project5.mp4",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    category: "Web",
    type: "image",
    src: "/works/project6.jpg",
  },
];

function MediaCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: (item: GalleryItem) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-muted"
      onClick={() => onClick(item)}
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-full"
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover aspect-[4/3] block"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const placeholder = target.nextElementSibling as HTMLElement | null;
              if (placeholder) placeholder.style.display = "flex";
            }}
          />
        ) : (
          <video
            src={item.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover aspect-[4/3] block"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const placeholder = target.nextElementSibling as HTMLElement | null;
              if (placeholder) placeholder.style.display = "flex";
            }}
          />
        )}

        <div
          className="aspect-[4/3] w-full hidden items-center justify-center"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)`,
          }}
        >
          {item.type === "video" ? (
            <Play className="w-10 h-10 text-primary/40" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded bg-primary/40" />
            </div>
          )}
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {item.type === "video" && (
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-80">
          <Play className="w-3.5 h-3.5 text-white fill-white" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white font-semibold text-base leading-tight">{item.title}</p>
        {item.category && (
          <p className="text-white/60 text-xs mt-1 uppercase tracking-widest">{item.category}</p>
        )}
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition-all duration-300"
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  );
}

function LightboxModal({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 md:top-3 md:right-3 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            ) : (
              <video
                src={item.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
              />
            )}
          </div>

          <div className="mt-4 px-1 flex items-center gap-3">
            <p className="text-white font-semibold text-lg">{item.title}</p>
            {item.category && (
              <>
                <span className="text-white/30">·</span>
                <p className="text-white/50 text-sm uppercase tracking-widest">{item.category}</p>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function WorkGallerySection() {
  const [selected, setSelected] = React.useState<GalleryItem | null>(null);

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">My Work</h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioWorks.map((item, index) => (
            <MediaCard
              key={item.id}
              item={item}
              index={index}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && (
        <LightboxModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
