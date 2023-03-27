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
      <div className="w-100vw h-[40vh] bg-bgSecondaryColor"></div>
      <div className=" w-[60vw] m-auto grid grid-cols-3 gap-3">
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
