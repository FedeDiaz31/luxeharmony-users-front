import { dividerClasses } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addProduct,
  removeProduct,
  removeAllThisProducts,
} from "../redux/cartReducer";

function CartComponent({ setShowCart }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const showRowProduct = cart.filter((item, index) => {
    return cart.indexOf(item) === index;
  }); //Esta constante filtra los productos repetidos. (Para no tener lineas repetidas)

  function quantityProduct(cartProducts, product) {
    const arrayProduct = cartProducts.filter(
      (prod) => prod._id === product._id
    );
    return arrayProduct.length;
  }

  return (
    <>
      <div className="w-[500px] bg-bgPrimaryColor border border-bgFourthColor rounded mb-10 pb-3 px-5 pt-16 grid gap-2">
        {showRowProduct.map((product) => (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={product.image[0]}
                alt="product-pic"
                className="w-10 z-0"
              />
              <h2 className="text-bgSecondaryColor">{product.model}</h2>
            </div>
            <div className="flex gap-3">
              <h4 className="text-black">
                USD {product.price * quantityProduct(cart, product)}
              </h4>
              <div className="flex gap-3">
                <div className="flex items-center w-[110px] justify-between">
                  <button
                    className="bg-bgTertiaryColor px-3 text-textPrimary rounded-l"
                    onClick={() => dispatch(removeProduct(product))}
                  >
                    -
                  </button>

                  <h4 className="border-bgFourthColor border-t border-b w-full justify-center flex">
                    {quantityProduct(cart, product)}
                  </h4>
                  <button
                    className="bg-bgTertiaryColor px-3 text-textPrimary rounded-r"
                    onClick={() => dispatch(addProduct(product))}
                  >
                    +
                  </button>
                </div>
              </div>
              <DeleteIcon
                onClick={() => dispatch(removeAllThisProducts(product))}
              />
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Link onClick={handleCloseCart} to={"/cart"}>
            <div className="bg-bgPrimaryColor w-full text-center border border-bgFourthColor rounded py-1 ">
              Review cart
            </div>
          </Link>
        </div>
        <div>
          <button
            className="bg-bgTertiaryColor w-full text-textPrimary rounded py-1"
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
