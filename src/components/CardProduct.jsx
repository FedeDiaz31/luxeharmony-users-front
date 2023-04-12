import React from "react";
import { Link } from "react-router-dom";

function CardProduct({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="flex justify-center">
      <img
        className="h-72 object-contain"
        alt=""
        src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${product.image[0]}`}
      />
    </Link>
  );
}

export default CardProduct;
