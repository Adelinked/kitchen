"use client";
import React from "react";
import SocialIcon from ".";
import { FaFacebook } from "react-icons/fa6";

const ShareButtons = ({ recipeTitle, recipeUrl }) => {
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

  return (
    <div className="flex flex-col items-center space-x-4  w-full">
      {/* Email icon */}
      <button
        onClick={shareOnEmail}
        className="text-gray-500 hover:text-gray-700"
      >
        <i className="fas fa-envelope"></i>
      </button>

      {/* Print icon */}
      <button
        onClick={shareOnPrint}
        className="text-gray-500 hover:text-gray-700"
      >
        <i className="fas fa-print"></i>
      </button>

      {/* Facebook icon */}
      <button
        onClick={shareOnFacebook}
        className="text-blue-500 hover:text-blue-700"
      >
        <i className="fab fa-facebook"></i>
      </button>
      <FaFacebook
        onClick={shareOnFacebook}
        className="text-blue-500 hover:text-blue-700"
      />

      {/* Twitter icon */}
      <button
        onClick={shareOnTwitter}
        className="text-blue-400 hover:text-blue-600"
      >
        <i className="fab fa-twitter"></i>
      </button>

      {/* LinkedIn icon */}
      <button
        onClick={shareOnLinkedIn}
        className="text-blue-600 hover:text-blue-800"
      >
        <i className="fab fa-linkedin"></i>
      </button>
    </div>
  );
};

export default ShareButtons;
