import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

const Categories = ({
  categories,
  currentSlug,
  previousSlug = "",
  categoryPage = false,
}) => {
  const normCurrentSlug = currentSlug.replaceAll(" ", "-");
  const normPreviousSlug = previousSlug.replaceAll(" ", "-");
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categoryPage
        ? categories.map((cat) => (
            <Category
              key={cat}
              link={`/recipes/${cat}`}
              name={cat}
              active={previousSlug ? currentSlug === slug(cat) : "all" === cat}
            />
          ))
        : categories.map((cat) => (
            <Category
              key={cat}
              link={
                cat === "all"
                  ? `/recipes/${
                      previousSlug ? normPreviousSlug : normCurrentSlug
                    }`
                  : `/recipes/${
                      previousSlug ? normPreviousSlug : normCurrentSlug
                    }/${cat.replaceAll(" ", "-")}`
              }
              name={cat}
              active={previousSlug ? currentSlug === slug(cat) : "all" === cat}
            />
          ))}
    </div>
  );
};

export default Categories;
