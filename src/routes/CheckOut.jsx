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
  const [process, setProcess] = useState("shippingInfo");

  const user = useSelector((state) => state.user);

  const userData = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };

  const cart = useSelector((state) => state.cart);
  console.log(cart);

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

  const handleToggleSummary = (e) => {
    console.log("summary");
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
    <div className="container mx-auto pt-24">
      <div
        className="flex justify-between columns-2 "
        onClick={(e) => handleToggleSummary()}
      >
        <p className="w-1/2">Toggle Cart Summary</p>
        <p>${cart ? subTotalPrice() : null}</p>
      </div>
      <div id="viewSummary" className="py-2 my-2  transition-opacity">
        <div className=" columns-1 flex-col">
          {cart.map((product) => (
            <div className="flex justify-around  w-full py-2 border-b  border-l-0 border-r-0">
              <img
                src={
                  product.image[0].includes("http")
                    ? product.image[0]
                    : `${process.env.REACT_APP_API_URL}/img/products/${product.image[0]}`
                }
                alt="product-pic"
                className="w-10 z-0"
              />{" "}
              <h4 className="w-36 text-clip">{product.model}</h4>
              <div className="font-bold">${product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="columns-2 flex justify-between py-1 items-center mx-1">
          <div className="text-xl">Subtotal</div>
          <div className="text-xl font-bold">
            ${cart ? subTotalPrice() : null}
          </div>
        </div>
        <div className="columns-2 flex justify-between py-1 items-center mx-1">
          <h3 className="text-xl">Shipping</h3>
          <h3 className="text-sm">Calculated At Next Step</h3>
        </div>
        <div className="columns-2 flex justify-between py-1 items-center mx-1">
          <h2 className="text-3xl font-secondaryFont">Total</h2>
          <div className="text-3xl font-bold">
            ${cart ? subTotalPrice() : null}
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default CheckOut;
