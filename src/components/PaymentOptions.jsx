import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const PaymentOptions = ({ handleProcess, handleData, sendOrder, sendBill }) => {
  const [checked, setChecked] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvv] = useState("");
  const [date, setDate] = useState("");

  const handleBackButton = () => {
    handleProcess("shippingOptions");
  };

  const checkData = () => {
    // CREATE AN OBJECT WITH THE ACTUAL FORM VALUES
    let data = {
      cardNumber: cardNumber,
      cvc: cvc,
      date: date,
    };

    // REGEX EXPRESSIONS FOR FORM FIELDS VALIDATION
    const regexCardNumber = /5[1-5][0-9]{14}$/; // MASTERCARD
    const regexCvv = /^\D*\d{3}$/;
    const regexDate = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

    let checkCardNumber = regexCardNumber.test(data.cardNumber);
    let checkCvv = regexCvv.test(data.cvc);
    let checkDate = regexDate.test(data.date);

    if (checkCardNumber && checkCvv && checkDate) {
      handleData(data);
      sendBill();
      sendOrder();
    }
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
      <div>
        <h4>Pay With Card</h4>
        <div>
          <input
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-2/3"
            type="number"
            placeholder="Card number // mastercard"
          />
          <input
            onChange={(e) => setDate(e.target.value)}
            className="w-1/6"
            type="text"
            placeholder="MM/YY"
          />
          <input
            onChange={(e) => setCvv(e.target.value)}
            className="w-1/6"
            type="text"
            placeholder="CVC"
          />
        </div>
        <div className="flex columns-2 justify-between items-center py-2">
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
              return <Navigate to="/" replace={true} />;
            }
          }}
          className="bg-bgTertiaryColor w-full text-textPrimary py-1 my-2"
        >
          Complete Order
        </button>
      </div>
    </>
  );
};

export default PaymentOptions;
