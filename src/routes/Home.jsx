import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {useState,useEffect} from 'react'
import CardCarousel from '../components/CardCarousel'



function Home() {

  return (
    <div>
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
      >
        <div className="w-[100vw] z-0 pt-16 h-[57vh]">
          <img
            className=" h-[100vh] desktop:h-[52.2vh] desktop:w-[70vw] object-cover shadow"
            src="https://image.tmdb.org/t/p/original/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg"
            alt="banner1"
          />
        </div>
        <div className="w-[100vw] z-0 pt-16">
          <img
            className="h-[100vh] desktop:h-[52.2vh] desktop:w-[70vw] object-cover shadow"
            src="https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"
            alt="banner2"
          />
        </div>
        <div className="w-[100vw] z-0 pt-16">
          <img
            className=" h-[100vh] desktop:h-[52.2vh] desktop:w-[70vw] object-cover shadow"
            src="https://image.tmdb.org/t/p/original/kODNw6GJNdgldUMEhKPlCw8wQCr.jpg"
            alt="banner3"
          />
        </div>
      </Carousel>
      <CardCarousel/>
    </div>
  );
}

export default Home;
