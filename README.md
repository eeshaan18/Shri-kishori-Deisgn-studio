# Shri Kishori Design Studio (SKDS) | Elite Digital Architecture

[![Live Deployment](https://img.shields.io/badge/Live_Deployment-skds.in-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://skds.in)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Kinetic-blue?style=for-the-badge&logo=framer&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Glassmorphism-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()

The official digital headquarters for **Shri Kishori Design Studio**. Engineered for micro-second latency, immersive kinetic interactions, and Tier-1 SEO authority. This repository houses a custom Next.js architecture integrated with a bespoke Google Sheets Headless CMS.

## 🚀 The Architecture

Unlike standard static agency sites, SKDS operates on a hyper-dynamic, serverless infrastructure:

* **Zero-Cost Headless CMS:** Powered by Google Apps Script, the portfolio, testimonials, and contact form route directly through a centralized Google Spreadsheet.
* **Kinetic UI/UX:** Built with Framer Motion, featuring magnetic buttons, scroll-velocity parallax rendering, volumetric lighting, and Glassmorphism 2.0.
* **Asset Delivery Network:** Integrated with Cloudinary CDN and Vercel's native image optimization for instant mobile loading, bypassing traditional payload bottlenecks.
* **Tier-1 SEO Matrix:** Fully injected with `CollectionPage` and `ItemList` JSON-LD schemas, strict canonical tags, and dynamic Knowledge Graph mappings.

## 🛠️ The Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS + Custom CSS (Volumetric noise textures, scanlines)
* **Physics/Animation:** Framer Motion
* **Database/CRM:** Google Sheets API (via Google Apps Script)
* **Image CDN:** Cloudinary
* **Deployment:** Vercel

## 🗄️ The Headless CMS (Google Sheets)

The entire front-end is controlled dynamically via a single Google Sheet with three specific tabs:

1. **`Sheet1`**: Receives all encrypted payload submissions from the Secure Contact Terminal.
2. **`Projects`**: Populates the 3D horizontal scroll gallery. 
   * *Required Columns:* `id`, `num`, `title`, `category`, `client`, `description`, `fullDescription`, `color`, `tech`, `imageUrl`
3. **`Testimonials`**: Populates the kinetic client transmission feed.
   * *Required Columns:* `id`, `title`, `short`, `color`, `body`

*Note: All images must be uploaded to Cloudinary, and the resulting URL pasted into the `imageUrl` column in the Google Sheet.*

## 💻 Local Development

To run this project locally, clone the repository and execute the following:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev