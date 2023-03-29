import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ brand, image, model, slug }) {
  return (
    <Link
      to={`/product/${slug}`}
      className="cardProduct w-[20vw] h-[100%] flex flex-shrink-0 items-center justify-center"
    >
      <h1>{model}</h1>
      <img
        className="w-full"
        src={
          image.includes("http")
            ? image
            : `${process.env.REACT_APP_API_URL}/img/products/${image}`
        }
      />
      <img src={brand} alt="" />
    </Link>
  );
}

export default CardProduct;
