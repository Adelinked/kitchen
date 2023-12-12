"use client";
import { footerNavLinks } from "data/navLinks";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="sticky hidden px-9 top-0 left-0 bg-gray-950 w-full h-10 sm:flex justify-between items-center">
      <div className="flex items-center text-sm gap-6">
        {footerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={"top-header " + link.title}
              href={link.href}
              className=" font-medium text-gray-400 hover:text-white  "
            >
              {link.title}
            </Link>
          ))}
      </div>
      <div>{/*EN*/}</div>
    </div>
  );
};
