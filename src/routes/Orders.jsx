import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Orders() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState(null);

  console.log(user);

  return (
    <div className="bg-bgSecondaryColor pt-[100px] px-40 pb-10">
      <h3 className="text-textPrimary font-light text-3xl">Your Orders</h3>
    </div>
  );
}

export default Orders;
