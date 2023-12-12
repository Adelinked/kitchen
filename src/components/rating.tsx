// Rating.js

import React from "react";
import { TbStarFilled, TbStar, TbStarHalfFilled } from "react-icons/tb"; // Adjust the path

const Rating = ({ rating }) => {
  // Determine the number of filled, half-filled, and empty stars
  const numRating = Number(rating);
  const filledStars = Math.floor(numRating);
  const hasHalfStar = Number(numRating) % 1 !== 0;

  // Generate an array of star components based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < filledStars) {
      return <TbStarFilled key={index} />;
    } else if (hasHalfStar && index === filledStars) {
      return <TbStarHalfFilled key={index} />;
    } else {
      return <TbStar key={index} />;
    }
  });

  return <div className="flex items-center text-primary-500">{stars}</div>;
};

export default Rating;
