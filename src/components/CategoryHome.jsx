import React from "react";
import { Link } from "react-router-dom";

function CategoryHome({category,img,title,paragraph}) {
  return (
    <Link
      className="w-[15vw] h-[40vh] bg-bgPrimaryColor m-10"
      to={`/categories/${category}`}
    >
      <img
        className="w-full h-[50%] object-cover"
        src={img}
        alt=""
      />
      <h2 className="category-title text-left pl-3 pt-3">{title}</h2>
      <p className=" text-left px-3 text-xs">{paragraph}</p>
    </Link>
  );
}

export default CategoryHome;
