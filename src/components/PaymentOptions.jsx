import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useState } from "react";

const PaymentOptions = ({
  handleProcess,
  handleStep,
  handleData,
  sendOrder,
  sendBill,
}) => {
  // REGEX EXPRESSIONS FOR FORM FIELDS VALIDATION
  const regexCardNumber = /5[1-5][0-9]{14}$/; // MASTERCARD
  const regexCvv = /^\D*\d{3}$/;
  const regexDate = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

  const [checked, setChecked] = useState(false);

  const [cardNumber, setCardNumber] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [date, setDate] = useState(null);

  const [cardNumberError, setCardNumberError] = useState(null);
  const [cvvError, setCvvError] = useState(null);
  const [dateError, setDateError] = useState(null);

  const [disabled, setDisabled] = useState(false);

  // FORM STYLES

  const classToAddAlert = [
    "bg-[#fcc2c2]",
    "border-2",
    "border[red]",
    "transition-all",
    "text-[black]",
  ];
  const spanClasses =
    "bg-[#F91C20] text-textPrimary text-xs mx-2 px-2 py-1 inline-block duration-300 whitespace-nowrap";
  const spanClassesDefault =
    "bg-[#fff] text-textPrimary text-xs mx-2 px-2 py-1 inline-block   duration-300 whitespace-nowrap";

  const handleCardNumber = (e) => {
    if (regexCardNumber.test(e.target.value)) {
      setCardNumber(e.target.value);
      setCardNumberError(false);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setCardNumber(e.target.value);
      setCardNumberError(true);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleDate = (e) => {
    if (regexDate.test(e.target.value)) {
      setDate(e.target.value);
      setDateError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setDate(e.target.value);
      setDateError(true);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleCvv = (e) => {
    if (regexCvv.test(e.target.value)) {
      setCvv(e.target.value);
      setCvvError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setCvv(e.target.value);
      setCvvError(true);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleBackButton = () => {
    handleProcess("shippingOptions");
    handleStep(1);
  };

  const checkData = () => {
    // CREATE AN OBJECT WITH THE ACTUAL FORM VALUES
    let data = {
      cardNumber: cardNumber,
      cvv: cvv,
      date: date,
    };

    let checkCardNumber = regexCardNumber.test(data.cardNumber);
    let checkCvv = regexCvv.test(data.cvv);
    let checkDate = regexDate.test(data.date);

    if (checkCardNumber && checkCvv && checkDate) {
      handleData(data);
      sendBill();
      sendOrder();
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleBackButton();
        }}
        className="border border-1 px-1 tablet:py-2 rounded font-bold tablet:px-2 m-2"
      >
        <ArrowBackIcon />
        BACK
      </button>
      <div className="mx-1">
        <h4 className="mb-2 text-[#737373]  text-xl font-terciaryFont m-2">
          Pay With Card
        </h4>

        <hr className="pb-3 opacity-30" />
        <div>
          <div className="w-full">
            <label className="text-xs inline" htmlFor="firstname">
              Card Number
            </label>
            <span
              className={cardNumberError ? spanClasses : spanClassesDefault}
            >
              Invalid entry.
            </span>

            <input
              onChange={(e) => handleCardNumber(e)}
              className="py-1 mt-1 pl-2 w-full"
              type="number"
              placeholder="Card number // mastercard"
            />
          </div>
          <div className="columns-2">
            <div className="w-full">
              <label className="text-xs inline" htmlFor="firstname">
                Expire Date
              </label>
              <span className={dateError ? spanClasses : spanClassesDefault}>
                Invalid entry.
              </span>
              <input
                className="py-1 mt-1 pl-2 w-full"
                onChange={(e) => handleDate(e)}
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-full">
              <label className="text-xs inline" htmlFor="firstname">
                CVV
              </label>
              <span className={cvvError ? spanClasses : spanClassesDefault}>
                Invalid entry.
              </span>
              <input
                className="py-1 mt-1 pl-2 w-full"
                onChange={(e) => handleCvv(e)}
                type="text"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
        <div className="flex py-4 items-center gap-2 w-full justify-center">
          <input
            className=""
            type="checkbox"
            onChange={(e) => setChecked(!checked)}
          />
          <h3>
            I am over age 18 agree to the following: Privacy, Terms &
            Conditions.
          </h3>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (checked) {
              checkData();
            }
          }}
          className="bg-bgTertiaryColor w-full tablet:py-2  text-textPrimary py-1 my-2 font-terciaryFont"
        >
          Complete Order
        </button>
        {disabled ? (
          <span className="text-[red]">Please check all the fields.</span>
        ) : null}
      </div>
    </>
  );
};

export default PaymentOptions;
