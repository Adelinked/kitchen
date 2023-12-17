"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import useIntersectingSection from "@/app/hooks/useIntersectingSection";

const ScrollToTop = dynamic(() => import("../scrollToTop"), {
  loading: () => <></>,
});

const FooterContent = dynamic(() => import("./FooterContent"), {
  loading: () => <></>,
});

export default function Footer() {
  const [footerRendered, setFooterRendered] = useState(false);
  const intersectingSection = useIntersectingSection({
    selectors: ['[data-section-id="footer"]'],
    threshold: 0.5, // Adjust the threshold as needed (0 to 1)
  });

  useEffect(() => {
    if (footerRendered) {
      return;
    }
    if (intersectingSection) {
      setFooterRendered(true);
    }
  }, [intersectingSection]);
  return (
    <>
      {footerRendered && <FooterContent />}
      <ScrollToTop />
    </>
  );
}
