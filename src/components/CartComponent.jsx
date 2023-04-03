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

  // useEffect(() => {
  //   setShowRowProducts(
  //     cart.filter((item, index) => {
  //       return cart.indexOf(item) === index;
  //     })
  //   );
  //   console.log(cart);
  // }, [cart]);

  //Este efecto filtra los productos repetidos. (Para no tener lineas repetidas)

  return (
    <>
      <div className="w-full tablet:w-[500px] bg-bgPrimaryColor border border-bgFourthColor rounded-b mb-10 pb-3 px-5 pt-12 grid gap-2">
        {cart.length === 0 ? (
          <div>
            <h3 className="font-light text-2xl text-center">Empty cart...</h3>
          </div>
        ) : (
          cart.map((product) => (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={
                    product.image[0].includes("http")
                      ? product.image[0]
                      : `${process.env.REACT_APP_API_URL}/img/products/${product.image[0]}`
                  }
                  alt="product-pic"
                  className="w-10 z-0"
                />
                <h2 className="text-bgSecondaryColor hidden tablet:block max-w-[160px] text-ellipsis overflow-hidden">
                  {product.model}
                </h2>
              </div>
              <div className="flex gap-3 items-center">
                <h4 className="font-light">
                  USD {(product.price * product.quantity).toFixed(2)}
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
                      {product.quantity}
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
          ))
        )}
        <div className="mt-5">
          <Link onClick={handleCloseCart} to={"/cart"}>
            <div className="bg-bgPrimaryColor w-full text-center border border-bgFourthColor py-1 ">
              Review cart
            </div>
          </Link>
        </div>
        <div>
          <button
            className="bg-bgTertiaryColor w-full text-textPrimary py-1"
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
