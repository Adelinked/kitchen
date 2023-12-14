import Rss from "rss";
import { allBlogs } from ".contentlayer/generated";
import siteMetadata from "data/siteMetadata.js";
import { sortBlogs } from "@/utils";

const generateRssFeed = async () => {
  try {
    const sortedArticles = sortBlogs(allBlogs);

    const feed = new Rss({
      title: siteMetadata.title,
      description: siteMetadata.description,
      site_url: `siteMetadata.siteUrl`,
      feed_url: `${siteMetadata.siteUrl}/rss.xml`,
    });

    sortedArticles.forEach((article) => {
      feed.item({
        title: article.metaTitle ?? article.title,
        description: article.metaDescription ?? article.description,
        url: `${siteMetadata.siteUrl}/${article.slug}`,
        date: article.updatedAt ?? article.publishedAt,
      });
    });

    return feed.xml();
  } catch (error) {
    // Handle error appropriately (e.g., log, return an error message, etc.)
    console.error("Error generating RSS feed:", error);
    return null;
  }
};

export async function GET() {
  const feedXml = await generateRssFeed();

  if (feedXml) {
    return new Response(feedXml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } else {
    return new Response("Error generating RSS feed.", { status: 500 });
  }
}
