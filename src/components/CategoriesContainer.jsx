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
      className=" w-full px-5 pb-10 text-center bg-bgSecondaryColor"
      id="categories-container"
    >
      <h2 className="category-title text-[#fff] text-center py-10">
        SHOP BY CATEGORY
      </h2>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-5">
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
          title={"Acoustic guitar"}
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
            "https://images.equipboard.com/uploads/user/image/5877/big_flea.jpg?v=1679621055"
          }
        />
        <CategoryHome
          title={"Audio pro"}
          paragraph={
            "Experience high-quality sound like never before with our professional audio section."
          }
          category={"audio pro"}
          img={"https://i.ytimg.com/vi/z28V4CoVdL0/maxresdefault.jpg"}
        />
      </div>
    </div>
  );
}

export default CategoriesContainer;
