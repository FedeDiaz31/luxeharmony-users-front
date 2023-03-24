import axios from 'axios';
import {React,useEffect,useState} from 'react'
import CategoryHome from './CategoryHome';
import { Link } from 'react-router-dom'


function CategoriesContainer() {
 const [categories,setCategories]= useState([])

    useEffect(() => {
        const getCategories = async () => {
            const response = await axios({
                method: "get",
                url: "http://localhost:8000/categories",
            });
            setCategories(response.data);
        };
        getCategories();
    }, []);

  return (
    <div className=' w-full m-auto text-center  bg-bgSecondaryColor' id='categories-container'>
        <h2 className='category-title text-[#fff] pt-10 pl-[13.5vw] text-left'>SHOP BY CATEGORY</h2>
            <div className='flex items-center justify-center'>
               <CategoryHome title={'For Every Stage'} paragraph={'From your first guitar to your treasured road warrior, Epiphone crafts high-quality instruments musicians can rely on.'} category={'electric'} img={"https://images.ctfassets.net/m8onsx4mm13s/1taJNWPD6h8dy9pEEq9c8e/ff78732df020dcde7c8f88bb4a83a0f9/Artboard_Copy.jpg"}/>
               <CategoryHome title={'For Every Stage'} paragraph={'From your first guitar to your treasured road warrior, Epiphone crafts high-quality instruments musicians can rely on.'} category={'electric'} img={"https://images.ctfassets.net/m8onsx4mm13s/1taJNWPD6h8dy9pEEq9c8e/ff78732df020dcde7c8f88bb4a83a0f9/Artboard_Copy.jpg"}/> 
               <CategoryHome title={'For Every Stage'} paragraph={'From your first guitar to your treasured road warrior, Epiphone crafts high-quality instruments musicians can rely on.'} category={'electric'} img={"https://images.ctfassets.net/m8onsx4mm13s/1taJNWPD6h8dy9pEEq9c8e/ff78732df020dcde7c8f88bb4a83a0f9/Artboard_Copy.jpg"}/> 
               <CategoryHome title={'For Every Stage'} paragraph={'From your first guitar to your treasured road warrior, Epiphone crafts high-quality instruments musicians can rely on.'} category={'electric'} img={"https://images.ctfassets.net/m8onsx4mm13s/1taJNWPD6h8dy9pEEq9c8e/ff78732df020dcde7c8f88bb4a83a0f9/Artboard_Copy.jpg"}/>  
            </div>
    </div>
  )
}

export default CategoriesContainer