import BlogDetails from "@/components/Blog/BlogDetails";
import BlogMajor from "@/components/Blog/BlogMajor";

import RenderMdx from "@/components/Blog/RenderMdx";
import siteMetadata from "data/siteMetadata";
import { allBlogs } from "contentlayer/generated";
import BlogHeader from "@/components/Blog/BlogHeader";
//import RelatedPosts from "@/components/Blog/RelatedPosts";
//import RelatedPostsColumn from "@/components/Blog/RelatedPostsColumn";

import dynamic from "next/dynamic";
//import ShareButtons from "@/components/social-icons/shareButtons";
//import { importFileAsync } from "@/utils";

//import BlogHeader from "@/components/Blog/BlogHeader";

const RelatedPosts = dynamic(() => import("@/components/Blog/RelatedPosts"), {
  loading: () => <></>,
  ssr: false,
});

const RelatedPostsColumn = dynamic(
  () => import("@/components/Blog/RelatedPostsColumn"),
  {
    loading: () => <>Loading...</>,
    ssr: false,
  }
);

const ShareButtons = dynamic(
  () => import("@/components/social-icons/shareButtons"),
  {
    loading: () => <></>,
    ssr: false,
  }
);
//import post from "@/posts/blog__automating-repetitive-tasks-productivity-hacks-for-developers.mdx.json";

/*const BlogHeader = dynamic(() => import("@/components/Blog/BlogHeader"), {
  loading: () => (
    <div className="mb-4 text-center relative w-full h-[70vh] bg-dark" />
  ),
});*/

/*
const RenderMdx = dynamic(() => import("@/components/Blog/RenderMdx"), {
  loading: () => <></>,
});*/

export async function generateStaticParams() {
  //const path = process.cwd() + "\\.contentlayer\\generated\\Blog";
  //const blogsNames = await getBlogsNames(path);
  //const blogsNames = await importFileAsync("data/blogsNames.json");
  /*const blogsNames = await import("data/blogsNames.json").then(
    (res) => res.default
  );
  //console.log("adelllllllllll",blogsNames.map((blogName) => ({ slug: blogName })));
  return blogsNames.map((blogName) => ({ slug: blogName }));*/

  //console.log(allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath })));

  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  /*const path =
    process.cwd() +
    `/.contentlayer/generated/Blog/blog__${params.slug}.mdx.json`; //path = "banana.json";
  const blog = await importFileAsync(path);*/

  const blogSlug = decodeURI(params.slug);
  const blog = allBlogs.find((p) => p.slug === blogSlug);
  if (!blog) {
    return;
  }
  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner] as any;
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [
            siteMetadata.siteUrl +
              blog.image.filePath.replace("../public", "") ??
              siteMetadata.defaultBlogImage,
          ]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.metaTitle ?? blog.title,
    description: blog.metaDescription ?? blog.description,
    openGraph: {
      title: blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.description,
      url: siteMetadata.siteUrl + blog.slug,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle ?? blog.title,
      description: blog.metaDescription ?? blog.description,
      images: ogImages,
    },
  };
}

export default async function Page({ params }) {
  /*console.log(params);
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  console.log(blog);*/
  const blogSlug = decodeURI(params.slug);
  const blog = allBlogs.find((p) => p.slug === blogSlug);
  /*const path =
    process.cwd() +
    `/.contentlayer/generated/Blog/blog__${params.slug}.mdx.json`;
  const blog = await importFileAsync(path);*/

  if (!blog) {
    return;
  }
  let imageList = [siteMetadata.socialBanner] as any;

  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [
            siteMetadata.siteUrl +
              blog.image.filePath.replace("../public", "") ??
              siteMetadata.defaultBlogImage,
          ]
        : blog.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog?.metaTitle ?? blog?.title,
    description: blog?.metaDescription ?? blog?.description,
    image: imageList,
    datePublished: new Date(blog?.publishedAt).toISOString(),
    dateModified: new Date(blog?.updatedAt || blog?.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <BlogHeader blog={blog} />
        <BlogDetails blog={blog} slug={params.slug} />

        <BlogMajor blog={blog} />
        <div data-section-id="share-on-social" />
        <ShareButtons
          recipeTitle={blog?.title}
          recipeUrl={siteMetadata.siteUrl + blog?.slug}
        />
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className=" col-span-12 lg:col-span-3 mt-4">
            <details
              className="border-[1px] border-solid  text-dark dark:text-light rounded-lg p-4 sticky top-20 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                In this recipe
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog?.toc.map((heading, index) => {
                  return (
                    <li key={`${heading.text + index}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark dark:bg-white mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>

          <RenderMdx blog={blog} />

          <div className="col-span-12 lg:col-span-3 mt-4 ">
            <div className="h-[80vh] bg-primary-600 flex justify-center items-center ">
              <h2 className="text-3xl font-bold text-white">Moh Ads</h2>
            </div>
            <div
              data-section-id="related-posts-column"
              className=" text-dark dark:text-light rounded-lg p-2 mt-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            >
              <RelatedPostsColumn
                category={blog?.tags?.[0]}
                exclude={blog.slug}
              />
            </div>
          </div>
        </div>
        <div data-section-id="related-posts" />

        <RelatedPosts category={blog?.tags?.[0]} exclude={blog.slug} />
      </article>
    </>
  );
}
