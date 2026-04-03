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
    default: "Shri Kishori Design Studio | Creative Tech Solutions",
    template: "%s | Shri Kishori Design Studio",
  },
  description: "Shri Kishori Design Studio offers cutting-edge services in Graphic & Brand Design, UI/UX, Web & App Development, Digital Marketing, and Tech Consulting.",
  keywords: [
    "Shri Kishori Design Studio",
    "SKDS",
    "Graphic Design",
    "Brand Identity",
    "UI/UX Design",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Tech Consulting",
    "Creative Agency India",
    "Top Web Design Studio",
  ],
  authors: [{ name: "Eeshaan Aggarwal", url: "https://eeshaan24.vercel.app/" }],
  creator: "Shri Kishori Design Studio",
  publisher: "Shri Kishori Design Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skds.in",
    siteName: "Shri Kishori Design Studio",
    title: "Shri Kishori Design Studio | Creative Tech Solutions",
    description: "Innovate, Transform, Grow – Advanced Tech Services Redefined. We blend creativity with technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Kishori Design Studio | Creative Tech Solutions",
    description: "Innovate, Transform, Grow – Advanced Tech Services Redefined.",
  },
  robots: {
    index: true,
    follow: true,
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
