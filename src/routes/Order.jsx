import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderProduct from "../components/OrderProduct";
import StatusBar from "../components/StatusBar";
import chevronBack from "../assets/img/chevronBack.svg";
import { useNavigate } from "react-router-dom";

function Order() {
  const [order, setOrder] = useState(null);
  const params = useParams();
  const orderId = params.id;
  const user = useSelector((state) => state.user);
  const [statusData, setStatusData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/orders/${orderId}`,
      });
      setOrder(response.data);
    };
    getOrder();
  }, []);

  return (
    <>
      {order && (
        <div className="m-auto">
          <div className="w-full flex items-center gap-10 bg-bgSecondaryColor pt-[100px] pl-10 tablet:px-40 pb-10">
            <img
              className="chevron-back-category w-6 h-6 pt-1 cursor-pointer"
              onClick={() => navigate(-1)}
              src={chevronBack}
              alt=""
            />
            <div>
              <h3 className="text-textPrimary font-light text-3xl">
                Order details
              </h3>
              <h4 className="text-textPrimary font-light">ID: {order._id}</h4>
            </div>
          </div>
          <div className="pt-10 mx-8 tablet:mx-20">
            <div className="mb-20 flex mx-0 tablet:mx-20">
              <div
                className={`h-[9px] w-full relative ${
                  order.status.name === "Sent" ||
                  order.status.name === "Recived"
                    ? "bg-bgTertiaryColor"
                    : "bg-bgFourthColor"
                }  rounded-l`}
              >
                <div className="absolute left-[-20px] p-1 top-4 rounded-full">
                  <img
                    className="w-8"
                    src="https://icon-library.com/images/icon-process/icon-process-25.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute right-[-10px] p-1 rounded-full top-4 ">
                  <img
                    className="w-8"
                    src=" https://cdn.onlinewebfonts.com/svg/img_307755.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className={`h-[9px] w-full relative ${
                  order.status.name === "Recived"
                    ? "bg-bgTertiaryColor"
                    : "bg-bgSecondaryColor"
                }  rounded-r  `}
              >
                <div className="absolute right-[-10px] top-4  rounded-full">
                  <img
                    className="w-8"
                    src="https://cdn-icons-png.flaticon.com/512/665/665939.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h3> Products: </h3>
            <div className="py-5 mt-2 border-t border-bgFourthColor gap-5 grid w-full justify-center tablet:flex">
              {order.products.map((detail, i) => (
                <OrderProduct key={i} detail={detail} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Order;
