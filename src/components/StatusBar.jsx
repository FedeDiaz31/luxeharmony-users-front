import React from "react";
import tick from "../assets/icons/tick.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function StatusBar({ status,orderId }) {
  const user = useSelector((state) => state.user);



  if (status === "Delivered") {
    return (
      <div className=" font-primaryFont p-2 flex flex-col items-center">
         <h2 className=" text-3xl">Your order has been delivered</h2>
         <p className=" font-secondaryFont text-xs">Order id: {orderId}</p>
         <div className="flex flex-col w-full my-3">
            <p className=" font-secondaryFont font-semibold">{user.address.street}</p>
            <p className=" font-secondaryFont">{user.address.state} {user.address.zipCode} - {user.address.city} </p> 
            <p className=" font-secondaryFont font-black">{user.address.country}</p> 
         </div>
        <div className="statusbar my-2 w-[360px] desktop:w-[30vw]  relative">
          <div className="w-[100%] h-[10px] bg-bgTertiaryColor">
            <img
              className="w-7 border absolute left-[-2%] top-[-10px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <img
              className="w-7 border absolute left-[48%] top-[-10px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <img
              className="w-7 border absolute left-[98%] top-[-10px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <span className="absolute top-[30px] left-[-1.7%]">Processing</span>
            <span className="absolute top-[30px] left-[48%] ">Sent</span>
            <span className="absolute top-[30px] left-[93.5%] ">Delivered</span>
          </div>
        </div>
      </div>
    );
  }
  if (status === "Send") {
    return (
      <div className=" font-primaryFont p-2 flex flex-col items-center">
         <h2 className=" text-3xl">Your order has been sent</h2>
         <p className=" font-secondaryFont text-xs">Order id: {orderId}</p>
         <div className="flex flex-col w-full my-3">
            <p className=" font-secondaryFont font-semibold">{user.address.street}</p>
            <p className=" font-secondaryFont">{user.address.state} {user.address.zipCode} - {user.address.city} </p> 
            <p className=" font-secondaryFont font-black">{user.address.country}</p> 
         </div>
        <div className="statusbar my-2 w-[360px] desktop:w-[30vw]  relative">
        <div className="w-[50%] h-[10px] bg-bgTertiaryColor">
            <img
              className="w-7 absolute left-[-2%] top-[-10px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <img
              className="w-7 absolute left-[48%] top-[-10px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <span className="absolute top-[30px] left-[-1.7%]">Processing</span>
            <span className="absolute top-[30px] left-[48%] ">Sent</span>
            <span className="absolute top-[30px] left-[93.5%] ">Delivered</span>
          </div>
        </div>
      </div>
    );
  }
  if (status === "Processing") {
    return (
      <div className=" font-primaryFont p-2 flex flex-col items-center">
         <h2 className=" text-3xl">We are processing your order</h2>
         <p className=" font-secondaryFont text-xs">Order id: {orderId}</p>
         <div className="flex flex-col w-full my-3">
            <p className=" font-secondaryFont font-semibold">{user.address.street}</p>
            <p className=" font-secondaryFont">{user.address.state} {user.address.zipCode} - {user.address.city} </p> 
            <p className=" font-secondaryFont font-black">{user.address.country}</p> 
         </div>
        <div className="statusbar my-2 w-[360px] desktop:w-[30vw] border relative">
        <div className="w-[0%] h-[10px] bg-bgTertiaryColor">
            <img
              className="w-7 border absolute left-[-2%] top-[-10px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
  
            <span className="absolute top-[30px] left-[-1.7%]">Processing</span>
            <span className="absolute top-[30px] left-[48%] ">Sent</span>
            <span className="absolute top-[30px] left-[91.5%] ">Delivered</span>
          </div>
        </div>
        
      </div>
    );
  }
}

export default StatusBar;
