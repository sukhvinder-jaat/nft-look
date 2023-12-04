import React from "react";
import { BlueHeart } from "./common/Icons";
import { ExploreData } from "./common/Helper";
const ExploreTop = () => {
  return (
    <>
      <div className="container mt_47">
        <h2 className=" ff_sans text-black fs_5xl fw-bold lh_normal mb-0">
          Explore top NFT
        </h2>
        {ExploreData.map((data, i) => {
          return (
            <div
              className="explore_top_card bg-white pe-2 d-flex flex-md-row flex-column align-items-center mt_13"
              key={i}
            >
              <img
                src={data.image}
                alt="explore1"
                className="explore_image mb-md-0 mb-3"
              />
              <div className="explore_para_spacing">
                <p className=" ff_sans fs_3xl fw-semibold lh_normal mb-2">
                  Bonorum Malorum
                </p>
                <p className=" text-black ff_sans fs_md fw-semibold lh_120 opacity_07 mb-0">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <div className=" d-flex justify-content-between align-items-center mt_explore_para">
                  <p className=" opacity_07 fw-semibold ff_sans fs_2xl lh_normal mb-0">
                    $33,915
                  </p>
                  <div className=" d-flex align-items-center me-4">
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
      </div>
    </>
  );
};

export default ExploreTop;
