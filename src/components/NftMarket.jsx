import React, { useRef } from "react";
import { MarketingData } from "./common/Helper";
import Slider from "react-slick";
import { LeftArrow, RightArrow } from "./common/Icons";
const NftMarket = () => {
  const NftSlider = useRef();
  const marketingSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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
        <h2 className="ff_sans text-black fs_5xl fw-bold lh_normal mb_md_65 mb_40">
          Top NFT Market places
        </h2>
        <div className=" position-relative">
          <div
            className=" position-absolute marketing_right_arrow btn_transition d-xl-block d-none"
            onClick={() => NftSlider.current.slickNext()}
          >
            <RightArrow />
          </div>
          <div
            className=" position-absolute marketing_left_arrow btn_transition d-xl-block d-none"
            onClick={() => NftSlider.current.slickPrev()}
          >
            <LeftArrow />
          </div>
          <Slider
            {...marketingSlider}
            ref={NftSlider}
            className="gap_24 nft_market_slider"
          >
            {MarketingData.map((data, i) => {
              return (
                <div className="px_12">
                  <div className="market_box position-relative" key={i}>
                    <img
                      src={data.image}
                      alt="marketing1"
                      className=" position-absolute top-50 start-50 translate-middle"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className=" d-flex justify-content-center align-items-center mt-5">
            <div
              className="d-xl-none d-block btn_transition hover_scale"
              onClick={() => NftSlider.current.slickPrev()}
            >
              <LeftArrow />
            </div>
            <div
              className="btn_transition d-xl-none d-block ms-5 hover_scale"
              onClick={() => NftSlider.current.slickNext()}
            >
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftMarket;
