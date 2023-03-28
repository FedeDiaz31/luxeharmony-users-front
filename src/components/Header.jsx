import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartComponent from "./CartComponent";
import NavBar from "./NavBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import NavMenu from "./NavMenu";
import LoginComponent from "./LoginComponent";
import UserComponent from "./UserComponent";
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
  const [showLogin, setShowLogin] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    window.onscroll = function (e) {
      if (Math.ceil(window.pageYOffset) > 100) {
        setUserHasScrolled(true);
      } else {
        setUserHasScrolled(false);
      }
    };
  }, [userHasScrolled]);

  console.log(user);

  return (
    <>
      {user ? (
        <div
          className={
            showUser
              ? "absolute top-[40px] transition-all duration-200 z-10 right-[20px] opacity-100"
              : "absolute top-[-200px] transition-all duration-200 z-10 right-[20px] opacity-0"
          }
        >
          <UserComponent setShowUSer={setShowUser} />
        </div>
      ) : (
        <div
          className={
            showLogin
              ? "absolute top-[40px] transition-all duration-200 z-10 right-[20px] opacity-100"
              : "absolute top-[-200px] transition-all duration-200 z-10 right-[20px] opacity-0"
          }
        >
          <LoginComponent setShowLogin={setShowLogin} />
        </div>
      )}
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
        <header className="z-50 relative w-full h-12 bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center  duration-200">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full">
            <div className="laptop:hidden">
              <NavMenu />
            </div>
            <Link
              className="h-full bg-bgPrimaryColor p-1 flex items-center"
              to={"/"}
            >
              <img className="w-20" src="LOGO-BLACK-LUXE-HARMONY2.png" />
            </Link>
            <div className="hidden laptop:flex h-full items-center">
              <NavBar />
            </div>
            <div className="flex items-center gap-5">
              {user ? (
                <button
                  onClick={() => {
                    setShowUser(!showUser);
                    setShowCart(false);
                    setShowLogin(false);
                  }}
                  className="w-full bg-bgSecondaryColor py-1 px-3"
                >
                  <h2>{user.firstname}</h2>
                </button>
              ) : (
                <div className="w-full bg-bgSecondaryColor py-1 px-3">
                  <button
                    onClick={() => {
                      setShowLogin(!showLogin);
                      setShowCart(false);
                      setShowUser(false);
                    }}
                    to="/about"
                  >
                    LOGIN
                  </button>
                </div>
              )}

              <button
                className="cursos-pointer"
                onClick={() => {
                  setShowCart(!showCart);
                  setShowLogin(false);
                  setShowUser(false);
                }}
              >
                <StyledBadge badgeContent={cart.length}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </button>
            </div>
          </div>
        </header>
      ) : (
        //Header NO SCROLL
        <header className="z-50 absolute w-full h-[70px] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center duration-200">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full">
            <div className="laptop:hidden">
              <NavMenu />
            </div>
            <Link
              className=" bg-bgPrimaryColor h-full flex items-center"
              to={"/"}
            >
              <img className="w-28" src="LOGO-BLACK-LUXE-HARMONY2.png" alt="" />
            </Link>
            <div className="hidden laptop:flex h-full items-center">
              <NavBar />
            </div>
            <div className="flex items-center gap-5">
              {user ? (
                <button
                  onClick={() => {
                    setShowUser(!showUser);
                    setShowCart(false);
                    setShowLogin(false);
                  }}
                  className="w-full bg-bgSecondaryColor py-1 px-3"
                >
                  <h3>{user.firstname}</h3>
                </button>
              ) : (
                <button
                  className="w-full bg-bgSecondaryColor py-1 px-3"
                  onClick={() => {
                    setShowLogin(!showLogin);
                    setShowCart(false);
                    setShowUser(false);
                  }}
                  to="/about"
                >
                  LOGIN
                </button>
              )}
              <button
                className="cursos-pointer"
                onClick={() => {
                  setShowCart(!showCart);
                  setShowLogin(false);
                  setShowUser(false);
                }}
              >
                <StyledBadge badgeContent={cart.length}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </button>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
