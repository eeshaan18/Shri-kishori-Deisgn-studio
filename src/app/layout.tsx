import { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
const font = DM_Sans({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://skds.in"),
  title: {
    default: "Shri Kishori Design Studio | Engineering Digital Dominance",
    template: "%s | Shri Kishori Design Studio",
  },
  description: "A premium full-stack digital agency delivering growth-driven web architecture, app ecosystems, immersive UI/UX design, and brand solutions.",
  keywords: [
    "Shri Kishori Design Studio",
    "SKDS",
    "Full-Stack Web Development",
    "UI/UX Design Agency",
    "App Development India",
    "Digital Marketing",
    "Tech Consulting",
    "SaaS Development",
    "Brand Identity",
    "Next.js Developers"
  ],
  authors: [{ name: "Eeshaan Aggarwal", url: "https://skds.in" }],
  creator: "Eeshaan Aggarwal",
  publisher: "Shri Kishori Design Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skds.in",
    siteName: "Shri Kishori Design Studio",
    title: "Shri Kishori Design Studio | Engineering Digital Dominance",
    description: "Innovate, Transform, Grow – Advanced Tech Services Redefined.",
    images: [
      {
        url: "/images/logo1.png", // Replace with an actual 1200x630 og-image.jpg later for best results!
        width: 1200,
        height: 630,
        alt: "Shri Kishori Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Kishori Design Studio | Digital Dominance",
    description: "Innovate, Transform, Grow – Advanced Tech Services Redefined.",
    creator: "@EeshaanAggarwal",
    images: ["/images/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://skds.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Analytics />
        <Providers>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="system"
          >
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
