"use client";
import Image from "next/image";

const Logo = ({ size = 70 }) => {
  let imageSource = "/logo.webp";

  const logoSizeClass = `w-${size} h-${size}`;

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
