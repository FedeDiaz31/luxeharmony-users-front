import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Tabs from "../components/Tabs";
import ImageGallery from "react-image-gallery";
import Splash from "../components/Splash";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const [images, setImages] = useState([]);
  document.title = `${product ? product.model : "cargando..."} | Gibson `;

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products/${slug}`,
      });
      setProduct(response.data);
    };
    getProduct();
  }, []);

  useEffect(() => {
    if (product) {
      setImages(
        product.image.map((picture) => {
          return { original: picture, thumbnail: picture };
        })
      );
    }
  }, [product]);

  if (product === null) {
    return <Splash />;
  } else {
    return (
      <>
        <main className="w-[60vw] m-auto pt-32">
          <div className="m-auto container ">
            <div className="columns-1 laptop:columns-2">
              <div className="columns-1 mr-10">
                {images.length > 0 ? (
                  <ImageGallery
                    items={images}
                    thumbnailPosition={"left"}
                    showPlayButton={false}
                    autoPlay={true}
                    showNav={false}
                    showBullets={false}
                    slideInterval={5000}
                    slideDuration={1500}
                  />
                ) : (
                  <h1>Loading...</h1>
                )}
                {console.log(images)}
              </div>
              <div>
                <h1 className="model-title text-3xl pb-5">{product.model}</h1>

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
                        {product ? product.detail.bodyMaterial : "cargando..."}
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="column-1 ">
                  <p className="product-price text-3xl pt-8">
                    {product ? "$" + product.price : <h2>cargando...</h2>}
                  </p>
                  <button className="add-to-cart bg-buttonsPrimaryColor w-full py-2 mb-2 text-textPrimary mt-10">
                    ADD TO CART
                  </button>
                </div>
                <div className="column-1 text-center">
                  <p className=" text-xs text-left mt-1">
                    SHIPPING & RETURN POLICY
                  </p>
                </div>
              </div>
            </div>
            <div className="column-1">
              <h2 className="text-2xl">{!product ?? product.subtitle}</h2>
              <p>{!product ?? product.description}</p>
            </div>
            <div className="column-1">
              {product ? <Tabs product={product} /> : null}
            </div>

            <hr className="mb-7 mt-3" />
          </div>
        </main>
      </>
    );
  }
};

export default Product;
