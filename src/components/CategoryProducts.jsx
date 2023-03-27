import React from 'react'


function CategoryProducts({products}) {
  console.log(products)
    
  return (
    <div className='w-[60vw] h-[100vh] bg-bgFourthColor m-auto'>
      {products.map(e => <h1>{e.model}</h1>)}
    </div>
  )
}

export default CategoryProducts