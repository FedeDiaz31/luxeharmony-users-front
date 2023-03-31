import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartComponent from "./CartComponent";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import NavMenu from "./NavMenu";
import LoginComponent from "./LoginComponent";
import UserComponent from "./UserComponent";
import axios from "axios";
import { Button } from "rsuite";
import MenuIcon from "@mui/icons-material/Menu";
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
  const [showBurguerMenu, setShowBurguerMenu] = useState(false);

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
      <div className="w-full flex tablet:justify-center">
        <div
          className={`bg-headerAndFooterColor tablet:flex tablet:top-[-100px] font-primaryFont gap-3 items-center rounded text-textPrimary px-3 pb-1 absolute transition-all duration-200 ${
            showCategories
              ? "pt-[80px] tablet:pt-[180px] left-[100px] tablet:left-auto"
              : "left-[-200px] tablet:left-auto pt-[100px] tablet:pt-0"
          } `}
        >
          {categories.map((category) => (
            <NavLink
              onClick={() => {
                setShowBurguerMenu(false);
                setShowCategories(false);
              }}
              to={`categories/${category.slug}`}
            >
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
      <div className="w-full flex tablet:justify-center">
        <div
          className={`bg-headerAndFooterColor tablet:top-[-90px] z-0 gap-3 grid tablet:flex rounded pb-5 absolute px-4 transition-all duration-200 ${
            showBrands
              ? "pt-[90px] tablet:pt-[180px] left-[100px] tablet:left-auto"
              : "left-[-100px] tablet:left-auto pt-[100px] tablet:pt-0"
          } `}
        >
          {brands.map((brand) => (
            <NavLink
              onClick={() => {
                setShowBurguerMenu(false);
                setShowBrands(false);
              }}
              to={`brands/${brand.slug}`}
            >
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
      {/*       Burguer Menu */}
      <div
        className={`fixed h-[100vh] w-[100px] bg-headerAndFooterColor transition-all duration-200 ${
          showBurguerMenu ? "left-0" : "left-[-100px]"
        }`}
      >
        <div className="gap-5 flex flex-col text-textPrimary font-primaryFont h-full mx-auto mt-[100px] items-start m-2">
          {/*       Categories Button & Menu */}
          <button
            onClick={() => {
              setShowCategories(!showCategories);
              setShowBrands(false);
            }}
            className="w-full flex justify-center  px-2 pb-1"
          >
            CATEGORIES
          </button>
          {/*       Brands Button & Menu */}
          <button
            onClick={() => {
              setShowBrands(!showBrands);
              setShowCategories(false);
            }}
            className="w-full flex justify-center  px-2 pb-1"
          >
            BRANDS
          </button>
          <div className="w-full justify-center flex  px-2 pb-1">
            <Link to="/about">ABOUT</Link>
          </div>
        </div>
      </div>
      <header
        className={
          userHasScrolled
            ? "z-50 relative w-full h-10 bg-opacity-[98%] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center  duration-200 "
            : "z-50 absolute w-full h-[70px] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center duration-200 px-2 tablet:px-20"
        }
      >
        <div className="flex justify-between laptop:justify-around items-center h-full w-full mx-5 mobilXS:mx-10">
          <div className="laptop:hidden">
            <Button
              onClick={() => {
                setShowBurguerMenu(!showBurguerMenu);
                setShowBrands(false);
                setShowCategories(false);
              }}
              id="basic-button"
            >
              <MenuIcon className="text-bgPrimaryColor" />
            </Button>
          </div>
          <Link
            className="h-full bg-bgPrimaryColor p-1 flex items-center shadow"
            to={"/"}
          >
            <img className="w-20" src="LOGO-BLACK-LUXE-HARMONY2.png" />
          </Link>
          <div className="hidden laptop:flex h-full items-center z-10">
            <div className="gap-5 z-10 w-[350px] h-full justify-center mx-auto relative items-start flex">
              {/*       Categories Button & Menu */}
              <div className="relative w-full h-full flex flex-col justify-center items-center px-2">
                <button
                  onClick={() => {
                    setShowCategories(!showCategories);
                    setShowBrands(false);
                  }}
                >
                  CATEGORIES
                </button>
                <div
                  className={`${
                    showCategories
                      ? "bg-bgTertiaryColor bg-opacity-100 absolute bottom-0 w-full h-[3px] transition-all duration-200"
                      : "bg-opacity-0 absolute bottom-0 w-full h-[3px] transition-all duration-200"
                  }`}
                ></div>
              </div>
              {/*       Brands Button & Menu */}
              <div className="relative w-full h-full flex flex-col justify-center items-center px-2">
                <button
                  onClick={() => {
                    setShowBrands(!showBrands);
                    setShowCategories(false);
                  }}
                >
                  BRANDS
                </button>
                <div
                  className={`${
                    showBrands
                      ? "bg-bgTertiaryColor bg-opacity-100 absolute bottom-0 w-full h-[3px] transition-all duration-200"
                      : "bg-opacity-0 absolute bottom-0 w-full h-[3px] transition-all duration-200"
                  }`}
                ></div>
              </div>
              <div
                onClick={() => {
                  setShowBrands(false);
                  setShowCategories(false);
                }}
                className="relative w-full h-full flex flex-col justify-center items-center px-2"
              >
                <Link to="/about">ABOUT</Link>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center gap-5">
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
                >
                  LOGIN
                </button>
              </div>
            )}
            <div className="relative w-full h-full flex flex-col justify-center items-center">
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
              <div
                className={`${
                  showCart
                    ? "bg-bgTertiaryColor bg-opacity-100 absolute bottom-0 w-full h-[3px] transition-all duration-200"
                    : "bg-opacity-0 absolute bottom-0 w-full h-[3px] transition-all duration-200"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
