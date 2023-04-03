import { useRef, useState, useEffect } from "react";
import backChevron from "../assets/img/arrowBack.svg";
import forwardChevron from "../assets/img/arrowForward.svg";
import axios from "axios";
import CardProduct from "./CardProduct";
import { useNavigate } from "react-router";
import Slider from "react-slick";


function CardCarousel() {
  const containerRef = useRef();
  const [products, setProducts] = useState([]);
  const [containerWidth, setContainerWidth] = useState(null);
  const navigate = useNavigate();
  const highlight = true;

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight:true,
    adaptiveWidth:true,
    arrows:true,
  };

  return (
    <Slider className=" text-bgSecondaryColor laptop:w-[50vw] desktop:w-[50vw] desktop:h-[50vh] m-auto  " {...settings}>
      {products.map(product => <CardProduct key={product._id} image={product.image[0]} slug={product.slug} />)}
    </Slider>
  );
}

export default CardCarousel;
