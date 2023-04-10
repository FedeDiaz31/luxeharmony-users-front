import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/showLoginReducer";
import cross from "../assets/icons/closeIcon.svg";
import "../animation/animations.css";
import info from "../assets/img/info-icon.png";

function InfoModal() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  });

  if (isOpen) {
    return (
      <div
        /*  onClick={() => setIsOpen(false)} */
        className="w-full h-full fixed z-[200] top-0 left-0 bg-[rgba(21,21,21,0.67)] fade-in"
      >
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div className="z-[250] bg-bgPrimaryColor text-bgSecondaryColor relative fade-in">
            <img
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-3 cursor-pointer w-[25px]"
              src={cross}
              alt=""
            />
            <div className="w-full scrollbar">
              <div className="w-full pt-3 tablet:py-5 px-5">
                <div className="w-full flex">
                  <h2 className="font-primaryFont text-[26px]">
                    About this project
                  </h2>
                </div>
                <p className="text-sm tablet:text-base text-center tablet:text-start max-w-[400px]">
                  This e-commerce was created as a culminating project by a
                  group of students from the Hack Academy.
                </p>

                <div className="w-full my-4 flex justify-end">
                  <Link
                    to={"/about"}
                    onClick={() => setIsOpen(false)}
                    className="p-1 font-semibold tablet:p-2 bg-bgTertiaryColor text-textPrimary"
                  >
                    About us
                  </Link>
                </div>
              </div>
              <div className="bg-bgSecondaryColor border border-bgPrimaryColor text-textPrimary pt-3 pb-5 tablet:pb-6 px-5">
                <div className="w-full flex">
                  <h2 className="font-primaryFont text-[26px]">
                    Sample logins
                  </h2>
                </div>
                <p className="text-sm tablet:text-base text-center tablet:text-start max-w-[400px]">
                  To simplify app access, you can use the following login
                  credentials:
                </p>
                <div className="grid justify-center mt-3">
                  <div className="w-full grid grid-cols-1 mobilXS:grid-cols-2 gap-2 tablet:gap-10">
                    <div className="max-w-[300px]">
                      <h2 className="font-primaryFont text-center text-[26px]">
                        User
                      </h2>
                      <div className="mb-1 tablet:mb-3">
                        <div className="flex justify-center tablet:justify-start gap-2">
                          <h3 className="font-light">E-mail:</h3>
                          <h3>user@luxeharmony.com</h3>
                        </div>
                        <div className="flex justify-center tablet:justify-start gap-2">
                          <h3 className="font-light">Password:</h3>
                          <h3> 1234</h3>
                        </div>
                      </div>
                      <div className="mt-2 tablet:mt-4 w-full flex justify-center">
                        <button
                          to="/home"
                          onClick={() => {
                            dispatch(toggle());
                            setIsOpen(false);
                          }}
                          className="p-1 tablet:p-2 bg-bgTertiaryColor text-textPrimary"
                        >
                          Login User
                        </button>
                      </div>
                    </div>
                    <div className="max-w-[300px]">
                      <h2 className="font-primaryFont text-center text-[26px]">
                        Admin
                      </h2>
                      <div className="mb-1 tablet:mb-3">
                        <div className="flex justify-center tablet:justify-start gap-2">
                          <h3 className="font-light">E-mail:</h3>
                          <h3>admin@luxeharmony.com</h3>
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
