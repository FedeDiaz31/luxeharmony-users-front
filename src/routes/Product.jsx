import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Tabs from "../components/Tabs";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/product/BBES335REAGNB1_back.png",
    thumbnail: "/images/product/BBES335REAGNB1_back.png",
  },
  {
    original: "/images/product/BBES335REAGNB1_beauty.png",
    thumbnail: "/images/product/BBES335REAGNB1_beauty.png",
  },
  {
    original: "/images/product/BBES335REAGNB1_front.png",
    thumbnail: "/images/product/BBES335REAGNB1_front.png",
  },
  {
    original: "/images/product/BBES335REAGNB1_side.png",
    thumbnail: "/images/product/BBES335REAGNB1_side.png",
  },
];

const Product = () => {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products/${slug}`,
      });
      setProduct(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <main className="pt-32">
        <div className="m-auto container ">
          <div className="columns-1 tablet:columns-2">
            <div className="columns-1">
              {product ? (
                <ImageGallery
                  items={product.images}
                  thumbnailPosition={"left"}
                  showPlayButton={false}
                  autoPlay={true}
                  showNav={false}
                  showBullets={false}
                />
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
            <div className="columns-1">
              <h1 className="text-3xl">{!product ?? product.model}</h1>
            </div>
            <div className="options columns-2 flex-row">
              <ul>
                <div>
                  <li>Finish:</li>
                  <li>Color:</li>
                </div>
                <div>
                  <li>Perfect</li>
                  <li>Verdecito claro</li>
                </div>
              </ul>
            </div>

            <div className="column-1">
              <p className="text-3xl">$2000</p>
              <button className="bg-buttonsPrimaryColor w-full py-2">
                ADD TO CART
              </button>
            </div>
            <div className="column-1 text-center">
              <p>SHIPPING & RETURN POLICY</p>
            </div>
          </div>
          <div className="column-1">
            <h2 className="text-2xl">{!product ?? product.subtitle}</h2>
            <p>{!product ?? product.description}</p>
          </div>
          <div className="column-1">
            <Tabs />
          </div>

          <hr className="mb-7 mt-3" />
        </div>
      </main>
    </>
  );
};

export default Product;
