import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // The General Command for all search engines
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // Protects your backend routes
          "/_next/",     // Stops them from indexing raw build files
          "/private/",   // Blocks any internal operational pages
          "/*.json$",    // Prevents indexing of raw data payloads
        ],
      },
      {
        // The VIP pass specifically for Google's primary crawler
        userAgent: "Googlebot",
        allow: "/",
      }
    ],
    sitemap: "https://skds.in/sitemap.xml",
    host: "https://skds.in", // Hardcodes your domain authority right at the root
  };
}