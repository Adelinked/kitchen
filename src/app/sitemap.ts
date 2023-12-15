import { MetadataRoute } from "next";
import { allBlogs, allPages } from "contentlayer/generated";
import siteMetadata from "data/siteMetadata";
import { categories } from "data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/${post.slug}`,
    lastModified: post.updatedAt || post.publishedAt,
  }));

  const pageRoutes = allPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: page.date || new Date().toISOString().split("T")[0],
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/${category.name}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const subCategoryRoutes = categories
    .map((category) => {
      return category.subcategories.map((subCategory) => ({
        url: `${siteUrl}/${category.name}/${subCategory}`,
        lastModified: new Date().toISOString().split("T")[0],
      }));
    })
    .flat();

  const routes = [""].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    ...routes,
    ...blogRoutes,
    ...pageRoutes,
    ...categoryRoutes,
    ...subCategoryRoutes,
  ];
}
