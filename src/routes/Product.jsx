// Dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Animations
import "../animation/animations.css";
// Components
import Tabs from "../components/Tabs";
import ImageGallery from "react-image-gallery";
import Spinner from "../components/Spinner";
import Subscribe from "../components/Subscribe";
import chevronBack from "../assets/img/chevronBack.svg";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCartToastify = () => {
    return toast("Producto agregado al carrito.", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

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
  }, [slug]);

  useEffect(() => {
    if (product) {
      setImages(
        product.image.map((picture) => {
          if (picture.includes("http")) {
            return { original: picture, thumbnail: picture };
          } else
            return {
              original: `${process.env.REACT_APP_SUPABASE_BUCKET}/${picture}`,
              thumbnail: `${process.env.REACT_APP_SUPABASE_BUCKET}/${picture}`,
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
      dispatch(
        addProduct({
          product: product,
          quantity: 1,
          fixedPrice: product.price,
        })
      );
    }
    addCartToastify();
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
          {/*   <div>
            <ToastContainer />
          </div> */}
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
              <div className="mt-10 tablet:mt-6">
                <div>
                  <div className="flex gap-3 font-bold mb-1">
                    <div>
                      <h2 className="font-light">Finish:</h2>
                    </div>
                    <div>
                      <h3 className="font-bold">
                        {product ? product.detail.bodyFinish : "cargando..."}
                      </h3>
                    </div>
                  </div>
                  <div className=" flex gap-3 font-bold">
                    <h2 className="font-light">Material:</h2>
                    <div>
                      <h3 className="font-bold">
                        {product ? product.detail.bodyMaterial : "cargando..."}
                      </h3>
                    </div>
                  </div>
                  <hr className="my-3" />
                  <div className="column-1">
                    <p className="font-primaryFont text-3xl">
                      {product ? (
                        "U$D " + product.price.toFixed(2)
                      ) : (
                        <h2>cargando...</h2>
                      )}
                    </p>
                    <button
                      onClick={handleAddProduct}
                      className={`${
                        product.stock === 0 &&
                        "relative opacity-30 cursor-default"
                      } add-to-cart bg-buttonsPrimaryColor w-full py-2 mb-2 text-textPrimary mt-7`}
                    >
                      {product.stock === 0 ? "SOLD OUT" : "ADD TO CART"}
                    </button>
                    <div className="column-1 w-full">
                      <p className="text-xs text-end  mt-1">
                        SHIPPING & RETURN POLICY
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-1 mt-10 mb-10">
              <h2 className="text-2xl mb-2 font-bold">{product.subtitle}</h2>
              <p className="font-light">{product.description}</p>
            </div>
            <div className="column-1 tablet:min-h-[300px] mt-20 mb-5">
              {product ? <Tabs product={product} /> : null}
            </div>
          </div>
          <div id="relatedProducts" className="mb-[50px]">
            <RelatedProducts product={product} />
          </div>
          <hr className="mx-60 opacity-25" />
          <Subscribe />
        </main>
      </>
    );
  }
};

export default Product;
