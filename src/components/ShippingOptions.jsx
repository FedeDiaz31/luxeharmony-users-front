import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
        className="border border-1 px-1 tablet:py-2 rounded font-bold tablet:px-2"
      >
        <ArrowBackIcon />
        BACK
      </button>
      <h2>Shipping Options</h2>
      <div className="shadow-sm ' bg-[#9f9f9fc4] relative w-80 py-2 pl-1 mx-1 rounded hover:cursor-pointer my-3">
        <label className="p-2 text-textPrimary hover:cursor-pointer select-none labelCheckbox">
          <input type="radio" name="radio" className="scale-150 m-2" />
          Free Ground Shipping (4 business days)
          <span className="relative text-xl left-52 top-1">$0.00</span>
        </label>
      </div>
      <div className="shadow-sm ' bg-[#6f6f6fc7] relative w-80 py-2 pl-1 mx-1 rounded hover:cursor-pointer my-3">
        <label className="p-2 text-textPrimary hover:cursor-pointer select-none labelCheckbox">
          <input type="radio" name="radio" className="scale-150 m-2" />
          Free Ground Shipping (4 business days)
          <span className="relative text-xl left-52 top-1">$0.00</span>
        </label>
      </div>
      <div className="shadow-sm ' bg-[#9e9f3fd8] relative w-80 py-2 pl-1 mx-1 rounded hover:cursor-pointer my-3">
        <label className="p-2 text-textPrimary hover:cursor-pointer select-none ">
          <input
            type="radio"
            name="radio"
            className="scale-150 m-2 bg-[red] labelCheckbox"
          />
          Free Ground Shipping (4 business days)
          <span className="relative text-xl left-52 top-1">$0.00</span>
        </label>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          handlePaymentButton();
        }}
        className="bg-bgTertiaryColor w-full tablet:py-2  text-textPrimary py-1 my-2"
      >
        Continue to Payment Options
      </button>
    </>
  );
};

export default ShippingOptions;
