import axios from "axios";
import { React, useEffect, useState } from "react";
import BrandHome from "../components/BrandHome";

function BrandsContainer() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/brands`,
      });
      setBrands(response.data);
    };
    getBrands();
  }, []);

  return (
    <div
      className=" w-full px-5 pb-10 text-center bg-bgSecondaryColor"
      id="categories-container"
    >
      <h2 className="category-title text-[#fff] text-center py-10">
        OUR BRANDS
      </h2>
      <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 gap-5">
        {brands
          ? brands.map((brand) => {
              return <BrandHome brand={brand} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default BrandsContainer;
