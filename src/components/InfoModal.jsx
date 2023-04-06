import { React, useState } from "react";
import { Link } from "react-router-dom";
import cross from "../assets/icons/closeIcon.svg";
import "../animation/animations.css";
import info from "../assets/img/info-icon.png";

function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    return (
      <div
        /*  onClick={() => setIsOpen(false)} */
        className="w-full h-full fixed z-[200] top-0 left-0 bg-[rgba(0,0,0,0.67)] fade-in"
      >
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div className=" z-[250] bg-bgPrimaryColor text-bgSecondaryColor relative fade-in">
            <img
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-3 cursor-pointer w-[25px]"
              src={cross}
              alt=""
            />
            <div className="w-full py-3 tablet:py-8 px-5">
              <div className="w-full">
                <div className="w-full flex">
                  <h2 className="font-primaryFont text-[26px]">
                    About this project
                  </h2>
                </div>
                <p className="text-sm tablet:text-base text-center tablet:text-start max-w-[500px]">
                  This e-commerce was created as a culminating project by a
                  group of students from the Hack Academy.
                </p>

                <div className="w-full my-6  ml-[40%] tablet:justify-end">
                  <Link
                    to={"/about"}
                    onClick={() => setIsOpen(false)}
                    className="p-1 tablet:p-2 bg-bgTertiaryColor text-textPrimary"
                  >
                    About us
                  </Link>
                </div>
              </div>
              <hr className="my-2 opacity-40 tablet:my-3" />

              <div className="w-full flex">
                <h2 className="font-primaryFont text-[26px]">Sample logins</h2>
              </div>
              <p className="text-sm tablet:text-base text-center tablet:text-start max-w-[500px]">
                To simplify app access, you can use the following login
                credentials:
              </p>
              <div className="grid justify-center mt-4">
                <div className="w-full grid grid-cols-1 tablet:grid-cols-2 gap-2 tablet:gap-10">
                  <div className="max-w-[300px]">
                    <h2 className="font-primaryFont text-center text-[26px]">
                      User
                    </h2>
                    <div className="mb-1 tablet:mb-3">
                      <div className="flex justify-center tablet:justify-start gap-2">
                        <h3 className="font-light">E-mail:</h3>
                        <h3>luxe@admin.com</h3>
                      </div>
                      <div className="flex justify-center tablet:justify-start gap-2">
                        <h3 className="font-light">Password:</h3>
                        <h3> 1234</h3>
                      </div>
                    </div>
                    <div className="mt-2 tablet:mt-4 w-full flex justify-center">
                      <Link
                        to="/home"
                        onClick={() => setIsOpen(false)}
                        className="p-1 tablet:p-2 bg-bgTertiaryColor text-textPrimary"
                      >
                        Login User
                      </Link>
                    </div>
                  </div>
                  <div className="max-w-[300px]">
                    <h2 className="font-primaryFont text-center text-[26px]">
                      Admin
                    </h2>
                    <div className="mb-1 tablet:mb-3">
                      <div className="flex justify-center tablet:justify-start gap-2">
                        <h3 className="font-light">E-mail:</h3>
                        <h3>admin@hack.com</h3>
                      </div>
                      <div className="flex justify-center tablet:justify-start gap-2">
                        <h3 className="font-light">Password:</h3>
                        <h3> 1234</h3>
                      </div>
                    </div>
                    <div className="mt-2 tablet:mt-4 w-full flex justify-center">
                      <Link
                        to="https://admin-luxeharmony.vercel.app"
                        target={"_blank"}
                        className="p-1 tablet:p-2 bg-bgTertiaryColor text-textPrimary"
                      >
                        Login Admin
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <button
        className="bg-opacity-70 hover:bg-opacity-100 transition-all duration-200 fixed bottom-5 tablet:bottom-10 right-5 tablet:right-10 bg-bgTertiaryColor p-2 tablet:p-3 rounded-full text-textPrimary"
        onClick={() => setIsOpen(true)}
      >
        <img className="w-5 tablet:w-8" src={info} alt="" />
      </button>
    );
  }
}

export default InfoModal;
