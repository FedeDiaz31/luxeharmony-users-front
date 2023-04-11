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
    <div className="flex mt-2 px-10 py-4 border-b-[1px]">
      <div className="flex">
        <img
          src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${image}`}
          className="w-[100px] h-[200px]  object-cover mr-3 overflow-visible"
          alt=""
        />
        <div className="flex flex-col">
          <Link
            to={"/product/" + slug}
            className=" font-primaryFont text-lg hover:text-bgTertiaryColor"
          >
            {model}
          </Link>
          <div>
            <p className=" text-xs text-justify w-[90%]  desktop:w-[30%] mb-3 ">
              {description}
            </p>
          </div>
          <span className="font-light text-lg">U$D {price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
