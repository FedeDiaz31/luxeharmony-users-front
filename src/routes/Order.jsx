import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OrderProduct from "../components/OrderProduct";
<<<<<<< Updated upstream
=======
import StatusBar from "../components/StatusBar";
>>>>>>> Stashed changes

function Order() {
  const [order, setOrder] = useState(null);
  const params = useParams();
  const orderId = params.id;
  const user = useSelector((state) => state.user);
<<<<<<< Updated upstream
=======
  const [statusData, setStatusData] = useState(null);
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
  return (
    <div className="w-[100vw] m-auto ">
      <div className="bg-bgSecondaryColor w-full h-[170px] pt-[100px] pl-10 tablet:px-40 pb-10">
        <div className="w-[70vw]">
          <h3 className="text-textPrimary font-light text-3xl">
            Order details
          </h3>
        </div>
        <div className="pt-10">
<<<<<<< Updated upstream
=======
          <div className=" flex flex-col items-center justify-center w-full h-[170px] border-b-[1px] pb-3">
            <h2 className=" font-primaryFont text-2xl mb-2">Status</h2>
            {statusData && <StatusBar status={statusData.name}></StatusBar>}
          </div>
>>>>>>> Stashed changes
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
