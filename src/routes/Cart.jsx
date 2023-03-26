import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="pt-[70px]">
      <div className="bg-bgFourthColor h-[100px] w-full pl-32 flex items-center">
        <h3 className="text-4xl">Shopping Cart</h3>
      </div>
      {/*      Items Cart */}
      <div className="bg-bgPrimaryColor">
        {cart.map((item) => {
          return <div key={item._id}>{item.model}</div>;
        })}
      </div>
    </div>
  );
}

export default Cart;
