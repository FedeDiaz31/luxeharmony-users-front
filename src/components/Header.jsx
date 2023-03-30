import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartComponent from "./CartComponent";
import NavBar from "./NavBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import NavMenu from "./NavMenu";
import LoginComponent from "./LoginComponent";
import UserComponent from "./UserComponent";
import axios from "axios";
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
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [showBrands, setShowBrands] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories`,
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/brands`,
      });
      setBrands(response.data);
    };
    getBrands();
  }, []);

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
      {user ? (
        <div
          className={
            showUser
              ? "absolute top-[40px] transition-all duration-200 z-10 right-[20px] opacity-100"
              : "absolute top-[-200px] transition-all duration-200 z-10 right-[20px] opacity-0"
          }
        >
          <UserComponent setShowUser={setShowUser} />
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
      {/*      Cart */}
      <div
        className={
          showCart
            ? "absolute top-[40px] transition-all duration-200 z-10 right-[20px] opacity-100"
            : "absolute top-[-200px] transition-all duration-200 z-10 right-[20px] opacity-0"
        }
      >
        <CartComponent setShowCart={setShowCart} />
      </div>
      {/*       Categories */}
      <div className="w-full flex justify-center">
        <div
          className={`bg-headerAndFooterColor flex top-[-100px] font-primaryFont gap-3 items-center rounded text-textPrimary px-3 pb-1 absolute transition-all duration-200 ${
            showCategories ? "pt-[170px]" : "pt-0"
          } `}
        >
          {categories.map((category) => (
            <NavLink to={`categories/${category.slug}`}>
              <div className="flex items-center gap-2">
                <img
                  className="w-8 my-1 object-contain gap-3"
                  src={
                    category.products[0].image[0].includes("http")
                      ? `${category.products[0].image[0]}`
                      : `${process.env.REACT_APP_API_URL}/img/products/${category.products[0].image[0]}`
                  }
                  alt="image"
                />

                <span className=""> {category.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {/*       Brands */}
      <div className="w-full flex justify-center">
        <div
          className={`bg-headerAndFooterColor top-[-100px] z-0 gap-3 grid tablet:flex rounded py-3 absolute px-4 transition-all duration-200 ${
            showBrands ? "pt-[180px]" : "pt-0"
          } `}
        >
          {brands.map((brand) => (
            <NavLink to={`brands/${brand.slug}`}>
              <div className="flex">
                <img
                  className="w-16 object-contain"
                  src={`${process.env.REACT_APP_API_URL}/img/${brand.logo}`}
                  alt="logo"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {userHasScrolled ? (
        // Header SCROLL
        <header className="z-50 relative w-full h-10 bg-opacity-[98%] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center  duration-200">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full">
            <div className="laptop:hidden">
              <NavMenu />
            </div>
            <Link
              className="h-full bg-bgPrimaryColor p-1 flex items-center shadow"
              to={"/"}
            >
              <img className="w-20" src="LOGO-BLACK-LUXE-HARMONY2.png" />
            </Link>
            <div className="hidden laptop:flex h-full items-center z-10">
              <div className="gap-5 z-10 w-[350px] mx-auto mt-auto h-1/2 relative items-start m-2 flex">
                {/*       Categories Button & Menu */}
                <button
                  onClick={() => {
                    setShowCategories(!showCategories);
                    setShowBrands(false);
                  }}
                  className="w-full px-2 pb-1"
                >
                  CATEGORIES
                </button>
                {/*       Brands Button & Menu */}
                <button
                  onClick={() => {
                    setShowBrands(!showBrands);
                    setShowCategories(false);
                  }}
                  className="w-full px-2 pb-1"
                >
                  BRANDS
                </button>
                <div className="w-full  px-2 pb-1">
                  <Link to="/about">ABOUT</Link>
                </div>
              </div>
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
        <header className="z-50 absolute w-full h-[70px] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center duration-200 px-5 tablet:px-20">
          <div className="flex justify-between laptop:justify-around items-center h-full w-full">
            <div className="laptop:hidden">
              <NavMenu />
            </div>
            <Link
              className="bg-bgPrimaryColor h-full flex items-center shadow"
              to={"/"}
            >
              <img className="w-28" src="LOGO-BLACK-LUXE-HARMONY2.png" alt="" />
            </Link>
            <div className="hidden laptop:flex h-full items-center">
              <div className="gap-5 z-10 w-[350px] mx-auto mt-auto h-1/2 relative items-start m-2 flex">
                {/*       Categories Button & Menu */}
                <button
                  onClick={() => {
                    setShowCategories(!showCategories);
                    setShowBrands(false);
                  }}
                  className="w-full px-2 pb-1"
                >
                  CATEGORIES
                </button>
                {/*       Brands Button & Menu */}
                <button
                  onClick={() => {
                    setShowBrands(!showBrands);
                    setShowCategories(false);
                  }}
                  className="w-full px-2 pb-1"
                >
                  BRANDS
                </button>
                <div className="w-full  px-2 pb-1">
                  <Link to="/about">ABOUT</Link>
                </div>
              </div>
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
