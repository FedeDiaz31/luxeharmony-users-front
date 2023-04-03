import { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import Slider from "react-slick";

function CardCarousel() {
  const [products, setProducts] = useState([]);

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

  const settings = {
    infinite: true,
    speed: 500,
    initialSlide: 3,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          initialSlide: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {products.map((product) => (
          <CardProduct
            key={product._id}
            image={product.image[0]}
            slug={product.slug}
          />
        ))}
      </Slider>
    </div>
  );
}

export default CardCarousel;
