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

  function subTotalPrice(products) {
    const prices = products.map(
      (details) => details.product.price * details.quantity
    );
    let totalPrice = 0;
    for (let price of prices) {
      totalPrice += price;
    }
    return totalPrice;
  }

  return (
    <div className="pt-[70px]">
      <div className="bg-bgFourthColor h-[100px] w-full pl-10 tablet:pl-14 flex items-center">
        <h3 className="text-4xl">Shopping Cart</h3>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 mx-10">
        {/*      Items Cart */}
        <div className="bg-bgPrimaryColorgrid gap-3 grid mx-4 mt-6">
          {cart.map((detail, i) => {
            return (
              <div key={i}>
                <div className="p-5 grid grid-cols-1 tablet:grid-cols-2">
                  <div className="   tablet:w-[50%] ">
                    <img
                      className="w-fit"
                      src={
                        detail.product.image[0].includes("http")
                          ? detail.product.image[0]
                          : `${process.env.REACT_APP_API_URL}/img/products/${detail.product.image[0]}`
                      }
                      alt=""
                    />
                  </div>
                  <div className="grid items-center">
                    <div>
                      <h3 className="font-medium mt-4">
                        {detail.product.model}, {detail.product.brand.name}
                      </h3>
                      <div className="flex mt-3">
                        <h3 className=" font-light">
                          <span>Unit </span> ${detail.product.price.toFixed(1)}
                        </h3>
                        <h3 className=" font-light ml-5">
                          <span>Total </span> $
                          {(detail.product.price * detail.quantity).toFixed(1)}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-2 ">
                      <div className="flex items-center w-[150px] justify-between">
                        <button
                          className="bg-bgTertiaryColor px-3 text-textPrimary rounded-l"
                          onClick={() => dispatch(removeProduct(detail))}
                        >
                          -
                        </button>
                        <h4 className="border-bgFourthColor border-t border-b w-full justify-center flex">
                          {detail.quantity}
                        </h4>
                        <button
                          className="bg-bgTertiaryColor px-3 text-textPrimary rounded-r"
                          onClick={() => dispatch(addProduct(detail))}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            dispatch(removeAllThisProducts(detail))
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
        <div className="px-4 mt-4">
          {/*      Subtotal */}
          <div className="flex w-full justify-between mx-2 tablet:justify-start mb-5 mt-6">
            <h4 className="text-xl font-semibold ">Subtotal</h4>

            <h4 className="text-xl font-semibold pr-2 tablet:mr-[25%] tablet:ml-4">
              ${subTotalPrice(cart).toFixed(2)}
            </h4>
          </div>
          <p className="w-full px-2 tablet:w-[75%]">
            This order is in USD. Applicable taxes, shipping, coupons or special
            offers will be applied at Checkout.
          </p>
          <div className=" w-full flex justify-center mt-4 mb-10">
            <Link to="/checkout" className="tablet:mr-[25%]">
              <button
                disabled={!user || cart.length === 0 ? true : false}
                className={`bg-bgTertiaryColor  ${
                  !user || cart.length === 0 ? "opacity-50" : "opacity-100"
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
