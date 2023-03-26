import { dividerClasses } from "@mui/material";
import { Link } from "react-router-dom";

function cartComponent({ setShowCart }) {
  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <div className="w-[600px] h-[200px] bg-bgPrimaryColor border-solid rounded ">
        <div className="flex ">
          <img src="" alt="product-pic" className="mt-10 ml-5" />
          <h2 className="text-bgSecondaryColor mt-10 absolute left-[150px]">
            Título del carrito
          </h2>
        </div>
        <div>
          <Link to={"/cart"}>
            <button className="bg-bgPrimaryColor w-[540px] mx-[30px] absolute bottom-[70px] border-solid border-black rounded  ">
              Review cart
            </button>
          </Link>
        </div>
        <div>
          <button
            className="bg-bgTertiaryColor w-[540px] rounded absolute bottom-5 mx-[30px]"
            onClick={handleCloseCart}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default cartComponent;
