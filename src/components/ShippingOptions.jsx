import React from "react";

const ShippingOptions = ({ handleProcess }) => {
  //
  const handleBackButton = () => {
    handleProcess("shippingInfo");
  };

  const handlePaymentButton = () => {
    handleProcess("paymentOptions");
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleBackButton();
        }}
      >
        {" "}
        BACK
      </button>
      <h2>Shipping Options</h2>
      <div className=" bg-[#4545ff] relative w-80 py-2 pl-1 mx-1 rounded hover:cursor-pointer">
        <input type="checkbox" name="shipping" checked />
        <label htmlFor="shipping" className="p-2 text-textPrimary">
          Free Ground Shipping (4 business days)
          <span className="relative text-xl left-52 top-1">$0.00</span>
        </label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePaymentButton();
        }}
        className="bg-bgTertiaryColor w-full text-textPrimary py-1 my-2"
      >
        Continue to Payment Options
      </button>
    </>
  );
};

export default ShippingOptions;
