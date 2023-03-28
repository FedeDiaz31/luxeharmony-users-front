import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardProductCategory from "../components/CardProductCategory";

function Category() {
  const name = useParams().slug;
  const [products, setProducts] = useState(null);

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
    <div className="w-[100vw]">
      {/* <div className="w-100vw h-[40vh] bg-bgSecondaryColor">
        <h3 className="text-textPrimary ml-20 pt-28 text-3xl font-bold">
          Category {name}
        </h3>
      </div> */}
      <div className=" w-[50vw] m-auto py-10 grid grid-cols-3 gap-3 pt-32">
        {products ? (
          products.map((product) => (
            <CardProductCategory
              slug={product.slug}
              model={product.model}
              brand={product.brand}
              image={product.image[0]}
              price={product.price}
            />
          ))
        ) : (
          <h1>cargando...</h1>
        )}
      </div>
    </div>
  );
}

export default Category;
