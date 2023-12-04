import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero_container mx-auto">
        <div className="w-100 bg_hero overflow-hidden pt_38 d-flex flex-column align-items-center px-3">
          <h1 className=" text-white text-center ff_display fs_6xl lh_normal  fw-semibold ">
            "Best New NFT to look out for"
          </h1>
          <p className=" text-white ff_sans text-center fs_md fw-semibold lh_120 opacity_07 mb-0 pt-1 max_w_600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero_circle rounded-circle bg_grayD9"></div>
          <button className="hero_btn rounded-pill bg-transparent text-white ff_sans fw-semibold opacity_06 fs_lg  text-center btn_transition">
            JOIN US
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
