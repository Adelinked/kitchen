import { MetadataRoute } from "next";
import siteMetadata from "data/siteMetadata";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = siteMetadata.siteUrl;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
