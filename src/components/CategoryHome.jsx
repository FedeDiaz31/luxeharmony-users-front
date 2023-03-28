import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CategoryHome({ category, img, title, paragraph }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to={`/categories/${category}`}
      className="relative overflow-hidden"
    >
      <img
        className="w-full h-[300px] tablet:h-[400px] object-cover"
        src={img}
        alt=""
      />
      <div
        className={
          hover
            ? "absolute h-[200px] bottom-0 bg-bgSecondaryColor text-textPrimary py-3 transition-all duration-200"
            : "absolute h-[200px] bottom-[-130px] bg-bgSecondaryColor text-textPrimary py-3 transition-all duration-200"
        }
      >
        <h2 className="category-title text-left pl-3 pt-3">{title}</h2>
        <p className="text-left px-3 text-sm">{paragraph}</p>
      </div>
    </Link>
  );
}

export default CategoryHome;
