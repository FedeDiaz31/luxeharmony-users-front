import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import CardCarousel from "../components/CardCarousel";
import CategoriesContainer from "../components/CategoriesContainer";
import Warranty from "../components/Warranty";
import BrandsContainer from "../components/BrandsContainer";

function Home() {
  document.title = ` Home | LuxeHarmony `;
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={true}
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
      <Warranty />
      <CategoriesContainer />
      <BrandsContainer />
      <CardCarousel />
    </div>
  );
}

export default Home;
