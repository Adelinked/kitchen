"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const isDarkTheme = theme === "dark";
  useEffect(() => {
    if (theme !== "system") return;
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (darkModeMediaQuery.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
  // Use useRef to access the button and text elements
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  return (
    <>
      <div
        className={` hover:bg-gray-400/80 flex h-8 w-20 cursor-pointer select-none items-center justify-center rounded-full border-[0.03rem] border-gray-400 bg-gray-400 text-black dark:border-transparent dark:bg-gray-600 dark:hover:bg-gray-500`}
        onClick={toggleTheme}
      >
        <div className="relative flex h-7 w-[72px] items-center rounded-full bg-gray-300 from-primary-500 to-primary-300 shadow-inner shadow-gray-600 dark:bg-gradient-to-br">
          <button
            className={`absolute h-6 w-6 rounded-full bg-gray-600 shadow-sm shadow-gray-700 transition-transform duration-500 ease-in-out dark:bg-gray-300`}
            ref={buttonRef}
            style={{
              transform: `translateX(${isDarkTheme ? "200%" : "0%"})`,
            }}
            aria-label="theme switcher"
          />
        </div>
        <span
          className={`absolute  font-semibold text-gray-600 transition-transform duration-700`}
          ref={textRef}
          style={{
            transform: `translateX(${isDarkTheme ? "-30%" : "30%"})`,
          }}
        >
          {theme}
        </span>
      </div>
    </>
  );
};

export default ThemeSwitcher;
