import React from "react";

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1.0
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2.0
              ? "fa fa-star"
              : rating >= 1.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3.0
              ? "fa fa-star"
              : rating >= 2.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4.0
              ? "fa fa-star"
              : rating >= 3.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5.0
              ? "fa fa-star"
              : rating >= 4.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>{numReviews} Reviews</span>
    </div>
  );
};
export default Rating;
