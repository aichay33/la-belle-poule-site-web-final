import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1 },
  { path: "/projet", priority: 0.9 },
  { path: "/recherche-terrain", priority: 1 },
  { path: "/systeme-verger", priority: 0.85 },
  { path: "/vente-directe", priority: 0.85 },
  { path: "/dossier-projet", priority: 0.9 },
  { path: "/comment-aider", priority: 0.85 },
  { path: "/contact", priority: 0.8 },
  { path: "/mentions-legales", priority: 0.3 },
  { path: "/polyelevage", priority: 0.35 },
  { path: "/polyculture", priority: 0.3 },
  { path: "/permaculture", priority: 0.3 },
  { path: "/agroforesterie", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.path === "/recherche-terrain" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
