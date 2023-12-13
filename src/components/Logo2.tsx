"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = ({ blackBg = false, size = 60 }) => {
  const { theme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);
  let imageSource =
    theme === "light"
      ? "/static/favicons/light-logo.webp"
      : "/static/favicons/dark-logo.webp";
  imageSource = blackBg ? "/static/favicons/dark-logo.webp" : imageSource;
  const logoSizeClass = `w-${size} h-${size}`;
  useEffect(() => {
    // Wait for the theme state to be available
    if (theme) {
      setIsThemeReady(true);
    }
  }, [theme]);

  // If the theme is not ready, you can return a loading state or null
  /*if (!isThemeReady) {
    return (
      <div className={`relative ${logoSizeClass}`}>
        {" "}
        <Image src={imageSource} alt="logo" fill className="object-cover" />
      </div>
    );
  }*/

  return (
    <div className={`relative ${logoSizeClass}`}>
      <Image
        src={imageSource}
        alt="logo"
        width={size}
        height={size}
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Logo;
