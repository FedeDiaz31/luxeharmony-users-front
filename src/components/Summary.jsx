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
      className="p-4 my-2 border border-bgFourthColor rounded laptop:m-0 block transition-opacity laptop:w-2/5 laptop:h-full justifi-between "
    >
      <h2 className="text-[#737373] mb-2 hidden laptop:block text-xl font-terciaryFont ">
        Summary
      </h2>
      <div className=" columns-1 flex-col">
        {cart.map((detail) => (
          <div className="flex justify-around  w-full py-2 border-b  border-b-bgFourthColor my-2 items-center">
            <img
              src={
                detail.product.image[0].includes("http")
                  ? detail.product.image[0]
                  : `${url}/img/products/${detail.product.image[0]}`
              }
              alt="product-pic"
              className="w-14 z-0 object-contain"
            />
            <h4 className="w-36 truncate font-secondaryFont">
              {detail.product.model}
            </h4>
            <div className="font-secondaryFont">
              ${detail.product.price.toFixed(2)}
            </div>
            <div className="font-secondaryFont">{detail.quantity}u</div>
          </div>
        ))}
      </div>
      <div className="border-b py-3 border-b-bgFourthColor">
        <div className="columns-2 flex justify-between py-1 items-center mx-1 ">
          <h3 className="text-xl font-light ">Subtotal</h3>
          <h3 className="text-xl  font-secondaryFont">
            ${cart ? subTotalPrice() : null}
          </h3>
        </div>
        <div className="columns-2 flex justify-between py-1 items-center mx-1">
          <h3 className="text-xl font-light">Shipping</h3>
          <h3 className="text-sm font-secondaryFont">
            Calculated at next step...
          </h3>
        </div>
      </div>
      <div className="columns-2 flex justify-between py-1 mt-3 items-center mx-1">
        <h2 className="text-[#737373] text-3xl font-base">Total</h2>
        <div className="text-2xl font-semibold ">
          ${cart ? subTotalPrice() : null}
        </div>
      </div>
    </div>
  );
};

export default Summary;
