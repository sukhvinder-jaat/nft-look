import React from "react";
import explore1 from "../assets/images/png/explore1.png";
const ExploreTop = () => {
  return (
    <>
      <div className="container mt_47">
        <h2 className=" ff_sans text-black fs_5xl fw-bold lh_normal mb-0">
          Explore top NFT
        </h2>
        <div className="explore_top_card bg-white pe-2 d-flex align-items-center">
          <img src={explore1} alt="explore1" className="explore_image" />
          <div className="ps_30">
            <p className=" ff_sans fs_3xl fw-semibold lh_normal mb-2">
              Bonorum Malorum
            </p>
            <p className=" text-black ff_sans fs_md fw-semibold lh_120 opacity_07 mb-0">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreTop;
