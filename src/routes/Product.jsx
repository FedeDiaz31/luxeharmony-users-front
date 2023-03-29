//Dependencias
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../redux/cartReducer";

//Componentes
import Tabs from "../components/Tabs";
import ImageGallery from "react-image-gallery";
import "../animation/animations.css";
import Spinner from "../components/Spinner";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  document.title = `${product ? product.model : "cargando..."} | LuxeHarmony `;
  window.scrollTo({ top: 0 });
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
    dispatch(addProduct(product));
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
        <main className="mx-10 tablet:mx-20 laptop:mx-48 pt-32 fade-in">
          <div className="m-auto mt-5">
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
                <div>
                  <h1 className="model-title text-3xl pb-5">{product.model}</h1>
                </div>
                <div>
                  <div className="w-[25vw] options columns-2 flex-row">
                    <ul>
                      <div className="py-3">
                        <li className=" font-bold">Finish:</li>
                        <li className=" font-bold">Material:</li>
                      </div>
                      <div className="py-3 whitespace-nowrap">
                        <li>
                          {product ? product.detail.bodyFinish : "cargando..."}
                        </li>
                        <li>
                          {product
                            ? product.detail.bodyMaterial
                            : "cargando..."}
                        </li>
                      </div>
                    </ul>
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

            <hr className="mb-7 mt-3" />

            <div className="tablet:flex mt-10 mb-10 justify-evenly w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  SIGN UP FOR NEWS & OFFERS
                </h3>
                <button className="bg-buttonsSecondaryColor w-80 py-2 mb-2 text-textPrimary mt-1 font-semibold">
                  SUSCRIBE
                </button>
                <h6 className="text-xs">
                  By submitting this form, you agree to our Terms & Conditions
                  and Privacy Policy.
                </h6>
              </div>
              <div className="w-80 justify-center mt-10 tablet:mt-0">
                <h3 className="text-l font-semibold mb-5">Follow us: </h3>
                <div className="grid grid-cols-5">
                  <div>
                    <img
                      src="https://images.ctfassets.net/m8onsx4mm13s/7z1pAOQBLHEuVOVM6LRPcx/b780b4f8014da92d2580f7ee4e2db124/icon-instagram.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.ctfassets.net/m8onsx4mm13s/35Oaae1J6dqWxeuNAvrNwa/b25005683fd9757a05a84e4178b83512/icon-twitter.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.ctfassets.net/m8onsx4mm13s/StLA124Qs8nCQs8QAfEhs/ee76f7cd2e1231ff501e87a86adfb078/icon-youtube.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.ctfassets.net/m8onsx4mm13s/4LXqNqHU1A4TwofkuQiyTG/eafd61f24af8995e99e8e23f9e348952/icon-facebook.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.ctfassets.net/m8onsx4mm13s/4wAHtxp4Tw35DxLOA1jgcM/6e020e6de55d1e02c088b32752763df5/icon-msg.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Product;
