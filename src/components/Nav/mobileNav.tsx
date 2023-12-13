"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { footerNavLinks } from "data/navLinks";
import siteMetadata from "data/siteMetadata";
import { categories } from "data/categories";
import Menu from "./Menu";

const MobileNav: React.FC<{
  displayListMenu: boolean;
  setDisplayListMenu: (display: boolean) => void;
}> = ({ displayListMenu, setDisplayListMenu }) => {
  const listMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listMenu = listMenuRef.current;
    let id: ReturnType<typeof setTimeout>;
    if (displayListMenu)
      id = setTimeout(() => listMenu?.classList.add("overlay-bg"), 100);
    else listMenu?.classList.remove("overlay-bg");
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    //const  window.innerWidth <= 375;
    const isMobile = /iPhone|iPad|iPod|Android|Windows Phone/i.test(
      navigator.userAgent
    );

    if (displayListMenu) {
      const scrollbarWidth = window.innerWidth - body.clientWidth; // Get the scrollbar width
      body.style.overflow = "hidden"; // Disable scroll
      //html.style.overflow = "hidden";
      if (!isMobile) {
        body.style.marginRight = `${scrollbarWidth}px`; // Add margin to compensate for scrollbar width
      } else {
        // body.style.marginRight = ""; // Remove margin
        //html.style.overflow = "hidden";
      }
    } else {
      body.style.overflow = ""; // Enable scroll
      //html.style.overflow = "";
    }

    return () => {
      body.style.overflow = ""; // Make sure to enable scroll when the component unmounts
      html.style.overflow = "";
      if (!isMobile) body.style.marginRight = ""; // Remove margin when component unmounts
    };
  }, [displayListMenu]);

  function closeListMenu() {
    const listMenu = listMenuRef.current;

    listMenu?.classList.add("animate-slide-out-right");
    let id = setTimeout(() => setDisplayListMenu(false), 100);
    return () => clearTimeout(id);
  }
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen select-none z-50 ${
        displayListMenu ? "animate-slide-in-right" : ""
      }  `}
      ref={listMenuRef}
      onClick={(e) => {
        const listMenu = listMenuRef.current;
        if (e.target === listMenu) {
          closeListMenu();
        }
      }}
    >
      <div className="absolute left-[-30px] w-[250px] max-h-screen  bg-white dark:bg-gray-950 overflow-y-auto   ">
        <Link href="/" className="flex items-center ml-[30px] mt-[0px]">
          <Logo />
        </Link>
        <nav className=" pt-10 px-6 h-full text-black dark:text-white">
          <Link
            href={`/`}
            className="block hover:text-primary-500  cursor-pointer font-medium  uppercase leading-[22px] mb-2"
            onClick={closeListMenu}
          >
            Home
          </Link>
          {categories.map((cat) => (
            <div key={cat.name}>
              <Menu>
                <Link
                  href={`/recipes/${cat.name}`}
                  className="block hover:text-primary-500  cursor-pointer font-medium  uppercase leading-[22px] mb-2"
                  onClick={closeListMenu}
                >
                  {cat.name}
                </Link>
                <>
                  {cat.subcategories.map((subCat) => (
                    <Link
                      key={subCat}
                      href={`/recipes/${cat.name}/${subCat.replaceAll(
                        " ",
                        "-"
                      )}`}
                      className="block hover:text-primary-500 cursor-pointer leading-[22px] mb-2 capitalize "
                      onClick={closeListMenu}
                    >
                      {subCat}
                    </Link>
                  ))}
                </>
              </Menu>
            </div>
          ))}

          <div>
            <h3 className=" uppercase text-black dark:text-white text-lg mb-2 mt-6 font-bold">
              Company
            </h3>

            {footerNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block hover:text-primary-500  cursor-pointer  leading-[22px] mb-2"
                  onClick={closeListMenu}
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <div className="mb-2 mt-4 flex space-x-2 text-sm dark:text-gray-400 text-gray-700 ">
            <span>{`© ${new Date().getFullYear()}`}</span>
            <span>{` • `}</span>

            <Link href="/" className="hover:text-primary-500">
              {siteMetadata.title}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
