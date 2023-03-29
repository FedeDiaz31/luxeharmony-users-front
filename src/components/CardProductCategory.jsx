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
      <img
        className="py-5 border w-[240px] h-[300px] border-bgFourthColor object-contain "
        src={
          product.image[0].includes("http")
            ? product.image[0]
            : `${process.env.REACT_APP_API_URL}/img/products/${product.image[0]}`
        }
        alt={product.brand + product.model}
      />
      <div className="text-left w-full">
        <img
          className="w-20 my-4"
          src={
            product.brand.logo2.includes("http")
              ? product.brand.logo2
              : `${process.env.REACT_APP_API_URL}/img/${product.brand.logo2}`
          }
          alt=""
        />
        <h1 className="title-card-category">{product.model}</h1>
        <span className="font-light">U$D {product.price.toFixed(2)}</span>
      </div>
    </Link>
  );
}

export default CardProductCategory;
