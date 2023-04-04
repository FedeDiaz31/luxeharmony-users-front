import { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import arrowBack from "../assets/img/arrowBack.svg";
import arrowForward from "../assets/img/arrowForward.svg";
import { getHighlights } from "../redux/highlightsReducer";

function CardCarousel() {
  const dispatch = useDispatch();
  const highlights = useSelector((state) => state.highlights);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products`,
      });
      dispatch(getHighlights(response.data));
    };
    getProducts();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <img src={arrowForward} className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <img src={arrowBack} className={className} onClick={onClick} />;
  }

  const settings = {
    slidesToShow: 5,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      <div>
        <h2 className="category-title text-textSecondary text-center pb-14">
          HILIGHTS
        </h2>
      </div>
      <div>
        <Slider {...settings}>
          {highlights?.map((product) => (
            <CardProduct
              key={product._id}
              image={product.image[0]}
              slug={product.slug}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CardCarousel;
