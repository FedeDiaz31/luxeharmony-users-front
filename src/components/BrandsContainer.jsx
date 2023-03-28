import axios from "axios";
import { useEffect, useState } from "react";
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
      className=" py-10 w-full px-5 text-center bg-bgSecondaryColor"
      id="categories-container"
    >
      <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 gap-5 py-10">
        {brands
          ? brands.map((brand) => {
              return <BrandHome key={brand._id} brand={brand} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default BrandsContainer;
