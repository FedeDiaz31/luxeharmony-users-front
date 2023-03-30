import { Nav } from "rsuite";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

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
    <Nav className="gap-5 w-[350px] mx-auto mt-auto h-1/2 relative items-start m-2 flex">
      <Nav.Menu title="CATEGORIES" className="w-full  px-2 pb-1">
        <div className="bg-bgFourthColor w-[100px] rounded p-3 absolute">
          {categories.map((category) => (
            <NavLink to={`categories/${category.slug}`}>
              <div className="flex">
                <img
                  className="w-5 my-1 object-contain mr-3"
                  src={
                    category.products[0].image[0].includes("http")
                      ? `${category.products[0].image[0]}`
                      : `${process.env.REACT_APP_API_URL}/img/products/${category.products[0].image[0]}`
                  }
                  alt="image"
                />

                <span className="mt-3"> {category.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </Nav.Menu>
      <Nav.Menu title="BRANDS" className="w-full  px-2 pb-1">
        <div className="bg-bgFourthColor w-[130px] rounded p-1 absolute">
          {brands.map((brand) => (
            <NavLink to={`brands/${brand.slug}`}>
              <div className="flex">
                <img
                  className="w-5 my-1 object-contain mr-3"
                  src={`${process.env.REACT_APP_API_URL}/img/${brand.logo2}`}
                  alt="logo"
                />

                <span>{brand.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </Nav.Menu>
      <Nav.Item className="w-full  px-2 pb-1">
        <Link to="/about">ABOUT</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
