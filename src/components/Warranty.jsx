import React from "react";

function Warranty() {
  return (
    <div className="warranty w-[70vw] flex m-auto">
      <div className="w-[25vw] h-[30vh] bg-bgSecondaryColor my-5 mr-5 text-[#fff]">
        <img
          src="https://images.ctfassets.net/m8onsx4mm13s/4qm6G6cNU4mSAb566UuIJ1/5dfd9c110728306b565b59671a95cc83/In-Time-For-Holidays__2_.png"
          alt="a truck representing free shipping"
        />
        <h3 className="px-5">FREE SHIPPING</h3>
        <p className="px-5"> On US online orders over $50.</p>
      </div>
      <div className="w-[25vw] h-[30vh] bg-bgSecondaryColor my-5 mr-5 text-[#fff] ">
        <img
          src="https://images.ctfassets.net/m8onsx4mm13s/6IvzKzqfqdVRKgZHjBqFIk/de259c13ae15133900b72c494b76c694/Lifetime-Warranty__2_.png"
          alt="a shield representing lifetime warranty"
        />
        <h3 className="px-5">LIFETIME WARRANTY</h3>
        <p className="px-5">
          Free, limited warranty on material and workmanship.
        </p>
      </div>
      <div className="w-[25vw] h-[30vh] bg-bgSecondaryColor my-5 mr-5 text-[#fff]">
        <img
          src="https://images.ctfassets.net/m8onsx4mm13s/24dB0X9zp0nHGgGooFJUGn/2d7bed365abe0a24ffa79eb21b4e1f3a/Financing-Available__2_.png"
          alt=""
        />
        <h3 className="px-5">FINANCING AVAILABLE</h3>
        <p className="px-5">Options available through Klarna at chekout</p>
      </div>
    </div>
  );
}

export default Warranty;
