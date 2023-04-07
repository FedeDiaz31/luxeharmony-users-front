import React from "react";
import tick from "../assets/icons/tick.svg";

function StatusBar({ status }) {
  if (status === "Delivered") {
    return (
      <div className=" font-primaryFont">
        <div className="statusbar my-2 w-[360px] desktop:w-[30vw] border relative">
          <div className="w-[100%] h-[20px] bg-bgSecondaryColor">
            <img
              className="w-7 border absolute left-[-2%] top-[-3px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <img
              className="w-7 border absolute left-[48%] top-[-3px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <img
              className="w-7 border absolute left-[98%] top-[-3px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <span className="absolute top-[30px]">Processing</span>
            <span className="absolute top-[30px] left-[47.5%] ">Send</span>
            <span className="absolute top-[30px] left-[90%] ">Delivered</span>
          </div>
        </div>
      </div>
    );
  }
  if (status === "Send") {
    return (
      <div className=" font-primaryFont">
        <div className="statusbar my-2 w-[360px] desktop:w-[30vw] border relative">
          <div className="w-[50%] h-[20px] bg-bgSecondaryColor">
            <img
              className="w-7 border absolute left-[-2%] top-[-3px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <img
              className="w-7 border absolute left-[48%] top-[-3px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <span className="absolute top-[30px]">Processing</span>
            <span className="absolute top-[30px] left-[47.5%] ">Send</span>
            <span className="absolute top-[30px] left-[90%] ">Delivered</span>
          </div>
        </div>
      </div>
    );
  }
  if (status === "Processing") {
    return (
      <div className=" font-primaryFont">
        <div className="statusbar my-2 w-[360px] desktop:w-[30vw] border relative">
          <div className="w-[0%] h-[20px] bg-bgPrimaryColor">
            <img
              className="w-7 border absolute left-[-2%] top-[-3px] border-[white] rounded-full bg-bgPrimaryColor"
              src={tick}
              alt=""
            />
            <span className="absolute top-[30px]">Processing</span>
            <span className="absolute top-[30px] left-[47.5%] ">Send</span>
            <span className="absolute top-[30px] left-[90%] ">Delivered</span>
          </div>
        </div>
        
      </div>
    );
  }
}

export default StatusBar;
