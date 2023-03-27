import React from "react";

function CategoryHome({ brand }) {
  console.log(brand);
  return (
    /*     <Link className="bg-bgPrimaryColor" to={`/categories/${brands}`}> */
    <div className="flex h-[100%] hover:scale-[103%] cursor-pointer items-center justify-center transition-all duration-200">
      <img
        className="w-[150px]  object-contain"
        src={
          brand.logo.includes("http")
            ? brand.logo
            : `${process.env.REACT_APP_API_URL}/img/${brand.logo}`
        }
        alt=""
      />
    </div>
  );
}

export default CategoryHome;
