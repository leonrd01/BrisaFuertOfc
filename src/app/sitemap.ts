import type { MetadataRoute } from "next";

import { products } from "@/lib/products";
import { siteConfig } from "@/config/site";

function getBaseUrl() {
  const fallback = "http://localhost:3000";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || fallback).trim();
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.endsWith("/") ? withProtocol.slice(0, -1) : withProtocol;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const categoryUrls: MetadataRoute.Sitemap = siteConfig.navLinks.map(
    (link) => ({
      url: `${baseUrl}${link.href}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticUrls, ...categoryUrls, ...productUrls];
}
