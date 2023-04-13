import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
/* import { addShippinOption } from "../redux/cartReducer"; */

const ShippingOptions = ({ handleProcess, handleStep }) => {
  //
  const dispatch = useDispatch();
  const handleBackButton = () => {
    handleProcess("shippingInfo");
    handleStep(0);
  };

  const handlePaymentButton = () => {
    handleProcess("paymentOptions");
    handleStep(2);
  };
  return (
    <div className="mb-3">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleBackButton();
        }}
        className="border border-1 px-1 tablet:py-2 rounded font-bold tablet:px-3 m-2"
      >
        <ArrowBackIcon />
        BACK
      </button>
      <h2 className="mb-2 text-[#737373]  text-xl font-terciaryFont m-2">
        Shipping Options
      </h2>
      <hr className="pb-3 opacity-30" />
      <div className="border-[#1d9219c4] border-2 relative py-3 rounded cursor-pointer my-3 shadow hover:shadow-lg transition-all">
        <label className="p-2 text-textSecondary cursor-pointer select-none labelCheckbox w-full flex items-center columns-2 mt-0">
          <input
            /* onChange={dispatch(addShippinOption("free"))} */
            type="radio"
            checked
            name="radio"
            className="scale-150 h-full bg-bgTertiaryColor ml-8"
          />
          <div className="ml-8">
            <h3 className="inline-block text-xl font-primaryFont text-textSecondary drop-shadow-lg w-5/6">
              Free Ground Shipping
            </h3>
            <h5 className="font-light">
              Promotion: receive your order within 7 business days
            </h5>
          </div>
        </label>
      </div>
      {/*       <div className=" bg-[#8d8d8dae] relative py-3 rounded cursor-pointer my-3 shadow hover:shadow-lg transition-all">
        <label className="p-2 text-textPrimary cursor-pointer select-none labelCheckbox w-full flex items-center  columns-2 mt-0">
          <input
            onChange={dispatch(addShippinOption("fast"))}
            type="radio"
            name="radio"
            className="scale-150 h-full  bg-bgTertiaryColor ml-8"
          />
          <div className="ml-8">
            <h3 className="inline-block text-xl font-primaryFont text-textPrimary drop-shadow-lg w-5/6">
              Fast Shipping ( + U$D 30)
            </h3>
            <h5>Receive your order within 3 bussines days</h5>
          </div>
        </label>
      </div>
      <div className=" bg-[#ceca4dd8] relative py-3 rounded cursor-pointer my-3 shadow hover:shadow-lg transition-all">
        <label className="p-2 text-textPrimary cursor-pointer select-none labelCheckbox w-full flex items-center  columns-2 mt-0">
          <input
            onChange={dispatch(addShippinOption("inmediate"))}
            type="radio"
            name="radio"
            className="scale-150 h-full bg-bgTertiaryColor ml-8"
          />
          <div className="ml-8">
            <h3 className="inline-block text-xl font-primaryFont text-textPrimary drop-shadow-lg w-5/6">
              Inmediate delivery ( + U$D 100)
            </h3>
            <h5>Receive your order in less than 24 hours</h5>
          </div>
        </label>
      </div>
 */}
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePaymentButton();
          window.scrollTo(0, 0);
        }}
        className="bg-bgTertiaryColor w-full tablet:py-2  text-textPrimary py-1 my-2 m font-terciaryFont"
      >
        Continue to Payment Options
      </button>
    </div>
  );
};

export default ShippingOptions;
