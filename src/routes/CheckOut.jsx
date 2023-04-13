import { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Importar los componentes de animación de framer-motion

import Stepper from "../components/Stepper";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import ShippingInfo from "../components/ShippingInfo";
import ShippingOptions from "../components/ShippingOptions";
import PaymentOptions from "../components/PaymentOptions";
import Summary from "../components/Summary";
import { removeEveryProducts } from "../redux/cartReducer";

const URL = process.env.REACT_APP_API_URL;

const CheckOut = () => {
  const [data, setData] = useState(null);

  const [process, setProcess] = useState("shippingInfo");
  const [step, setStep] = useState(0);

  const [orderIsSend, setOrderIsSend] = useState(false);

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const userData = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    address: user.address,
    phone: user.phone,
  };

  const sendOrder = async () => {
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "post",
      url: `${URL}/orders`,
      data: createOrder(),
    });
    dispatch(removeEveryProducts());
  };

  const sendBill = async () => {
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "post",
      url: `${URL}/bills`,
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

  const handleStep = (num) => {
    setStep((prevProcess) => num);
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
    const prices = cart.map((detail) => detail.product.price);
    let totalPrice = 0;
    for (let price of prices) {
      totalPrice += price;
    }
    return totalPrice.toFixed(2);
  }

  document.title = ` Chekout | LuxeHarmony `;

  return (
    <div className="container mx-auto pt-24 justify-around  ">
      <Stepper step={step} />

      <div className="laptop:flex justify-around laptop:columns-2">
        <div
          className="mx-3 flex justify-between columns-2 p-2 hover:cursor-help laptop:hidden"
          onClick={(e) => handleToggleSummary()}
        >
          <p className="w-1/2 underline">Expand Cart</p>
          <p>U$D {cart ? subTotalPrice() : null}</p>
        </div>
        <Summary />
        <div className="laptop:order-first laptop:w-1/2 mx-5 tablet:mx-10">
          <AnimatePresence>
            <motion.div
              key={process} // Especificar una clave única para que framer-motion pueda gestionar la animación correctamente
              initial={{ opacity: 0 }} // Configurar las animaciones de entrada y salida
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Configurar la duración de la animación
            >
              {process === "shippingInfo" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.3 }}
                  className="columns-1"
                >
                  <div className="columns-1">
                    <div>
                      <ShippingInfo
                        user={userData}
                        handleProcess={handleProcess}
                        handleStep={handleStep}
                        handleData={handleData}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : null}
              {process === "shippingOptions" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{ duration: 0.3 }}
                  className="columns-1"
                >
                  <div className="columns-1">
                    <ShippingOptions
                      handleProcess={handleProcess}
                      handleStep={handleStep}
                    />
                  </div>
                </motion.div>
              ) : null}
              {process === "paymentOptions" ? (
                <div className="columns-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, display: "none" }}
                    transition={{ duration: 0.3 }}
                    className="columns-1"
                  >
                    <PaymentOptions
                      handleProcess={handleProcess}
                      handleStep={handleStep}
                      handleData={handleData}
                      sendBill={sendBill}
                      sendOrder={sendOrder}
                    />
                  </motion.div>
                </div>
              ) : null}
              {orderIsSend ? <Navigate to="/pdf" replace={true} /> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
