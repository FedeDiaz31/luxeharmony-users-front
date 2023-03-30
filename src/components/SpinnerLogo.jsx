import React from 'react'
import Logo from '../assets/img/logoBlack.png'
import {motion} from 'framer-motion'

function SpinnerLogo() {
  return (
    <div className='w-full h-full absolute  flex items-center justify-center'>
        <motion.img
         initial={{ opacity:0}}
         animate={{ opacity:1  }}
         transition={{ ease: "linear", duration:3, repeatDelay:3 , repeat: Infinity ,stiffness:100}}
        className='w-[10rem]' src={Logo} alt="" />
    </div>
  )
}

export default SpinnerLogo