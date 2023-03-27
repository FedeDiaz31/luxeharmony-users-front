import React, { useState,useEffect } from 'react'
import CategoryProducts from '../components/CategoryProducts'
import FilterCategory from '../components/FilterCategory'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function Category() {
const name = useParams().name;
const [products,setProducts]=useState([])
console.log(products)

useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/categories/${name}`,
      });
      setProducts(response.data);
    };
    getProducts();
  }, []);

return (
    <div className='w-[100vw] h-[100vh]'>
        <div className='w-100vw h-[40vh] bg-bgSecondaryColor'></div>
        <CategoryProducts/>
    </div>
  )
}

export default Category