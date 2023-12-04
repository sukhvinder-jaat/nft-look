import React from "react";
import { BlueHeart } from "./common/Icons";
import { LookOutData } from "./common/Helper";
import Slider from "react-slick";
const LookOut = () => {
  const lookOutSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mt_87">
        <h2 className=" ff_sans text-black fs_5xl fw-bold lh_normal mb-0">
          Top NFT to look out for in 2022
        </h2>
        <div className="row px-2">
          <Slider {...lookOutSlider}>
            {LookOutData.map((data, i) => {
              return (
                <div className="col-auto px-1 py_40" key={i}>
                  <div className="look_card bg-white w-100">
                    <div className=" d-flex justify-content-center">
                      <img
                        src={data.image}
                        alt="bonorum1"
                        className="w-full look_out_image"
                      />
                    </div>

                    <p className="text-black ff_sans fs_xl fw-semibold lh_normal mb-2">
                      Bonorum Malorum
                    </p>
                    <div className=" d-flex justify-content-between align-items-center mb_18">
                      <p className=" opacity_07 fw-semibold ff_sans fs_sm lh_normal mb-0">
                        $33,915
                      </p>
                      <div className=" d-flex align-items-center">
                        <BlueHeart />
                        <p className=" opacity_07 fw-semibold ff_sans fs_xs lh_normal mb-0 ms-1">
                          915
                        </p>
                      </div>
                    </div>
                    <button className="look_out_btn rounded-pill bg-transparent text-black ff_sans fw-semibold opacity_06 fs_lg  text-center btn_transition d-flex justify-content-center align-items-center lh_normal mx-auto">
                      BUY NOW
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LookOut;
