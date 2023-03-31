import { Nav } from "rsuite";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [showBrands, setShowBrands] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

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

  return (
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
  );
};

export default NavBar;
