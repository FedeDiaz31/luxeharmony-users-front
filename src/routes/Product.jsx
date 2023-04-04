// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../redux/cartReducer";
import { useNavigate } from "react-router-dom";
// Animations
import "../animation/animations.css";
// Components
import Tabs from "../components/Tabs";
import ImageGallery from "react-image-gallery";
import Spinner from "../components/Spinner";
import Subscribe from "../components/Subscribe";
import chevronBack from "../assets/img/chevronBack.svg";

const Product = () => {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  document.title = `${product ? product.model : "cargando..."} | LuxeHarmony `;

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/products/${slug}`,
      });
      setProduct(response.data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    if (product) {
      setImages(
        product.image.map((picture) => {
          if (picture.includes("http")) {
            return { original: picture, thumbnail: picture };
          } else
            return {
              original: `${process.env.REACT_APP_API_URL}/img/products/${picture}`,
              thumbnail: `${process.env.REACT_APP_API_URL}/img/products/${picture}`,
            };
        })
      );
    }
  }, [product]);

  const handleAddProduct = () => {
    if (cart.some((productCart) => productCart.product.slug === product.slug)) {
      const productCart = cart.filter(
        (productCart) => productCart.product.slug === product.slug
      );
      dispatch(addProduct(productCart[0]));
    } else {
      dispatch(addProduct(product));
    }
  };

  const thumbnailClass = {
    border: "none",
  };

  if (!product) {
    return (
      <div className="w-full grid place-content-center h-[100vh]">
        <Spinner />
      </div>
    );
  } else {
    return (
      <>
        <main className="">
          <div className="w-full flex items-center gap-10 bg-bgSecondaryColor pb-5 pt-[90px] text-textPrimary pl-10 tablet:px-32">
            <img
              className="chevron-back-category w-6 h-6 pt-1 cursor-pointer"
              onClick={() => navigate(-1)}
              src={chevronBack}
              alt=""
            />
            <h3 className="text-2xl font-light">{product.model}</h3>
          </div>
          <div className="m-auto mt-14 mx-10 tablet:mx-20 laptop:mx-48 fade-in">
            <div className="grid grid-cols-1 tablet:grid-cols-2">
              <div className="tablet:mr-16 min-h-[300px]">
                {images.length > 0 ? (
                  <ImageGallery
                    items={images}
                    thumbnailPosition={"left"}
                    thumbnailClass={thumbnailClass}
                    showPlayButton={false}
                    autoPlay={true}
                    showNav={false}
                    showBullets={false}
                    slideInterval={5000}
                    slideDuration={1500}
                  />
                ) : (
                  <div className="w-full grid place-content-center h-[60vh]">
                    <Spinner />
                  </div>
                )}
              </div>
              <div className="mt-10 tablet:m-0">
                {/* <div>
                  <h1 className="model-title text-3xl pb-5">{product.model}</h1>
                </div> */}
                <div>
                  <div className="w-[50%] grid grid-cols-2 font-bold mb-2">
                    <div>Finish:</div>
                    <div>
                      {product ? product.detail.bodyFinish : "cargando..."}
                    </div>
                  </div>
                  <div className="w-[50%] grid grid-cols-2 font-bold mb-2">
                    <div>Material:</div>{" "}
                    <div>
                      {product ? product.detail.bodyMaterial : "cargando..."}
                    </div>
                  </div>
                  <div className="column-1 ">
                    <p className="product-price text-3xl pt-8">
                      {product ? "$" + product.price : <h2>cargando...</h2>}
                    </p>
                    <button
                      onClick={handleAddProduct}
                      className="add-to-cart bg-buttonsPrimaryColor w-full py-2 mb-2 text-textPrimary mt-10"
                    >
                      ADD TO CART
                    </button>
                    <div className="column-1 text-center">
                      <p className=" text-xs text-left mt-1">
                        SHIPPING & RETURN POLICY
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-1 mt-10 mb-10">
              <h2 className="text-2xl mb-2 font-bold">{product.subtitle}</h2>
              <p>{product.description}</p>
            </div>
            <div className="column-1 mt-20 mb-16 ">
              {product ? <Tabs product={product} /> : null}
            </div>
          </div>
          <hr className="mt-4" />
          <Subscribe />
        </main>
      </>
    );
  }
};

export default Product;
