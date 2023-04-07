import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StatusBar from "./StatusBar";

function OrderProduct({
  model,
  price,
  status,
  payment,
  image,
  slug,
  description,
}) {

  const params = useParams();
  const orderId = params.id;
  const user = useSelector((state) => state.user);


  return (
    <div className="flex mt-2 desktop:mt-10  border-b-[1px] ">
      <div className="flex">
        <img
          src={image}
          className="w-[100px] h-[200px] desktop:w-20 desktop:h-full object-cover mr-3 overflow-visible"
          alt=""
        />
        <div className="flex flex-col">
          <Link to={"/product/" + slug} className=" font-primaryFont text-lg">
            {model}
          </Link>
          <p className=" text-xs desktop:w-[30%] h-[29%] mb-3 overflow-clip">
            {description}
          </p>
          <span className=" font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
