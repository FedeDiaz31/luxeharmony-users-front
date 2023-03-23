import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";

import ImageGallery from "react-image-gallery";

// const images = [
//   {
//     original: "/images/product/BBES335REAGNB1_back.png",
//     thumbnail: "/images/product/BBES335REAGNB1_back.png",
//   },
//   {
//     original: "/images/product/BBES335REAGNB1_beauty.png",
//     thumbnail: "/images/product/BBES335REAGNB1_beauty.png",
//   },
//   {
//     original: "/images/product/BBES335REAGNB1_front.png",
//     thumbnail: "/images/product/BBES335REAGNB1_front.png",
//   },
//   {
//     original: "/images/product/BBES335REAGNB1_side.png",
//     thumbnail: "/images/product/BBES335REAGNB1_side.png",
//   },
// ];

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
      <Header />
      <main>
        <div className="m-auto container mt-12">
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
              ) : null}
            </div>
            <div className="columns-1">
              <h1 className="text-3xl">Guitarra electrica</h1>
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
            <h2 className="text-2xl">Titulo del producto</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              atque deleniti illum ex laborum totam corporis similique neque.
              Aliquam exercitationem fugit blanditiis error sint. Debitis fugit
              vero ea distinctio cum, labore alias repellat veritatis id eaque
              quae magnam obcaecati recusandae consequatur fuga a ratione
              molestiae numquam dolorem repudiandae pariatur dolor quia magni?
              Quas architecto ad soluta rerum error, vitae alias aperiam
              molestias tenetur quasi est facilis non ut modi officia sit minima
              maiores ipsa autem odit vero quae deleniti, eveniet atque.
              Similique obcaecati aperiam sed ducimus. Inventore, consequatur
              odit. Tempora vitae recusandae est expedita repellat perferendis,
              at voluptatem odio et.
            </p>
          </div>
          <div className="column-1">
            <Tabs />
          </div>

          <hr className="mb-7 mt-3" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Product;
