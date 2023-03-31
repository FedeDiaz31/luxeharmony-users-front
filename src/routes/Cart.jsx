import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProduct,
  removeProduct,
  removeAllThisProducts,
} from "../redux/cartReducer";

function Cart() {
  document.title = ` Cart | LuxeHarmony `;
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const showRowProduct = cart.filter((item, index) => {
    return cart.indexOf(item) === index;
  }); //Esta constante filtra los productos repetidos. (Para no tener visualment lineas repetidas en el carrito)

  function subTotalPrice(products) {
    const prices = products.map((product) => product.price * product.quantity);
    let totalPrice = 0;
    for (let price of prices) {
      totalPrice += price;
    }
    return totalPrice;
  }

  return (
    <div className="pt-[70px]">
      <div className="bg-bgFourthColor h-[100px] w-full pl-10 tablet:pl-32 flex items-center">
        <h3 className="text-4xl">Shopping Cart</h3>
      </div>
      <div className="flex m-10 justify-center gap-5">
        {/*      Items Cart */}
        <div className="bg-bgPrimaryColorgrid gap-3 grid">
          {cart.map((product, i) => {
            return (
              <div key={i}>
                <div className="flex gap-3 px-25 mr-52">
                  <div className="border border-bgFourthColor rounded p-3 px-5">
                    <img
                      className="w-20"
                      src={
                        product.image[0].includes("http")
                          ? product.image[0]
                          : `${process.env.REACT_APP_API_URL}/img/products/${product.image[0]}`
                      }
                      alt=""
                    />
                  </div>
                  <div className="grid items-center">
                    <div>
                      <h3 className="font-medium">
                        {product.model}, {product.brand.name}
                      </h3>
                      <div className="flex mt-3">
                        <h3 className=" font-light">
                          <span>Unit </span> ${product.price.toFixed(1)}
                        </h3>
                        <h3 className=" font-light ml-5">
                          <span>Total </span> $
                          {(product.price * product.quantity).toFixed(1)}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center w-[150px] justify-between">
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
                      <div>
                        <button
                          onClick={() =>
                            dispatch(removeAllThisProducts(product))
                          }
                          className="border-bgFourthColor border rounded px-3"
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-bgFourthColor mt-5"></div>
              </div>
            );
          })}
        </div>
        <div className="bg-bgFourthColor h-[200px] w-[1px]"></div>
        <div className="">
          <div className="flex w-full justify-between items-center mb-5">
            <h3 className="text-sm font-semibold">Subtotal</h3>
            <h4 className="font-bold">${subTotalPrice(cart).toFixed(2)}</h4>
          </div>
          <p className="max-w-[300px]">
            This order is in USD. Applicable taxes, shipping, coupons or special
            offers will be applied at Checkout.
          </p>
          <div className="mt-10 w-full flex flex-col items-center">
            <Link to="/chekout">
              <button
                disabled={!user || cart.length === 0 ? true : false}
                className={`bg-bgTertiaryColor ${
                  !user && "opacity-50"
                }  text-textPrimary px-20 py-2 rounded text-sm`}
              >
                Checkout
              </button>
            </Link>
            {!user && (
              <div>
                <h3 className="text-textSecondary font-light text-sm mt-2">
                  Login to checkout.
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
