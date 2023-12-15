import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/tailwind.css";
import siteMetadata from "data/siteMetadata";
import { Head } from "@/components/head";
import { ThemeProvider } from "@/providers/themeProvider";
import Header from "@/components/Nav/header";

import Footer from "@/components/Nav/Footer";
import { TopHeader } from "@/components/Nav/topHeader";
import Main from "@/components/main";
import { SpeedInsights } from "@vercel/speed-insights/next";
//import SearchProvider from "@/providers/searchProvider";
const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
  other: {
    amp: "hybrid",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${font.variable} `}
      suppressHydrationWarning
    >
      <Head />
      <body className="bg-white text-black antialiased  dark:bg-gray-950 dark:text-white ">
        <ThemeProvider attribute="class" enableSystem>
          <TopHeader />
          {/* <SearchProvider>*/}
          <Header /> <Main>{children}</Main> {/* </SearchProvider>*/}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
