import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Categorys = () => {
  const { categorys, loader } = useSelector((state) => state.home);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 992 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 640 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 639, min: 441 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {loader ? (
        <div className="w-[85%] lg:w-[90%] mt-2 h-[220px] mx-auto flex justify-center items-center bg-slate-50">
          <FadeLoader className="scale-125" />
        </div>
      ) : (
        <div className="w-[87%] mx-auto relative">
          <Carousel
            autoPlay={true}
            infinite={true}
            arrows={true}
            responsive={responsive}
            transitionDuration={500}
          >
            {categorys.map((c, i) => (
              <Link className="h-[185px] border block" key={i} to="#">
                <div className="w-full h-full relative p-3">
                  <img src={c.image} alt="img" />
                  <div className="absolute bottom-6 w-full mx-auto font-bold left-0 flex justify-center items-center">
                    <span className="py-[2px] px-6 bg-[#3330305d] text-white">{c.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Categorys;
