import React from 'react'

function FilterCategory() {
  return (
    <div className='w-[20vw] h-[70vh] flex flex-col justify-around text-textPrimary bg-headerAndFooterColor '>
        <div>
            <span>Marca</span>
            <ul>
                <li>Marca1</li>
            </ul>
        </div>
        <div> 
            <span>Precio</span>
             
        </div>
        <div> 
            <span>Highlighted</span>
        </div>
    </div>
  )
}

export default FilterCategory