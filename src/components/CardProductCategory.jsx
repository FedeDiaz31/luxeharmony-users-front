import { Link } from "react-router-dom";

function CardProductCategory({ slug, model, image, brand, price }) {
  return (
    <Link
      to={`/product/${slug}`}
      className="flex flex-col items-center justify-center max-w-[200px]"
    >
      <img
        className="py-5 border w-[240px] h-[300px] border-bgFourthColor object-contain"
        src={
          image.includes("http")
            ? image
            : `${process.env.REACT_APP_API_URL}/img/products/${image}`
        }
        alt={brand + model}
      />
      <div className="text-left w-full">
        <img
          className="w-20 my-4"
          src={
            brand.logo2.includes("http")
              ? brand.logo2
              : `${process.env.REACT_APP_API_URL}/img/${brand.logo2}`
          }
          alt=""
        />
        <h1 className="title-card-category">{model}</h1>
        <span>${price}</span>
      </div>
    </Link>
  );
}

export default CardProductCategory;
