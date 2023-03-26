import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import CardCarousel from "../components/CardCarousel";
import CategoriesContainer from "../components/CategoriesContainer";
import Warranty from "../components/Warranty";

function Home() {
  document.title = "Home | Gibson ";

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
        <div className="w-[100vw] z-0 pt-16 h-[57vh] bg-bgSecondaryColor">
          <img
            className=" h-[100vh] desktop:h-[52.2vh] desktop:w-[70vw] object-cover shadow "
            src="https://images.ctfassets.net/m8onsx4mm13s/2w1gwJzJw1lAOXNGpGhKLw/1683e570d82908eb6a9d89ec46bfa569/Gibson-BJA-LPjr_Homepage-Masthead.jpg"
            alt="banner1"
          />
        </div>
        <div className="w-[100vw] z-0 pt-16  bg-bgSecondaryColor">
          <img
            className="h-[100vh] desktop:h-[52.2vh] desktop:w-[70vw] object-cover shadow"
            src="https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"
            alt="banner2"
          />
        </div>
        <div className="w-[100vw] z-0 pt-16  bg-bgSecondaryColor">
          <img
            className=" h-[100vh] desktop:h-[52.2vh] desktop:w-[70vw] object-cover shadow"
            src="https://image.tmdb.org/t/p/original/kODNw6GJNdgldUMEhKPlCw8wQCr.jpg"
            alt="banner3"
          />
        </div>
      </Carousel>
      <Warranty />
      <CategoriesContainer />
      <CardCarousel />
    </div>
  );
}

export default Home;
