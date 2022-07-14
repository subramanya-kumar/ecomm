import React from "react";
import Rating from "./Rating";

const Product = ({ prd }) => {
  return (
    <div key={prd._id} className="card">
      <a href={`/product/${prd._id}`}>
        <img className="medium" src={prd.image} alt={prd.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${prd._id}`}>
          <h2>{prd.name}</h2>
        </a>
        <Rating rating={prd.rating} numReviews={prd.numReviews} />
        <div className="price">{prd.price} INR</div>
      </div>
    </div>
  );
};
export default Product;
