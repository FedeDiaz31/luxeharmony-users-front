import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

function Orders() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(response.data.orders);
    };
    getOrder();
  }, []);

  return (
    <>
      <div className="bg-bgSecondaryColor pt-[100px] pl-10 tablet:px-40 pb-10">
        <h3 className="text-textPrimary font-light text-3xl">Your Orders</h3>
      </div>
      {orders ? (
        <div className="px-5 tablet:px-20 laptop:px-40 py-8 grid gap-10">
          {orders.map((order, i) => {
            return (
              <div
                key={i}
                className="bg-bgPrimaryColor rounded p-5 border border-bgFourthColor shadow-md"
              >
                <div className="tablet:flex w-full justify-between mb-5">
                  <h3 className="font-light w-full text-sm tablet:text-lg">
                    Order ID: {order._id}
                  </h3>
                  <h3 className="font-light  text-sm tablet:text-lg">
                    {format(new Date(order.createdAt), "dd'/'M'/'yy")}
                  </h3>
                </div>
                <hr className="opacity-20" />
                <div className="ml-0 tablet:ml-10 mb-16 mt-5">
                  <h3 className="font-light  text-sm tablet:text-lg">
                    Products:
                  </h3>
                  {order.products.map((product, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-1 tablet:gap-3"
                      >
                        <h3 className=" text-sm tablet:text-lg truncate">
                          {product.product.model}
                        </h3>
                        <div className="hidden mobilXS:flex items-center gap-3">
                          <h3 className="text-sm tablet:text-lg">⦾</h3>
                          <h3 className="text-sm tablet:text-lg font-light">
                            U$D {product.product.price.toFixed(2)}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <hr className="opacity-20" />

                <div className="grid grid-cols-1 tablet:flex tablet:flex-row justify-between w-full">
                  <Link
                    className="bg-bgTertiaryColor px-3 h-10 mt-4 flex items-center text-textPrimary "
                    to={`/orders/${order._id}`}
                  >
                    View order
                  </Link>

                  <div className="flex flex-col w-full items-end">
                    <div className="flex gap-3 mt-2 items-center">
                      <h3 className="font-light  text-sm tablet:text-lg">
                        Total Price:
                      </h3>
                      <h3 className="font-normal text-sm tablet:text-lg">
                        U$D {order.totalPrice.toFixed(2)}
                      </h3>
                    </div>
                    <div className="flex gap-2 items-center justify-end">
                      <h3 className="font-light  text-sm tablet:text-lg">
                        Status:
                      </h3>
                      <h3 className="font-normal text-sm tablet:text-lg">
                        {order.status.name}
                      </h3>
                      <div className="flex">
                        {order.status.name === "Processing" && (
                          <img
                            className="w-4 mt-1"
                            src="https://icon-library.com/images/icon-process/icon-process-25.jpg"
                            alt=""
                          />
                        )}
                        {order.status.name === "Sent" && (
                          <img
                            className="w-4 mt-1"
                            src=" https://cdn.onlinewebfonts.com/svg/img_307755.png"
                            alt=""
                          />
                        )}
                        {order.status.name === "Received" && (
                          <img
                            className="w-4"
                            src="https://cdn-icons-png.flaticon.com/512/665/665939.png"
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full grid place-content-center h-[100vh]">
          <Spinner />
        </div>
      )}
    </>
  );
}

export default Orders;
