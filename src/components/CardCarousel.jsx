import {React,useRef} from 'react'
import backChevron from '../assets/img/arrowBack.svg'
import forwardChevron from '../assets/img/arrowForward.svg'


function CardCarousel() {
    const containerRef = useRef()


  return (
    <div ref={containerRef} className="w-[80vw] h-[35vh] bg-bgSecondaryColor m-auto pl-5 pr-5 mt-5 overflow-hidden flex flex-row gap-5 items-center scroll-smooth ease-in-out duration-300  ">
        <img onClick={()=>containerRef.current.scrollLeft-=600} className="absolute left-[7vw]  cursor-pointer" src={backChevron} alt="" />
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0 "></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <div className="w-[15vw] h-[90%] bg-bgPrimaryColor flex-shrink-0"></div>
        <img onClick={()=>containerRef.current.scrollLeft+=600} className="absolute right-[7vw]  cursor-pointer" src={forwardChevron} alt="" />
    </div>
  )
}

export default CardCarousel