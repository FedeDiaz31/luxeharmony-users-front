// Dependencies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Animations
import "../animation/animations.css";
// Components
import CardProductCategory from "../components/CardProductCategory";
import Spinner from "../components/Spinner";
import Subscribe from "../components/Subscribe";
import Skeleton from "../components/Skeleton";
import SpinnerLogo from "../components/SpinnerLogo";

function Category() {
  const name = useParams().slug;
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  document.title = ` Home | ${name[0].toUpperCase() + name.substring(1)} `;
  window.scrollTo({ top: 0 });
  const hola = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories/${name}`,
      });
      setProducts(response.data.products);
    };
    getProducts();
  }, [name]);

if(hola){
  return(
  <SpinnerLogo/>
  )
} else{
  return (
    <div className="">
      <div className="w-full flex items-center gap-10 bg-bgSecondaryColor pt-[90px] pb-5 text-textPrimary px-32">
        <button
          onClick={() => navigate(-1)}
          className="bg-bgTertiaryColor px-3"
        >
          Back
        </button>
        <h3 className="desktop:text-3xl font-light">
          {name[0].toUpperCase() + name.substring(1)}
        </h3>
      </div>
      {products ? (
        <div className="w-full justify-center flex">
          <div className="mx-10 mobilXS:mx-42 desktop:mx-72 m-auto py-10 grid grid-cols-1 mobilXS:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-8  fade-in">
            {products.map((product) => {
              return <CardProductCategory product={product} />;
            })}
          </div>
        </div>
      ) : (
        <div className="w-full grid place-content-center h-[100vh]">
          <Spinner />
        </div>
      )}
      <hr className="mx-[18%] mt-4" />
      <Subscribe />
    </div>
  );
}
}

export default Category;
