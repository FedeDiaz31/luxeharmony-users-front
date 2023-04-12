import { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import arrowBack from "../assets/img/arrowBack.svg";
import arrowForward from "../assets/img/arrowForward.svg";

function RelatedProducts({ product }) {
  // const dispatch = useDispatch();
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories/${product.category.slug}`,
      });
      setRelatedProducts(response.data.products);
    };
    getProducts();
  }, [product]);

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <img src={arrowForward} className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <img src={arrowBack} className={className} onClick={onClick} />;
  }

  const settings = {
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-[20px] flex justify-center mb-14">
        <h2 className="category-title   text-SecondaryColor">
          RELATED PRODUCTS
        </h2>
      </div>
      <div className="px-10 tablet:px-32">
        <Slider {...settings}>
          {relatedProducts?.map((product) => (
            <CardProduct
              key={product._id}
              product={product}
              slug={product.slug}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default RelatedProducts;
