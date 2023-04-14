import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const cart = useSelector((state) => state.cart);

  function subTotalPrice() {
    const prices = cart.map((detail) => {
      return detail.fixedPrice * detail.quantity;
    });
    let totalPrice = 0;
    for (let price of prices) {
      totalPrice += price;
    }
    return totalPrice.toFixed(2);
  }

  return (
    <div
      id="viewSummary"
      className="p-4 my-10 mx-2 border hidden border-bgFourthColor rounded laptop:mb-10 laptop:block transition-opacity laptop:w-2/5 laptop:h-full justifi-between "
    >
      <h2 className="text-[#737373] mb-2 hidden laptop:block text-xl font-terciaryFont ">
        Summary
      </h2>
      <div className=" columns-1 flex-col">
        {cart.map((detail) => (
          <div className="flex justify-between w-full py-3 border-b  border-b-bgFourthColor my-2 items-center">
            <img
              src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${detail.product.image[0]}`}
              alt="product-pic"
              className="w-20 h-20 z-0 object-contain"
            />
            <div className="grid">
              <div>
                <h4 className="truncate w-[200px] text-end font-light font-secondaryFont">
                  {detail.product.model}
                </h4>
              </div>
              <div className="text-lg  justify-end font-primaryFont flex gap-3">
                <h3>U$D {detail.product.price.toFixed(2)}</h3>
                <h3 className="text-[#737373]">{detail.quantity}u</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b py-3 border-b-bgFourthColor">
        <div className="columns-2 flex justify-between py-1 items-center mx-1 ">
          <h3 className="text-xl font-primaryFont">Subtotal</h3>
          <h3 className="text-xl font-primaryFont">
            U$D {cart ? subTotalPrice() : null}
          </h3>
        </div>
        <div className="columns-2 flex justify-between py-1 items-center mx-1">
          <h3 className="text-xl font-primaryFont">Shipping</h3>
          <h3 className="text-xl text-[#737373] font-primaryFont">FREE</h3>
        </div>
      </div>
      <div className="columns-2 flex justify-between py-1 mt-3 items-center mx-1">
        <h2 className="text-[#737373] text-3xl font-primaryFont">Total</h2>
        <div className="text-3xl font-primaryFont">
          U$D {cart ? subTotalPrice() : null}
        </div>
      </div>
    </div>
  );
};

export default Summary;
