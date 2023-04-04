import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../redux/brandsReducer";
import "../animation/animations.css";
import { Link } from "react-router-dom";

function BrandsContainer() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands);

  useEffect(() => {
    const callBrands = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/brands`,
      });
      dispatch(getBrands(response.data));
    };
    callBrands();
  }, []);

  return (
    <>
      <div className="bg-bgSecondaryColor py-10 tablet:pl-10 w-full tablet:pr-6">
        <div
          id="categories-container"
          className="bg-bgSecondaryColor px-5 grid grid-cols-1 mobilXS:grid-cols-3 tablet:grid-cols-5 gap-10 tablet:gap-5 w-full"
        >
          {brands &&
            brands.map((brand, i) => {
              return (
                <Link
                  className="w-full flex justify-center"
                  to={`/brands/${brand.slug}`}
                >
                  <img
                    className="w-36 tablet:w-[180px] "
                    src={
                      brand.logo.includes("http")
                        ? brand.logo
                        : `${process.env.REACT_APP_API_URL}/img/${brand.logo}`
                    }
                    alt=""
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default BrandsContainer;
