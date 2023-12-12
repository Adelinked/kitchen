import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/tailwind.css";
//import "pliny/search/algolia.css";
import siteMetadata from "data/siteMetadata";
import { Head } from "@/components/head";
import { ThemeProvider } from "@/providers/themeProvider";
import Header from "@/components/Nav/header";

//import { SearchProvider, SearchConfig } from "pliny/search";
import Footer from "@/components/Nav/Footer";
import { TopHeader } from "@/components/Nav/topHeader";
import Main from "@/components/main";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
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

      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="bg-white text-black antialiased  dark:bg-gray-950 dark:text-white ">
        <ThemeProvider attribute="class" enableSystem>
          {/*<SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
           */}
          <TopHeader />
          <Header />
          <Main>{children}</Main>
          <Footer />
          {/*</SearchProvider>*/}
        </ThemeProvider>
      </body>
    </html>
  );
}