"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "../Link";
import SiteName from "../siteName";
const mdxComponents = {
  Image,
  Link,
  SiteName,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div
      id="article"
      className="col-span-12  lg:col-span-6  prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-primary-600/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-primary-600
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-primary-600

    dark:prose-invert
    dark:prose-blockquote:border-primary-500
    dark:prose-blockquote:bg-primary-500/20
    dark:prose-li:marker:text-primary-500

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
