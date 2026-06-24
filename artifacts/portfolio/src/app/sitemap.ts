import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = blogPosts.map((post) => ({
    url: `https://rahuldoulagar.design/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://rahuldoulagar.design",
      lastModified: new Date(),
    },
    {
      url: "https://rahuldoulagar.design/blog",
      lastModified: new Date(),
    },
    ...blogs,
  ];
}
