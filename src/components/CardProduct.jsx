import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ brand, image, model, price, slug }) {
  return (
    <Link
      to={`/product/${slug}`}
      className="cardProduct w-[10vw] h-[90%] flex flex-shrink-0 items-center justify-center "
    >
      <h1>{model}</h1>
      <img className="w-[70%]" src={image} alt={brand + model} />
      <img src={brand} alt="" />
    </Link>
  );
}

export default CardProduct;
