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
    // Get references to the article and its h1 heading by their IDs
    const articleContent = document.getElementById("article");
    const articleHeading = document.getElementById("article-heading");
    const articleDetails = document.getElementById("article-details");
    const articleMajor = document.getElementById("article-major");

    // Open a new window for printing
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    // Write the HTML content to the new window
    printWindow.document.write(`
      <html>
        <head>
          <title>${articleHeading?.textContent}</title>
          <style>
          body {
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
            margin: 20px; /* Add some margin to the printed content */
          }
          
          h1 {
            font-size: 1.8em;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
          }
          
          p {
            margin-bottom: 10px;
          }
          a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
          }
          ul li::marker {           
            color: red; /* Customize the color of the marker */
          }
          img {
            max-width: 50%; 
            height: auto; 
            display: block; 
            margin: 10px 0; 
          }
          #details-author {
            display: flex;
            align-items: center;
            justify-content:  space-between;
            margin-bottom: 20px;
            font-style: italic;
            
          }

          #article-major-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
            grid-template-rows: repeat(2, auto); /* Two rows with automatic height */
            gap: 15px;
          }

          div span:first-child {
            font-weight: bold;
          }
          </style>
        </head>
        <body>
          <!-- Place the content you want to print here -->
          <h1 id="article-heading">${articleHeading?.innerHTML}</h1>
          <div id="article-details">${articleDetails?.innerHTML}</div>
          <div id="article-major">${articleMajor?.innerHTML}</div>
          <div id="article">${articleContent?.innerHTML}</div>
        </body>
      </html>
    `);

    // Close the document stream and trigger the print dialog
    printWindow.document.close();
    printWindow.print();
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

  const shareOnPinterest = () => {
    window.open(
      ` https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
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
            onClick={shareOnPinterest}
            aria-label="Share on Pinterest"
            title="Share on Pinterest"
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
