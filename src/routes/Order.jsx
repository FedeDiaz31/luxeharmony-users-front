import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderProduct from "../components/OrderProduct";
import StatusBar from "../components/StatusBar";

function Order() {
  const [order, setOrder] = useState(null);
  const params = useParams();
  const orderId = params.id;
  const user = useSelector((state) => state.user);
  const [statusData, setStatusData] = useState(null);

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

  useEffect(() => {
    const getStatus = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/status/${order.status}`,
      });
      setStatusData(response.data);
    };
    getStatus();
  }, [order]);

  return (
    <div className="m-auto">
      <div className="bg-bgSecondaryColor w-full h-[170px] pt-[100px] pl-10 tablet:px-40 pb-10">
        <div className="w-[70vw]">
          <h3 className="text-textPrimary font-light text-3xl">
            Order details
          </h3>
        </div>
      </div>
      <div className="pt-10 mx-20">
        <div className="flex flex-col items-center justify-center w-full pb-10">
          {statusData && (
            <StatusBar
              created={statusData.createdAt}
              orderId={statusData._id}
              status={statusData.name}
            ></StatusBar>
          )}
        </div>
        <div className="my-5 border-t flex flex-col">
          {order ? (
            order.products.map((product) => (
              <OrderProduct
                key={product.product._id}
                description={product.product.description}
                slug={product.product.slug}
                model={product.product.model}
                image={product.product.image[0]}
                status={order.status}
                price={product.product.price}
              />
            ))
          ) : (
            <h1></h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Order;
