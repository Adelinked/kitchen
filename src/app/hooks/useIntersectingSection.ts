import { useEffect, useState } from "react";

interface IntersectionOptions {
  threshold?: number;
  selectors: string[];
}

const useIntersectingSection = (options: IntersectionOptions) => {
  const [intersectingSection, setIntersectingSection] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          const sectionId = targetElement.dataset.sectionId;
          setIntersectingSection(sectionId || null);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: options.threshold || 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const elements = document.querySelectorAll(options.selectors.join(", "));
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return intersectingSection;
};

export default useIntersectingSection;
