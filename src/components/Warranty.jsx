import React from "react";

function Warranty() {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 w-full gap-3 px-6">
      <div className="px-5 pb-5 bg-bgSecondaryColor my-5 text-[#fff]">
        <img
          src="https://images.ctfassets.net/m8onsx4mm13s/4qm6G6cNU4mSAb566UuIJ1/5dfd9c110728306b565b59671a95cc83/In-Time-For-Holidays__2_.png"
          alt="a truck representing free shipping"
        />
        <h3 className="font-bold">FREE SHIPPING</h3>
        <p> On US online orders over $50.</p>
      </div>
      <div className="px-5 pb-5 bg-bgSecondaryColor mb-5 tablet:my-5 text-[#fff] ">
        <img
          src="https://images.ctfassets.net/m8onsx4mm13s/6IvzKzqfqdVRKgZHjBqFIk/de259c13ae15133900b72c494b76c694/Lifetime-Warranty__2_.png"
          alt="a shield representing lifetime warranty"
        />
        <h3 className="font-bold">LIFETIME WARRANTY</h3>
        <p>Free, limited warranty on material and workmanship.</p>
      </div>
      <div className="px-5 pb-5 bg-bgSecondaryColor mb-5 laptop:my-5 text-[#fff]">
        <img
          src="https://images.ctfassets.net/m8onsx4mm13s/24dB0X9zp0nHGgGooFJUGn/2d7bed365abe0a24ffa79eb21b4e1f3a/Financing-Available__2_.png"
          alt=""
        />
        <h3 className="font-bold">FINANCING AVAILABLE</h3>
        <p>Options available through Klarna at chekout</p>
      </div>
    </div>
  );
}

export default Warranty;
