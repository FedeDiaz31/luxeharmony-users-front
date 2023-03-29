import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import { useSelector } from "react-redux";

import ShippingInfo from "../components/ShippingInfo";
import ShippingOptions from "../components/ShippingOptions";
import PaymentOptions from "../components/PaymentOptions";

const CheckOut = () => {
  // POSIBLE USO FUTURO
  const [order, setOrder] = useState(null);
  const [bill, setBill] = useState({});
  const [data, setData] = useState(null);
  const [process, setProcess] = useState("userInfo");

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
      url: `http://localhost:8000/orders`,
      data: createOrder(),
    });
  };

  const sendBill = async () => {
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "post",
      url: `http://localhost:8000/bills`,
      data: createBill(),
    });
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
    <div className="container mx-auto pt-24">
      <div className="border py-2 my-2">{`Cart summary  ${
        cart ? subTotalPrice() : null
      }`}</div>

      {process === "userInfo" ? (
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
    </div>
  );
};

export default CheckOut;
