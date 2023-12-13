"use client";
import siteMetadata from "data/siteMetadata";
//import { headerNavLinks } from "data/navLinks";

import { categories } from "data/categories";

import Link from "../Link";
//import MobileNav from './MobileNav'
import SearchButton from "../SearchButton";
import Logo from "../Logo";
//import { ThemeSwitcher } from "../themeSwitcher";
import { useState } from "react";
import HumburgerMenu from "./hamburgerMenu";
//import MobileNav from "./mobileNav";
import dynamic from "next/dynamic";

const ThemeSwitcher = dynamic(() => import("../themeSwitcher"), {
  loading: () => (
    <div
      className={`hover:bg-gray-300 flex h-8 w-20 cursor-pointer select-none items-center justify-center rounded-full border-[0.03rem] border-gray-400 bg-gray-400 text-black dark:border-transparent dark:bg-gray-600 dark:hover:bg-gray-500`}
    >
      <div className="relative flex h-7 w-[72px] items-center rounded-full bg-gray-500 from-primary-500 to-primary-300 shadow-inner shadow-gray-600 dark:bg-gradient-to-br"></div>
    </div>
  ),
  ssr: false,
});

/*const Logo = dynamic(() => import("../Logo"), {
  loading: () => <></>,
  ssr: false,
});*/

/*const HumburgerMenu = dynamic(() => import("../hamburgerMenu"), {
  loading: () => <></>,
});*/

const MobileNav = dynamic(() => import("./mobileNav"), {
  loading: () => <></>,
  ssr: false,
});

const ScrollProgressBar = dynamic(
  () => import("@/components/Nav/scrollProgressBar"),
  {
    loading: () => <></>,
  }
);

const Header = () => {
  const [displayListMenu, setDisplayListMenu] = useState(false);

  return (
    <>
      <header className="flex w-full h-[60px] z-40 items-center justify-between px-6 sticky top-0  [@supports(backdrop-filter:blur(0))]:bg-gray-300/70 dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/70 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <div className="md:min-w-[200px]">
          <Link href="/" title={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-1">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === "string" ? (
                <div className="hidden text-2xl font-semibold sm:block text-gray-900 dark:text-gray-100">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-6 leading-5 sm:space-x-6 ">
          <div className="hidden md:flex items-center justify-center space-x-4 leading-5 sm:space-x-4 flex-wrap px-2">
            {categories.map((cat) => (
              <div className="relative" key={cat.name}>
                <Link
                  href={`/recipes/${cat.name}`}
                  className="peer font-medium text-gray-900 dark:text-gray-100 md:block uppercase   "
                >
                  {cat.name}
                </Link>

                <div className="hidden border-[1px] border-primary-500  z-50 peer-hover:flex  hover:flex   absolute  flex-col gap-4 py-4  bg-white dark:bg-gray-900">
                  {[...cat.subcategories, "View All"].map((subcat) => (
                    <Link
                      key={subcat}
                      href={`/recipes/${cat.name}/${
                        subcat !== "View All" ? subcat.replaceAll(" ", "-") : ""
                      }`}
                      className="px-4 font-medium text-gray-900 dark:text-gray-100 capitalize whitespace-nowrap"
                    >
                      {subcat}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {displayListMenu ? (
            <MobileNav
              displayListMenu={displayListMenu}
              setDisplayListMenu={setDisplayListMenu}
            />
          ) : null}

          <SearchButton />
          <ThemeSwitcher />
          <HumburgerMenu
            displayListMenu={displayListMenu}
            setDisplayListMenu={setDisplayListMenu}
          />
        </div>
      </header>
      <ScrollProgressBar />
    </>
  );
};

export default Header;
