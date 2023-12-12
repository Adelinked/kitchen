"use client";
import useIntersectingSection from "@/app/hooks/useIntersectingSection";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaPinterest, FaPrint, FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const ShareButtons = ({ recipeTitle, recipeUrl, size = 6 }) => {
  const shareOnEmail = () => {
    const subject = encodeURIComponent(`Check out this recipe: ${recipeTitle}`);
    const body = encodeURIComponent(
      `I thought you might enjoy this recipe: ${recipeTitle}\n\n${recipeUrl}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const shareOnPrint = () => {
    window.print();
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        recipeUrl
      )}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        recipeUrl
      )}&text=${encodeURIComponent(recipeTitle)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        recipeUrl
      )}`,
      "_blank"
    );
  };

  const [renderedShareButtons, setRendredShareButtons] = useState(false);

  const intersectingSection = useIntersectingSection({
    selectors: ['[data-section-id="share-on-social"]'],
    threshold: 0.5, // Adjust the threshold as needed (0 to 1)
  });

  useEffect(() => {
    if (renderedShareButtons) {
      return;
    }

    if (intersectingSection) {
      setRendredShareButtons(true);
    }
  }, [intersectingSection]);

  return (
    <>
      {renderedShareButtons ? (
        <div className="flex flex-col items-center gap-2 fixed bottom-40 z-10 bg-white dark:bg-gray-950 p-2 right-5 rounded-md ">
          {/* Email icon */}

          {/* Facebook icon */}
          <button
            onClick={shareOnFacebook}
            aria-label="Share on Facebook"
            title="Share on Facebook"
          >
            <FaFacebook
              className={`text-blue-500 hover:text-blue-700 w-${size} h-${size} `}
            />
          </button>

          {/* Twitter icon */}
          <button
            onClick={shareOnTwitter}
            aria-label="Share on Twitter"
            title="Share on Twitter"
          >
            <FaXTwitter
              className={`hover:text-black/70 dark:text-white/70 w-${size} h-${size} `}
            />
          </button>

          {/* LinkedIn icon */}
          <button
            onClick={shareOnLinkedIn}
            aria-label="Share on Pinterest"
            title="Share on Pinterest"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaPinterest
              className={`text-red-500 hover:text-red-700 w-${size} h-${size} `}
            />
          </button>
          <button
            onClick={shareOnEmail}
            aria-label="Share on Email"
            title="Share on Email"
          >
            <HiMail
              className={`hover:text-black/70 dark:text-white/70 w-${size} h-${size} `}
            />
          </button>

          {/* Print icon */}
          <button onClick={shareOnPrint} aria-label="Print" title="Print">
            <FaPrint
              className={`hover:text-black/70 dark:text-white/70 w-${size} h-${size} `}
            />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ShareButtons;
