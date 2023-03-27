import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import CardCarousel from "../components/CardCarousel";
import CategoriesContainer from "../components/CategoriesContainer";
import Warranty from "../components/Warranty";
import BrandsContainer from "../components/BrandsContainer";
import { useRef } from "react";

function Home() {
  document.title = ` Home | LuxeHarmony `;
  const brands = useRef(null);

  /*   Scroll to movieList */
  const handleScrollHome = () => {
    brands.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div className="absolute w-full z-10 h-[40vh] bg-gradient-to-t from-bgSecondaryColor bottom-0"></div>
        <div className="absolute w-full z-20 h-[100vh] flex items-end justify-center pb-14">
          <div>
            <div className="w-full flex justify-center h-[14rem] items-end pb-8">
              <button onClick={handleScrollHome}>
                <img
                  className="relative w-20 h-20 opacity-30 hover:opacity-75 top-[70px] hover:top-[75px] transition-all duration-200 "
                  src="https://i.ibb.co/8mqFZ22/arrows1.png"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="z-0">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2500}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
        >
          <div>
            <img
              className=" h-[99.85vh]  object-cover shadow "
              src="https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL21jY2FydHktNTk0LTIwMjEtZ2FsbGVyeS0xXzIwMjEtMDMtMjAtMTU0MDA3LmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6ODIsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjE2MDAsImhlaWdodCI6ODAwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0="
              alt="banner1"
            />
          </div>
          <div className="h-[99.85vh] z-0 pt-16  bg-bgSecondaryColor">
            <img
              className="h-[100vh]  object-cover shadow"
              src="https://mmrmagazine.com/site/wp-content/uploads/KRK_CLASSIC-Expansion1-scaled.jpg"
              alt="banner2"
            />
          </div>
          <div className="h-[99.85vh] z-0 pt-16  bg-bgSecondaryColor">
            <img
              className=" h-[100vh]  object-cover shadow"
              src="https://static01.nyt.com/images/2021/11/13/arts/12silksonic-review/12silksonic-review-videoSixteenByNineJumbo1600.jpg"
              alt="banner3"
            />
          </div>
        </Carousel>
      </div>
      <Warranty />
      <div ref={brands} className={"pt-20"}>
        <CategoriesContainer />
      </div>
      <BrandsContainer />
      <CardCarousel />
    </div>
  );
}

export default Home;
