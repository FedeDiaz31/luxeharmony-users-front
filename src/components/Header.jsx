import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartComponent from "./CartComponent";
// import { motion } from "framer-motion"

function Header() {
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    window.onscroll = function (e) {
      if (Math.ceil(window.pageYOffset) > 100) {
        setUserHasScrolled(true);
      } else {
        setUserHasScrolled(false);
      }
    };
  }, [userHasScrolled]);

  return (
    <>
      <div
        className={
          showCart
            ? "absolute top-[40px] transition-all duration-200 z-10 right-[20px] opacity-100"
            : "absolute top-[-200px] transition-all duration-200 z-10 right-[20px] opacity-0"
        }
      >
        <CartComponent setShowCart={setShowCart} />
      </div>

      {userHasScrolled ? (
        // Header SCROLL
        <header className="z-50 absolute w-full h-12 bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center  duration-200">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full px-5 tablet:px-10 laptop:px-20">
            <Link
              className="h-full bg-bgPrimaryColor p-1 flex items-center"
              to={"/"}
            >
              <img className="w-20" src="LOGO-BLACK-LUXE-HARMONY2.png" />
            </Link>
            <div>
              <ul className="hidden laptop:flex h-10 m-20 text-xl">
                <li className="text-textPrimary px-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:underline cursor-pointer ">
                  ELECTRIC
                </li>
                <li className="text-textPrimary px-5 flex justify-center items-center transition ease-in-out hover:underline cursor-pointer">
                  ACOUSTIC
                </li>
                <li className="text-textPrimary px-5 flex justify-center items-center transition ease-in-out hover:underline cursor-pointer">
                  BASS
                </li>
                <li className="text-textPrimary px-5 flex justify-center items-center transition ease-in-out hover:underline cursor-pointer">
                  AUDIO PRO
                </li>
              </ul>
            </div>
            <button
              className="cursos-pointer"
              onClick={() => setShowCart(!showCart)}
            >
              <svg
                className="w-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="cart-shopping"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      ) : (
        //Header NO SCROLL
        <header className="z-50 absolute w-full h-[70px] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center duration-200">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full px-5 tablet:px-10 laptop:px-20">
            <Link
              className=" bg-bgPrimaryColor p-3 h-full flex items-center"
              to={"/"}
            >
              <img className="w-28" src="LOGO-BLACK-LUXE-HARMONY2.png" alt="" />
            </Link>
            <div className="hidden laptop:flex">
              <ul className="h-10 m-20 text-xl flex">
                <li className="text-textPrimary px-5 flex justify-center items-center transition-all duration-200 ease-in-out hover:underline cursor-pointer ">
                  ELECTRIC
                </li>
                <li className="text-textPrimary px-5 flex justify-center items-center transition ease-in-out hover:underline cursor-pointer">
                  ACOUSTIC
                </li>
                <li className="text-textPrimary px-5 flex justify-center items-center transition ease-in-out hover:underline cursor-pointer">
                  BASS
                </li>
                <li className="text-textPrimary px-5 flex justify-center items-center transition ease-in-out hover:underline cursor-pointer">
                  AUDIO PRO
                </li>
              </ul>
            </div>
            <button
              className="cursos-pointer"
              onClick={() => setShowCart(!showCart)}
            >
              <svg
                className="w-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="cart-shopping"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
