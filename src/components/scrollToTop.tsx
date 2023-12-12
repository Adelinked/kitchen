"use client";
import { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollDivRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let id;
    const toggleVisibility = () => {
      const scrollDiv = scrollDivRef.current;
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        scrollDiv?.classList.add("animate-close");
        id = setTimeout(() => setIsVisible(false), 100);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (id) clearTimeout(id);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={`fixed text-3xl shadow-md shadow-black font-bold  border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 border-[1px] bottom-4 right-4 bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-slate-100 w-10 h-10 flex items-center justify-center rounded-full transition-opacity`}
          onClick={scrollToTop}
          ref={scrollDivRef}
          aria-label="Scroll to top"
        >
          <MdKeyboardArrowUp className=" cursor-pointer" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
