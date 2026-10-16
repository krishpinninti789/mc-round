import React, { useState } from "react";

const RatingStars = () => {
  const [ratingStars, setRatingStars] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="flex m-3 gap-x-3">
      This is RatingStars
      <div className="flex m-3 gap-x-2">
        {Array(13)
          .fill("")
          .map((item, index) => (
            <span
              onClick={() => setRatingStars(index)}
              onMouseOver={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`${(hoverIndex === null && index <= ratingStars) || index <= hoverIndex ? "bg-yellow-400" : ""} text-2xl border border-black rounded-md p-8`}
            ></span>
          ))}
      </div>
    </div>
  );
};

export default RatingStars;
