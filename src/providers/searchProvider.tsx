"use client";
import { useRouter } from "next/navigation";
// show message
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarProvider,
} from "kbar";
// toggle theme
import RenderResults from "@/components/searchResults/renderResults";

import { useState } from "react";
import { allBlogs } from "contentlayer/generated";
import { formatDate } from "@/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  // toggle theme
  // router
  const router = useRouter();

  // actions
  const [isLoading, setIsLoading] = useState(false);

  const actions = allBlogs.map((post, index) => ({
    id: post.slug + index,
    name: post.title,
    keywords: post?.description || "",
    section: "Content",
    subtitle: formatDate(post.updatedAt ?? post.publishedAt, "en-US"),
    perform: () => router.push("/" + post.slug),
  }));

  return (
    <KBarProvider options={{ enableHistory: true }} actions={actions}>
      <KBarPortal>
        <KBarPositioner className="p-4 z-50  overlay-bg w-full">
          <KBarAnimator className="w-full max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-gray-500 bg-white dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center space-x-4 p-4">
                <span className="block w-5">
                  <svg
                    className="text-gray-400 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <KBarSearch className="h-8 w-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500" />
                <kbd className="inline-block whitespace-nowrap rounded border px-1.5 align-middle font-medium leading-4 tracking-wide text-xs text-gray-400 border-gray-400">
                  ESC
                </kbd>
              </div>
              {!isLoading && <RenderResults />}
              {isLoading && (
                <div className="block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600">
                  Loading...
                </div>
              )}
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}
