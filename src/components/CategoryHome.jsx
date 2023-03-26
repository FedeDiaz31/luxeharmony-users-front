import React from "react";
import { Link } from "react-router-dom";

function CategoryHome({ category, img, title, paragraph }) {
  return (
    <Link className="bg-bgPrimaryColor" to={`/categories/${category}`}>
      <img className="w-full h-[50%] object-cover" src={img} alt="" />
      <h2 className="category-title text-left pl-3 pt-3">{title}</h2>
      <p className=" text-left px-3 text-s">{paragraph}</p>
    </Link>
  );
}

export default CategoryHome;
