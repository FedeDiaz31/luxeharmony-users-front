import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ brand, image, model, slug }) {
  return (
    <Link
      to={`/product/${slug}`}
      className="cardProduct h-[300px] min-w-0 p-5 gap-2 flex justify-center"
    >
      <h1>{model}</h1>
      <img
        className="object-cover"
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
