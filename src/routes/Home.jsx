import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../animation/animations.css";
import { Carousel } from "react-responsive-carousel";
import CardCarousel from "../components/CardCarousel";
import CategoriesContainer from "../components/CategoriesContainer";
import Warranty from "../components/Warranty";
import BrandsContainer from "../components/BrandsContainer";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  document.title = ` Home | LuxeHarmony `;

  const brands = useRef(null);
  const categories = useRef(null);

  /*   Scroll to movieList */
  const handleScrollCategories = () => {
    categories.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollBrands = () => {
    brands.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="z-0 bg-bgSecondaryColor">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2500}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          swipeable={false}
        >
          <div>
            <div>
              <div className="absolute w-full z-10 h-[70vh] bg-gradient-to-t from-bgSecondaryColor bottom-[-17px]"></div>
              <div className="absolute w-full z-20 h-[100vh] flex items-end justify-center tablet:justify-end tablet:pr-32 pb-20">
                <div>
                  <div className="w-full flex flex-col items-center tablet:items-end h-[14rem] justify-end text-textPrimary">
                    <h3 className="font-bold text-xl mobilXS:text-2xl tablet:text-4xl opacity-75  max-w-[400px] text-center tablet:text-end">
                      SPECIFIC CATEGORIES FOR YOU
                    </h3>
                    <p className="font-light text-lg opacity-75  max-w-[300px] text-center tablet:text-end">
                      Find your perfect instrument.
                    </p>
                    <button
                      className="bg-buttonsPrimaryColor opacity-75 hover:opacity-100 hover:bg-buttonHoverPrimary px-5 py-2 font-semibold text-md mt-5 transition-all duration-200"
                      onClick={handleScrollCategories}
                    >
                      SHOW ALL CATEGORIES
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              className=" h-[99.85vh]  object-cover shadow fade-in bg-bgSecondaryColor"
              src="https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXItaW1hZ2VzL21jY2FydHktNTk0LTIwMjEtZ2FsbGVyeS0xXzIwMjEtMDMtMjAtMTU0MDA3LmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6ODIsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjE2MDAsImhlaWdodCI6ODAwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0="
              alt="banner1"
            />
          </div>
          <div>
            <div>
              <div className="absolute w-full z-10 h-[70vh] bg-gradient-to-t from-bgSecondaryColor bottom-[-17px]"></div>
              <div className="absolute w-full z-20 h-[100vh] flex items-end justify-center tablet:justify-start tablet:pl-36 pb-20">
                <div>
                  <div className="w-full flex flex-col items-center tablet:items-start h-[14rem] justify-end text-textPrimary">
                    <h3 className="font-bold text-xl mobilXS:text-2xl tablet:text-4xl opacity-75  max-w-[400px] text-start">
                      PRO SOUNDS SYSTEMS
                    </h3>
                    <p className="font-light text-lg opacity-75  max-w-[300px] items-center tablet:text-start">
                      Specialists in providing high quality audio equipment for
                      artists and their work environment.
                    </p>
                    <Link
                      className="bg-buttonsPrimaryColor opacity-75 hover:opacity-100 hover:bg-buttonHoverPrimary px-5 py-2 font-semibold text-md mt-5 transition-all duration-200"
                      to={"/categories/audiopro"}
                    >
                      SHOWROOM
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[100vh] object-cover shadow fade-in bg-bgSecondaryColor"
              src="https://i.pinimg.com/originals/36/12/0c/36120cb6a62381a761685cdbd178b0d8.jpg"
              alt="banner2"
            />
          </div>
          <div>
            <div>
              <div className="absolute w-full z-10 h-[70vh] bg-gradient-to-t from-bgSecondaryColor bottom-[-17px]"></div>
              <div className="absolute w-full z-20 h-[100vh] flex items-end justify-center tablet:justify-end tablet:pr-32 pb-20">
                <div>
                  <div className="w-full flex flex-col items-center mobilXS:items-end h-[14rem] justify-end text-textPrimary">
                    <h3 className="font-bold text-xl mobilXS:text-2xl tablet:text-4xl opacity-75">
                      TOP BRANDS IN MARKET
                    </h3>
                    <p className="font-light text-lg opacity-75 text-center mobilXS:text-end">
                      Aliance is the name. <br /> Our brands, your sounds.
                    </p>
                    <button
                      className="bg-buttonsPrimaryColor opacity-75 hover:opacity-100 hover:bg-buttonHoverPrimary px-5 py-2 font-semibold text-md mt-5 transition-all duration-200"
                      onClick={handleScrollBrands}
                    >
                      SHOW ALL BRANDS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <img
              className=" h-[100vh]  object-cover shadow fade-in bg-bgSecondaryColor"
              src="https://static01.nyt.com/images/2021/11/13/arts/12silksonic-review/12silksonic-review-videoSixteenByNineJumbo1600.jpg"
              alt="banner3"
            />
          </div>
        </Carousel>
      </div>
      <div>
        <Warranty />
      </div>
      <div ref={categories} className="pt-14">
        <CategoriesContainer />
      </div>
      <div ref={brands} className="mt-14">
        <BrandsContainer />
      </div>
      <div className="my-14 px-10 tablet:px-20">
        <CardCarousel />
      </div>
    </div>
  );
}

export default Home;
