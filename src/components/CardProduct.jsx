import React from 'react'

function CardProduct({brand,image,model,price}) {
  return (
    <div className="cardProduct w-[10vw] h-[90%] bg-bgPrimaryColor flex flex-shrink-0 items-center justify-center">
        <h1>{model}</h1>
        <img className="w-[70%]" src={image} alt={brand + model} />
    </div>
  )
}

export default CardProduct