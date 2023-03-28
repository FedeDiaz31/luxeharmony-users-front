import axios from "axios";
import { React, useEffect, useState } from "react";
import CategoryHome from "./CategoryHome";
import { Link } from "react-router-dom";

function CategoriesContainer() {
  const [categories, setCategories] = useState([]);

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

  return (
    <div
      className="w-full px-5 pb-10 text-center bg-bgPrimaryColor"
      id="categories-container"
    >
      <h2 className="category-title text-textSecondary text-center pb-14">
        SHOP BY CATEGORY
      </h2>
      <div className="relative grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5">
        <CategoryHome
          title={"Electric guitars"}
          paragraph={
            "Electrify your sound and ignite your passion with our electric guitar selection "
          }
          category={"electric"}
          img={
            "https://www.billboard.com/wp-content/uploads/media/bb-king-lucille-guitar-2011-billboard-1548.jpg?w=1024"
          }
        />
        <CategoryHome
          title={"Acoustic guitars"}
          paragraph={
            "Unleash your acoustic potential with our premium acoustic guitar section"
          }
          category={"acoustic"}
          img={
            "https://media.pitchfork.com/photos/5e9df92c500fb50008ff894b/4:3/w_2792,h_2094,c_limit/Green-Day-Billie-Joe-Armstrong.jpg"
          }
        />
        <CategoryHome
          title={"Basses"}
          paragraph={
            "Take your bass game to the next level with our top-notch bass section"
          }
          category={"bass"}
          img={
            "https://www.fmicassets.com/demandware/assets/features/flea-bass-2016/mobile/flea-green-bg.jpg"
          }
        />
        <CategoryHome
          title={"Audio pro"}
          paragraph={
            "Experience high-quality sound like never before with our professional audio section."
          }
          category={"audio pro"}
          img={
            "https://creativefreedompreneur.com/wp-content/uploads/2015/04/Starting-Your-Own-Music-Production-Company.png"
          }
        />
      </div>
    </div>
  );
}

export default CategoriesContainer;
