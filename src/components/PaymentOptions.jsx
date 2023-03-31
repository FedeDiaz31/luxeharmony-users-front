import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useState } from "react";

const PaymentOptions = ({ handleProcess, handleData, sendOrder, sendBill }) => {
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
    "border-[red]",
    "border-1",
    "active:border-[red]",
    "bg-[red]",
    "text-textPrimary",
    "focus-visible:border-0",
  ];
  const spanClasses = "bg-[#F91C20] text-textPrimary text-sm px-2 block my-2";

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
        className="border border-1 px-1"
      >
        <ArrowBackIcon />
        BACK
      </button>
      <div>
        <h4>Pay With Card</h4>
        <div>
          <div className="w-full">
            <input
              onChange={(e) => handleCardNumber(e)}
              className="w-full"
              type="number"
              placeholder="Card number // mastercard"
            />
            {cardNumberError ? (
              <span className={spanClasses}>Error</span>
            ) : null}
          </div>
          <div className="columns-2">
            <div className="w-1/2">
              <input
                onChange={(e) => handleDate(e)}
                type="text"
                placeholder="MM/YY"
              />
              {dateError ? <span className={spanClasses}>Error</span> : null}
            </div>
            <div className="w-1/2">
              <input
                onChange={(e) => handleCvv(e)}
                type="text"
                placeholder="CVV"
              />
              {cvvError ? <span className={spanClasses}>Error</span> : null}
            </div>
          </div>
        </div>
        <div className="flex grid-cols-2 grid justify-between items-center py-2">
          <label htmlFor="chechboxPayment" className="w-10/12">
            I am over age 18 agree to the following: Privacy, Terms &
            Conditions.
          </label>
          <input
            className="block scale-150 w-2/12"
            type="checkbox"
            name="checkboxPayment"
            onChange={(e) => setChecked(!checked)}
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (checked) {
              checkData();
            }
          }}
          className="bg-bgTertiaryColor w-full text-textPrimary py-1 my-2"
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
