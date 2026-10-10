import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cafe The PreVue Wangaratta | Riverside Dining, Artisan Coffee & Events",
  description: "Wangaratta's premier riverside dining destination on Faithfull Street overlooking the Ovens River. Specialty artisan coffee, seasonal all-day brunch, gourmet lunches, and unforgettable private events, weddings & celebrations.",
  keywords: [
    "Cafe The PreVue",
    "Riverside Cafe Wangaratta",
    "Wangaratta Breakfast",
    "Brunch Wangaratta",
    "Ovens River Dining",
    "Faithfull Street Cafe",
    "Wangaratta Function Venue",
    "Riverside Weddings Wangaratta",
    "Wangaratta Coffee"
  ],
  openGraph: {
    title: "Cafe The PreVue Wangaratta | Riverside Dining & Events",
    description: "Scenic dining on the Ovens River, artisan High Country coffee, and premier private event hosting in Wangaratta.",
    url: "https://cafetheprevue.com.au",
    siteName: "Cafe The PreVue",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
