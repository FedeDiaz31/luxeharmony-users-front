import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import chevron from '../assets/img/chevronUp.png'
import chevronDown from '../assets/img/chevronDown.png'


function AboutCard({linkedin,img,title,paragraph}) {
    const [open, setOpen] = useState(false);
    return (
        <div
          className="relative overflow-hidden w-[15vw]"
          target={'blank'}
        >
          <img
            className="w-full h-[300px] tablet:h-[300px] object-cover"
            src={img}
            alt=""
          />
          <div
            className={
              open
                ? "absolute w-[100%] h-[200px] bottom-0  bg-bgSecondaryColor text-textPrimary py-3 transition-all duration-200"
                : "absolute w-[100%]  h-[200px] bottom-[-130px] bg-bgSecondaryColor text-textPrimary py-3 transition-all duration-200"
            }
          >
            <div className='flex items-center justify-between'>
                <h2 className="category-title text-left pl-3 pt-3">{title}</h2>
                {open ? 
                <div onClick={()=>setOpen(false)} className=' text-bgPrimaryColor w-14 h-16 flex items-center justify-center cursor-pointer'>
                    <img className='fill-[#fff] scale-50 ' src={chevron} alt="" />    
                </div> :
                <div onClick={()=>setOpen(true)} className=' text-bgPrimaryColor w-14 h-16 flex items-center justify-center cursor-pointer'>
                    <img className='fill-[#fff] scale-50 ' src={chevronDown} alt="" />   
                </div>}
            </div>
            <p className="text-left px-3 text-sm">{paragraph}</p>
            <Link className='link-about-linkedin ml-3' to={`https://www.linkedin.com/in/${linkedin}`}>Github</Link>
          </div>
        </div>
      );
}






export default AboutCard