import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ brand, image, slug }) {
  return (
    <Link to={`/product/${slug}`}>
      <img
        src={
          image.includes("http")
            ? image
            : `${process.env.REACT_APP_API_URL}/img/products/${image}`
        }
      />
      <img className="w-[300px] object-contain" src={brand} alt="" />
    </Link>
  );
}

export default CardProduct;
