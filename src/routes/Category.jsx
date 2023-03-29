import React, { useState, useEffect } from "react";
import "../animation/animations.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardProductCategory from "../components/CardProductCategory";
import Spinner from "../components/Spinner";

function Category() {
  const name = useParams().slug;
  const [products, setProducts] = useState(null);
  document.title = ` Home | ${name} `;
  window.scrollTo({ top: 0 });

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories/${name}`,
      });
      setProducts(response.data.products);
    };
    getProducts();
  }, []);

  return (
    <div className="fade-in">
      {products ? (
        <div className="mx-10 mobilXS:mx-42 tablet:mx-72 m-auto py-10 grid grid-cols-1 mobilXS:grid-cols-2 tablet:grid-cols-3 gap-3 pt-32">
          {products.map((product) => {
            return (
              <CardProductCategory
                slug={product.slug}
                model={product.model}
                brand={product.brand}
                image={product.image[0]}
                price={product.price}
              />
            );
          })}
        </div>
      ) : (
        <div className="w-full grid place-content-center h-[100vh]">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Category;
