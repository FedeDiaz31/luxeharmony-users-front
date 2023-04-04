import React from "react";
import { useSelector } from "react-redux";

const url = process.env.REACT_APP_API_URL;

const Summary = () => {
  const cart = useSelector((state) => state.cart);

  function subTotalPrice() {
    const prices = cart.map((detail) => detail.product.price);
    let totalPrice = 0;
    for (let price of prices) {
      totalPrice += price;
    }
    return totalPrice.toFixed(2);
  }

  return (
    <div
      id="viewSummary"
      className="  py-2 my-2  laptop:m-0 block transition-opacity laptop:w-2/5 laptop:h-full justifi-between "
    >
      <h2 className="mb-2 hidden laptop:block text-xl font-terciaryFont ">
        Summary
      </h2>
      <div className=" columns-1 flex-col">
        {cart.map((detail) => (
          <div className="flex justify-around  w-full py-2  border-b  my-2 ">
            <img
              src={
                detail.product.image[0].includes("http")
                  ? detail.product.image[0]
                  : `${url}/img/products/${detail.product.image[0]}`
              }
              alt="product-pic"
              className="w-10 z-0"
            />
            <h4 className="w-36 text-clip font-secondaryFont">
              {detail.product.model}
            </h4>
            <div className="font-secondaryFont">
              ${detail.product.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="columns-2 flex justify-between py-1 items-center mx-1 ">
        <h3 className="text-xl font-secondaryFont">Subtotal</h3>
        <h3 className="text-xl  font-secondaryFont">
          ${cart ? subTotalPrice() : null}
        </h3>
      </div>
      <div className="columns-2 flex justify-between py-1 items-center mx-1">
        <h3 className="text-xl font-secondaryFont">Shipping</h3>
        <h3 className="text-sm font-secondaryFont">Calculated At Next Step</h3>
      </div>
      <div className="columns-2 flex justify-between py-1 items-center mx-1">
        <h2 className="text-3xl font-secondaryFont">Total</h2>
        <div className="text-2xl font-semibold font-secondaryFont">
          ${cart ? subTotalPrice() : null}
        </div>
      </div>
    </div>
  );
};

export default Summary;
