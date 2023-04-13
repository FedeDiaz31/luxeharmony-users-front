import { Link } from "react-router-dom";

function CardProductCategory({ product }) {
  return (
    <Link
      to={`/product/${product.slug}`}
      className="relative flex flex-col items-center justify-center max-w-[200px] overflow-hidden"
    >
      {product.highlight && (
        <img
          className="absolute w-10 top-[-5px] right-[-10px] scale-[120%] "
          src="/band-highlight.png"
          alt="band"
        />
      )}

      <div className="relative overflow-hidden">
        {product.stock === 0 && (
          <div className="bg-bgSecondaryColor grid place-content-center h-10 w-full absolute top-[40%] -rotate-12 scale-x-125">
            <h3 className="font-primaryFont text-textPrimary text-lg">
              SOLD OUT
            </h3>
          </div>
        )}
        <img
          className="py-5 border w-[240px] h-[300px] border-bgFourthColor object-contain "
          src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${product.image[0]}`}
          alt={product.brand + product.model}
        />
      </div>
      <div className="text-left w-full">
        <img
          className="w-20 my-4"
          src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${product.brand.logo2}`}
          alt=""
        />
        <h1 className="title-card-category truncate">{product.model}</h1>
        <span className="font-light">U$D {product.price.toFixed(2)}</span>
      </div>
    </Link>
  );
}

export default CardProductCategory;
