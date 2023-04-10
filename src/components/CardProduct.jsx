import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="flex justify-center">
      <img
        className="h-72 object-contain"
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
