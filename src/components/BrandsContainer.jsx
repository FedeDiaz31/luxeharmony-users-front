import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../redux/brandsReducer";
import "../animation/animations.css";

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
      <div className="bg-bgSecondaryColor pt-10 pb-7">
        <div
          id="categories-container"
          className="bg-bgSecondaryColor min-h-[200px] px-5 grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 gap-5 w-full "
        >
          {brands &&
            brands.map((brand, i) => {
              return (
                <div key={i} className="flex items-center justify-center">
                  <img
                    className="w-36 tablet:w-[180px]"
                    src={
                      brand.logo.includes("http")
                        ? brand.logo
                        : `${process.env.REACT_APP_API_URL}/img/${brand.logo}`
                    }
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default BrandsContainer;
