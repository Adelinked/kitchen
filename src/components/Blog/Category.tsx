import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5 capitalize  md:py-2 px-6  md:px-10   rounded-full border-2 border-solid border-primary-600 dark:border-primary-500  hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active
          ? "bg-dark/70 text-light dark:bg-light/70 dark:text-dark"
          : "bg-light/70 text-dark dark:bg-dark/70 dark:text-light"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
