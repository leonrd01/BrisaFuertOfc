import type { MetadataRoute } from "next";

function getBaseUrl() {
  const fallback = "http://localhost:3000";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || fallback).trim();
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.endsWith("/") ? withProtocol.slice(0, -1) : withProtocol;
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
