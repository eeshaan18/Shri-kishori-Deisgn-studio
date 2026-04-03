import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://skds.in";
  
  // Using a fixed date or build-time date is safer than a runtime new Date() 
  // so Google doesn't think the page changed every time it crawls.
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0, // Headquarters - Maximum Priority
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "weekly", // Portfolios get updated with new projects
      priority: 0.9, 
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly", 
      priority: 0.8, // Raised from 0.6. This is a critical conversion path.
    },
  ];
}