import { React, useRef, useState, useEffect } from "react";
import backChevron from "../assets/img/arrowBack.svg";
import forwardChevron from "../assets/img/arrowForward.svg";
import axios from "axios";
import CardProduct from "./CardProduct";
import { useNavigate } from "react-router";

function CardCarousel() {
  const containerRef = useRef();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products`,
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      {" "}
      <h2 className="category-title text-textSecondary text-center pt-10">
        HIGHLIGHTS
      </h2>
      <div
        ref={containerRef}
        className="w-[70vw] h-[50vh]  m-auto mb-10 pl-5 pr-5 mt-5 overflow-hidden flex flex-row gap-5 items-center scroll-smooth ease-in-out duration-300  "
      >
        <img
          onClick={() => (containerRef.current.scrollLeft -= 1000)}
          className="absolute left-[7vw]  cursor-pointer scale-50 hover:scale-100 ease-in-out duration-150"
          src={backChevron}
          alt=""
        />
        {products.map((product) => (
          <CardProduct
            key={product._id}
            slug={product.slug}
            brand={product.brand}
            image={product.image[0]}
          ></CardProduct>
        ))}
        <img
          onClick={() => (containerRef.current.scrollLeft += 1000)}
          className="absolute right-[7vw]  cursor-pointer scale-50 hover:scale-100 ease-in-out duration-150"
          src={forwardChevron}
          alt=""
        />
      </div>
    </>
  );
}

export default CardCarousel;
