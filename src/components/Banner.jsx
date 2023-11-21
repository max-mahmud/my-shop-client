import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { all_banners } from "../store/Reducers/homeReducer";
const Banner = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(all_banners());
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full md-lg:mt-6">
      <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="w-full flex flex-wrap md-lg:gap-8">
          <div className="w-full">
            <div className="my-8">
              <Carousel autoPlay={true} infinite={true} arrows={true} showDots={true} responsive={responsive}>
                {banners.map((img, i) => (
                  <Link
                    className="lg-md:h-[440px] h-auto w-full block"
                    key={i}
                    to={`/product/details/${img.link}`}
                  >
                    <img src={img.banner} alt="" />
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
