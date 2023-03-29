import React from "react";

function CategoryProducts({ products }) {
  return (
    <div className="w-[60vw] h-[100vh] bg-bgFourthColor m-auto">
      {products.map((e) => (
        <h2>{e.model}</h2>
      ))}
    </div>
  );
}

export default CategoryProducts;
