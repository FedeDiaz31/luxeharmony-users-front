import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ product, slug }) {
  return (
    <Link to={`/product/${slug}`} className="flex justify-center">
      <img
        className="w-72"
        src={
          product.image[0].includes("http")
            ? product.image[0]
            : `${process.env.REACT_APP_API_URL}/img/products/${product.image[0]}`
        }
      />
    </Link>
  );
}

export default CardProduct;
