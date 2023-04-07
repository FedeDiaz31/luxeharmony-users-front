import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function OrderProduct({
  model,
  price,
  status,
  payment,
  image,
  slug,
  description,
}) {
  const [statusData, setStatusData] = useState(null);
  const params = useParams();
  const orderId = params.id;
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getStatus = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/status/${status}`,
      });
      setStatusData(response.data);
    };
    getStatus();
  }, []);
  return (
    <div className="flex mt-2 desktop:mt-10  border-b-[1px] ">
      <div className="flex">
        <img
          src={image}
          className="w-24 desktop:w-20 h-full object-cover mr-3 overflow-visible"
          alt=""
        />
        <div className="flex flex-col">
          <Link to={"/product/" + slug} className=" font-primaryFont text-lg">
            {model}
          </Link>
          <p className=" text-xs w-[30%] h-[29%] mb-3 overflow-clip">
            {description}
          </p>
          <span className=" font-semibold">${price}</span>
        </div>
        <div className="">
          <h3 className=" font-primaryFont">Status</h3>
          <p className=" font-primaryFont">{status}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
