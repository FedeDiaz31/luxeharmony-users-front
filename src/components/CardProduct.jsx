import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ brand, image, model, price, slug }) {
  return (
    <Link
      to={`/product/${slug}`}
      className="cardProduct w-[20vw] h-[100%] flex flex-shrink-0 items-center justify-center"
    >
      <img
        className="w-[17vw] h-[100%] object-cover"
        src={
          image.includes("http")
            ? image
            : `${process.env.REACT_APP_API_URL}/img/products/${image}.png`
        }
        alt={brand + model}
      />
    </Link>
  );
}

export default CardProduct;
