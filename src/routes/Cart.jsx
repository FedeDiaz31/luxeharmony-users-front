import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../redux/showLoginReducer";
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
    <div>
      <div className="bg-bgSecondaryColor pt-[100px] pl-10 tablet:px-40 pb-10">
        <h3 className="text-textPrimary font-light text-3xl">Shopping Cart</h3>
      </div>
      <div className="grid grid-cols-1 gap-5 laptop:gap-20 tablet:grid-cols-2 px-10 laptop:px-32 mt-6">
        {/*      Items Cart */}
        <div className="bg-bgPrimaryColorgrid gap-3 grid">
          {cart.map((detail, i) => {
            return (
              <div key={i}>
                <div className="grid justify-center tablet:flex gap-10">
                  <div className="flex justify-center">
                    <img
                      className="w-[130px] h-[130px] object-contain"
                      src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${detail.product.image[0]}`}
                      alt=""
                    />
                  </div>
                  <div className="grid items-center">
                    <div>
                      <h3 className="font-medium mt-4 truncate w-[250px]">
                        {detail.product.model},
                      </h3>
                      <h3 className="font-medium">
                        {detail.product.brand.name}
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
                    <div className="flex gap-3 mt-2">
                      <div className="flex items-center w-[110px] laptop:w-[150px] justify-between">
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
        <div className="">
          {/*      Subtotal */}
          <div className="flex w-full justify-between tablet:justify-start mb-5 mt-6">
            <h4 className="text-xl font-semibold ">Subtotal</h4>

            <h4 className="text-xl font-semibold tablet:pl-4">
              ${subTotalPrice(cart).toFixed(2)}
            </h4>
          </div>
          <p className="w-full">
            This order is in USD. Applicable taxes, shipping, coupons or special
            offers will be applied at Checkout.
          </p>
          <div className=" w-full flex flex-col justify-center mt-4 mb-10">
            <Link to="/checkout" className="">
              <button
                disabled={!user || cart.length === 0 ? true : false}
                className={`bg-bgTertiaryColor  ${
                  !user || cart.length === 0 ? "opacity-50" : "opacity-100"
                }  text-textPrimary px-20 py-2 text-sm`}
              >
                Checkout
              </button>
            </Link>
            {!user && (
              <div className="text-textSecondary font-light text-sm gap-2 flex items-center mt-2">
                <button
                  onClick={() => dispatch(toggle())}
                  className="bg-bgTertiaryColor text-textPrimary px-2 py-1"
                >
                  Login
                </button>
                <h3 className="">to checkout.</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
