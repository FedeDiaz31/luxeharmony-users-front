import axios from "axios";
import { useEffect, useState } from "react";
import "../animation/animations.css";

function BrandsContainer() {
  const [brands, setBrands] = useState(null);
  /* 
    useEffect(() => {
      const getBrands = async () => {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}/brands`,
        });
        setBrands(response.data);
      };
      getBrands();
    }, []); */

  return (
    <>
      {/*    {brands ? ( */}
      <div
        id="categories-container"
        className="min-h-[200px] px-5 grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 gap-5 w-full bg-bgSecondaryColor"
      >
        <div className="flex items-center justify-center">
          <img className="w-[150px]" src={"GIBSON-LOGO-WHITE-1.png"} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[150px]" src={"FENDER-LOGO-WHITE-1.png"} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[150px]" src={"PRS-LOGO-WHITE-1.png"} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[150px]" src={"NEUMANN-LOGO-WHITE-1.png"} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[150px]" src={"UA-LOGO-WHITE-1.png"} alt="" />
        </div>
        {/*   {brands.map((brand) => {
            return (
              <div className="flex items-center justify-center">
                <img
                  className="w-[150px]"
                  src={
                    brand.logo.includes("http")
                      ? brand.logo
                      : `${process.env.REACT_APP_API_URL}/img/${brand.logo}`
                  }
                  alt=""
                />
              </div>
            );
          })} */}
      </div>
      {/*    ) : (
        <div
          id="categories-container"
          className="min-h-[200px] px-5 grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 gap-5 w-full bg-bgSecondaryColor"
        ></div>
      )} */}
    </>
  );
}

export default BrandsContainer;
