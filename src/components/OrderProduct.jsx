import { Link } from "react-router-dom";

function OrderProduct({ detail }) {
  return (
    <div className="flex mt-2 px-2 laptop:px-10 py-4 border rounded-lg">
      <div className="flex items-center">
        <img
          src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${detail.product.image[0]}`}
          className="w-[100px] h-[120px]  object-contain mr-1 tablet:mr-3"
          alt=""
        />
        <div className="flex flex-col">
          <Link
            to={"/product/" + detail.product.slug}
            className=" font-primaryFont text-lg hover:text-bgTertiaryColor max-w-[150px] truncate"
          >
            {detail.product.model}
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-light text-lg">
              U$D {detail.fixedPrice.toFixed(2)}
            </span>
            <span className="font-light text-lg">x {detail.quantity} u</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
