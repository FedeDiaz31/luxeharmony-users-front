import React from "react";
import { useState, useEffect } from "react";
import { Navigate, redirect } from "react-router-dom";

import axios from "axios";

import { useSelector } from "react-redux";

import ShippingInfo from "../components/ShippingInfo";
import ShippingOptions from "../components/ShippingOptions";
import PaymentOptions from "../components/PaymentOptions";
const url = process.env.REACT_APP_API_URL;

const CheckOut = () => {
  // POSIBLE USO FUTURO
  const [order, setOrder] = useState(null);
  const [bill, setBill] = useState({});
  const [data, setData] = useState(null);
  const [process, setProcess] = useState("shippingInfo");

  const [orderIsSend, setOrderIsSend] = useState(false);

  const user = useSelector((state) => state.user);

  const userData = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };

  const cart = useSelector((state) => state.cart);

  const sendOrder = async () => {
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/orders`,
      data: createOrder(),
    });
  };

  const sendBill = async () => {
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/bills`,
      data: createBill(),
    });
    setOrderIsSend(true);
  };

  //CREATE ORDER - THIS CREATE THE ORDER ONCE THE DATA WAS VALIDATE

  const createOrder = () => {
    return {
      user: user.id,
      products: cart,
      totalPrice: subTotalPrice(),
    };
  };

  //CREATE BILL - THIS CREATE THE ORDER ONCE THE DATA WAS VALIDATE

  const createBill = () => {
    let userId = user.id;

    return {
      userId: userId,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      products: cart,
      details: [{ not: "details" }],
      totalPrice: subTotalPrice(),
      streetAddres: data.streetAddres,
      reference: data.reference,
      city: data.city,
      country: data.country,
      province: data.province,
    };
  };

  const handleProcess = (string) => {
    setProcess((prevProcess) => string);
  };

  const handleData = (data) => {
    setData((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });
  };

  const handleToggleSummary = (e) => {
    document.getElementById("viewSummary").classList.toggle("hidden");
  };

  function subTotalPrice() {
    const prices = cart.map((product) => product.price);
    let totalPrice = 0;
    for (let price of prices) {
      totalPrice += price;
    }
    return totalPrice.toFixed(2);
  }
  document.title = ` Chekout | LuxeHarmony `;

  return (
    <div className="container mx-auto pt-24 laptop:flex  laptop:columns-2 ">
      <div
        className="flex justify-between columns-2 p-2  laptop:hidden"
        onClick={(e) => handleToggleSummary()}
      >
        <p className="w-1/2 text-[blue] underline">Toggle Cart Summary</p>
        <p>${cart ? subTotalPrice() : null}</p>
      </div>
      <div
        id="viewSummary"
        className="py-2 my-2  laptop:m-0 block transition-opacity laptop:w-1/2 laptop:h-full justifi-between "
      >
        <h2 className="mb-2 hidden laptop:block text-xl font-terciaryFont ">
          Summary
        </h2>
        <div className=" columns-1 flex-col">
          {cart.map((product) => (
            <div className="flex justify-around  w-full py-2 border-b  border-l-0 border-r-0">
              <img
                src={
                  product.image[0].includes("http")
                    ? product.image[0]
                    : `${url}/img/products/${product.image[0]}`
                }
                alt="product-pic"
                className="w-10 z-0"
              />
              <h4 className="w-36 text-clip font-secondaryFont">
                {product.model}
              </h4>
              <div className="font-secondaryFont">
                ${product.price.toFixed(2)}
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
          <h3 className="text-sm font-secondaryFont">
            Calculated At Next Step
          </h3>
        </div>
        <div className="columns-2 flex justify-between py-1 items-center mx-1">
          <h2 className="text-3xl font-secondaryFont">Total</h2>
          <div className="text-2xl font-semibold font-secondaryFont">
            ${cart ? subTotalPrice() : null}
          </div>
        </div>
      </div>
      <div className="laptop:order-first laptop:w-1/2">
        {process === "shippingInfo" ? (
          <div className="columns-1">
            <div>
              <ShippingInfo
                user={userData}
                handleProcess={handleProcess}
                handleData={handleData}
              />
            </div>
          </div>
        ) : null}
        {process === "shippingOptions" ? (
          <div className="columns-1">
            <ShippingOptions handleProcess={handleProcess} />
          </div>
        ) : null}
        {process === "paymentOptions" ? (
          <div className="columns-1">
            <PaymentOptions
              handleProcess={handleProcess}
              handleData={handleData}
              sendBill={sendBill}
              sendOrder={sendOrder}
            />
          </div>
        ) : null}
        {orderIsSend ? <Navigate to="/" replace={true} /> : null}
      </div>
    </div>
  );
};

export default CheckOut;
