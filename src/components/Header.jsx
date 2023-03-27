import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import CartComponent from "./CartComponent";

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import NavMenu from "./NavMenu";
// import { motion } from "framer-motion"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector((state) => state.cart);

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
            ? "absolute top-[40px] transition-all duration-200 z-10 right-0 tablet:right-[20px] opacity-100"
            : "absolute top-[-200px] transition-all duration-200 z-10 right-0 tablet:right-[20px] opacity-0"
        }
      >
        <CartComponent setShowCart={setShowCart} />
      </div>

      {userHasScrolled ? (
        // Header SCROLL
        <header className="z-50 absolute w-full h-12 bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center  duration-200">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full px-5 tablet:px-10 laptop:px-20">
            <div className="laptop:hidden">
              <NavMenu />
            </div>
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
              <IconButton aria-label="cart" color="inherit">
                <StyledBadge badgeContent={cart.length}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

              {/* ///////////////////////// */}
            </button>
          </div>
        </header>
      ) : (
        //Header NO SCROLL
        <header className="z-50 absolute w-full h-[70px] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center duration-200">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full px-5 tablet:px-10 laptop:px-20">
            <div className="laptop:hidden">
              <NavMenu />
            </div>
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
              <IconButton aria-label="cart" color="inherit">
                <StyledBadge badgeContent={cart.length}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
