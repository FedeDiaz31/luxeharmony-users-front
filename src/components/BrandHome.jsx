import React from "react";

function CategoryHome({ brand }) {
  console.log(brand);
  return (
    /*     <Link className="bg-bgPrimaryColor" to={`/categories/${brands}`}> */

    <img
      className="w-full flex h-[70%] object-contain"
      src={
        brand.logo.includes("http")
          ? brand.logo
          : `${process.env.REACT_APP_API_URL}/img/${brand.logo}`
      }
      alt=""
    />
    /*     </Link> */
  );
}

export default CategoryHome;
