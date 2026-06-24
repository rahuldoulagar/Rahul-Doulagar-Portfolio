import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = blogPosts.map((post) => ({
    url: `https://alexmorgan.design/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://alexmorgan.design",
      lastModified: new Date(),
    },
    {
      url: "https://alexmorgan.design/blog",
      lastModified: new Date(),
    },
    ...blogs,
  ];
}
