import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/categoriesReducer";
import { toggle } from "../redux/showLoginReducer";
import axios from "axios";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";

import LoginComponent from "./LoginComponent";
import CartComponent from "./CartComponent";
import UserComponent from "./UserComponent";
import { Button } from "rsuite";

import logoLuxeHarmony from "../assets/img/logoBlack.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  const dispatch = useDispatch();
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [showUser, setShowUser] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showBurguerMenu, setShowBurguerMenu] = useState(false);

  const showLogin = useSelector((state) => state.showLogin);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const brands = useSelector((state) => state.brands);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    const callCategories = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories`,
      });
      dispatch(getCategories(response.data));
    };
    callCategories();
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
      {/*      Login / User Component */}
      {user ? (
        <div
          className={
            showUser
              ? "absolute top-[70px] left-[200px] laptop:left-auto laptop:right-[80px] laptop:top-[40px] transition-all duration-200"
              : "absolute top-[70px] left-[-300px] laptop:left-auto laptop:right-[80px] laptop:top-[-300px] transition-all duration-200"
          }
        >
          <UserComponent setShowUser={setShowUser} />
        </div>
      ) : (
        <div
          className={
            showLogin
              ? "absolute top-[70px] left-[10px] laptop:left-auto laptop:right-[80px] laptop:top-[40px] transition-all duration-200"
              : "absolute top-[70px] left-[-300px] laptop:left-auto laptop:right-[80px] laptop:top-[-400px] transition-all duration-200"
          }
        >
          <LoginComponent />
        </div>
      )}
      {/*      Cart Component */}
      <div
        className={
          showCart
            ? "absolute top-[40px] transition-all duration-200 z-10 right-[20px] opacity-100"
            : " absolute transition-all duration-200 z-10 -top-[500px] right-[20px] opacity-0"
        }
      >
        <CartComponent setShowCart={setShowCart} />
      </div>
      {/*       Categories Component */}
      <div className="w-full flex tablet:justify-center">
        <div
          className={`bg-headerAndFooterColor tablet:flex tablet:top-[-100px] font-primaryFont gap-8 items-center rounded text-textPrimary px-6 pb-3 absolute transition-all duration-200 ${
            showCategories
              ? "pt-[80px] tablet:pt-[190px] left-[200px] tablet:left-auto"
              : "left-[-108px] tablet:left-auto pt-[100px] tablet:pt-0"
          } `}
        >
          {categories?.map((category, i) => (
            <NavLink
              onClick={() => {
                setShowBurguerMenu(false);
                setShowCategories(false);
              }}
              to={`categories/${category.slug}`}
              key={i}
            >
              <div className="flex">
                <span className="text-xl"> {category.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {/*       Brands Component */}
      <div className="w-full flex tablet:justify-center">
        <div
          className={`bg-headerAndFooterColor tablet:top-[-90px] z-0 gap-3 grid tablet:flex rounded pb-5 absolute pr-6 pl-8 transition-all duration-200 ${
            showBrands
              ? "pt-[90px] tablet:pt-[180px] left-[200px] tablet:left-auto"
              : "hidden left-[-120px] tablet:left-auto pt-[100px] tablet:pt-0"
          } `}
        >
          {brands?.map((brand, i) => (
            <NavLink
              onClick={() => {
                setShowBurguerMenu(false);
                setShowBrands(false);
              }}
              to={`brands/${brand.slug}`}
              key={i}
            >
              <div className="flex">
                <img
                  className="w-16 object-contain"
                  src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${brand.logo}`}
                  alt="logo"
                />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {/*       Burguer Menu Component */}
      <div
        className={`fixed h-[100vh] w-[200px] bg-headerAndFooterColor shadow-lg shadow-bgSecondaryColor transition-all duration-200 laptop:hidden ${
          showBurguerMenu ? "left-0" : "left-[-300px]"
        }`}
      >
        <div className="gap-5 flex flex-col  text-textPrimary font-primaryFont h-full mx-auto mt-[100px]  m-2">
          {/*       Categories Button & Menu */}
          <button
            onClick={() => {
              setShowCategories(!showCategories);
              setShowBrands(false);
            }}
            className="w-full flex justify-center text-[24px] desktop:text-[16px] px-2 pb-1 "
          >
            CATEGORIES
          </button>
          {/*       Brands Button & Menu */}
          <button
            onClick={() => {
              setShowBrands(!showBrands);
              setShowCategories(false);
            }}
            className="w-full flex justify-center text-[24px] desktop:text-[20px]  px-2 pb-1"
          >
            BRANDS
          </button>
          {/*       About Button & Menu */}
          <div
            onClick={() => setShowBurguerMenu(false)}
            className="w-full justify-center flex text-[24px] desktop:text-[20px]  px-2 pb-1"
          >
            <Link to="/about">ABOUT US</Link>
          </div>
          {user ? (
            <button
              onClick={() => {
                setShowUser(!showUser);
                setShowCart(false);
                dispatch(toggle());
              }}
              className="w-full bg-bgSecondaryColor justify-center flex text-[24px] desktop:text-[20px]  px-2 py-1"
            >
              <h2>{user.firstname}</h2>
            </button>
          ) : (
            <div className="w-full bg-bgSecondaryColor justify-center flex text-[24px] desktop:text-[20px] px-2 py-1">
              <button
                onClick={() => {
                  dispatch(toggle());
                  setShowBurguerMenu(false);
                  setShowCart(false);
                  setShowUser(false);
                }}
              >
                LOGIN
              </button>
            </div>
          )}
        </div>
      </div>
      {/*      HEADER BODY */}
      <header
        className={
          userHasScrolled
            ? "z-50 relative w-full h-10 bg-opacity-[98%] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center  duration-200"
            : "z-50 absolute w-full h-[70px] bg-headerAndFooterColor text-textPrimary font-primaryFont flex justify-around items-center duration-200 px-2 tablet:px-20"
        }
      >
        <div className="flex justify-between laptop:justify-around items-center h-full w-full px-10">
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
            <img className="w-20" alt="decorative img" src={logoLuxeHarmony} />
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
                className="relative w-full h-full flex flex-col justify-center items-center px-2 "
              >
                <Link to="/about">ABOUT US</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-7 h-full">
            {/*           Login / User Options */}
            <div className="hidden laptop:block">
              {user ? (
                <button
                  onClick={() => {
                    setShowUser(!showUser);
                    setShowCart(false);
                    dispatch(toggle());
                  }}
                  className="w-full bg-bgSecondaryColor py-1 px-3"
                >
                  <h2>{user.firstname}</h2>
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(toggle());
                    setShowCart(false);
                    setShowUser(false);
                  }}
                  className="w-full bg-bgSecondaryColor py-1 px-3"
                >
                  LOGIN
                </button>
              )}
            </div>
            {/*           Cart Button */}
            <div className="flex h-full">
              <div className="relative w-full h-full flex justify-center items-center">
                <button
                  className="cursos-pointer"
                  onClick={() => {
                    setShowCart(!showCart);

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
        </div>
      </header>
    </>
  );
}

export default Header;
