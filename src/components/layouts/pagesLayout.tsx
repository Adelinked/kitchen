import { allPages, type Pages } from "contentlayer/generated";
import RenderMdx from "../Blog/RenderMdx";

export async function generateStaticParams() {
  return allPages.map((page) => ({ title: page.title }));
}

interface Props {
  title: String;
}

export default function PagesLayout({ title }: Props) {
  const content = allPages.find((p) => p.title === title) as Pages;

  return (
    <>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-4  mt-4 ">
          <details
            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-16 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {content.toc?.map((heading) => {
                return (
                  <li key={`${heading.url}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-2  data-[level=two]:pt-3
                                       
                                       data-[level=three]:pl-5
                                       sm:data-[level=three]:pl-7
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
        <RenderMdx blog={content} />
      </div>
    </>
  );
}
