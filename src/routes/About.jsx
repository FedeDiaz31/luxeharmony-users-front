import React from 'react'
import Banner from '../assets/img/bannerAbout.jpg'
import logo from '../assets/img/logoWhite.png'
import AboutCard from '../components/AboutCard'
import ottaPic from '../assets/img/otta.jpg'
import magguerPic from '../assets/img/fotomagguer.png'
import reactLogo from '../assets/img/react.png'
import nachoPic from '../assets/img/nachoPic.jpg'

function About() {
  return (
    <div>
        <div className='w-[100vw] h-[50vh]'>
            <img src={Banner} className='w-[100%] h-[100%] object-cover' alt="" />
        </div>
        <div className='w-[100vw] h-[35vh] bg-bgSecondaryColor  text-bgPrimaryColor'>
            <h1 className='about-title text-center pt-4'>ABOUT THE PROJECT</h1>
            <p className='text-center w-[50vw] m-auto mt-3 text-xl'>Welcome to our "About Us" page, where we'll provide you with an insight into how we brought to life a website for a musical instrument store. Our team had the opportunity to work on a challenging yet exciting project, and we are thrilled to share with you the behind-the-scenes process of how we made it happen.</p>
            <img src={logo} className='w-60 m-auto mt-7' alt="" />
        </div>
        <div className='desktop:flex desktop:flex-wrap desktop:w-[60vw] desktop:m-auto desktop:gap-6 desktop:justify-center desktop:py-10'>
          <AboutCard linkedin={'magguer'} img={magguerPic} title={'Martin Telechea '} paragraph={'Full Stack Developer Jr. || ReactJs · NodeJs · TailwindCss'} />
          <AboutCard linkedin={'alan-torino'} img={ottaPic} title={'Alan Torino'} paragraph={'Full Stack Developer | JavaScript | React | Redux | NodeJs | Express'} />
          <AboutCard linkedin={'federico-díaz-morel-810a73202'} img={ottaPic} title={'Federico Díaz Morel'} paragraph={'Junior Developer & Contador Público'} />
          <AboutCard linkedin={'ignacio-vidal-856627236'} img={nachoPic} title={'Ignacio Vidal'} paragraph={'Full Stack Developer Jr | HTML | CSS | Java Script | Node.js | MySQL | MongoDB | React'} />
          <AboutCard linkedin={'juan-manuel-ottado'} img={ottaPic} title={'Juan Manuel Ottado'} paragraph={'Full Stack Developer & Web Designer | NodeJS | React | Adobe'} />
        </div>
        <div className='w-[100vw] bg-bgSecondaryColor h-[40vh] flex items-center justify-center flex-col text-bgPrimaryColor'>
           <h1 className='technologies-title'>TECHNOLOGIES</h1>
           <div className='flex w-[100vw] items-center justify-center'>
                <img src={reactLogo} className='flex w-[4vw] m-10' alt="" />
                <img src={reactLogo} className='flex w-[4vw] m-10' alt="" />
                <img src={reactLogo} className='flex w-[4vw] m-10' alt="" />
                <img src={reactLogo} className='flex w-[4vw] m-10' alt="" />
                <img src={reactLogo} className='flex w-[4vw] m-10' alt="" />
           </div>
        </div>
    </div>
  )
}

export default About