import { dividerClasses } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeProduct } from "../redux/cartReducer";

function CartComponent({ setShowCart }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <div className="w-[600px]  bg-bgPrimaryColor border-solid rounded mt-10 mb-10 px-5">
        {cart.map((product) => (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src={product.image[0]}
                alt="product-pic"
                className="w-10 z-0  ml-5"
              />
              <h2 className="text-bgSecondaryColor ml-10">{product.model}</h2>
            </div>
            <div>
              <DeleteIcon onClick={() => dispatch(removeProduct(product))} />
            </div>
          </div>
        ))}

        <div className="mt-5">
          <Link to={"/cart"}>
            <button className="bg-bgPrimaryColor w-full    border-solid border-black rounded -5 ">
              Review cart
            </button>
          </Link>
        </div>
        <div>
          <button
            className="bg-bgTertiaryColor w-full   rounded  my-3 "
            onClick={handleCloseCart}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default CartComponent;
