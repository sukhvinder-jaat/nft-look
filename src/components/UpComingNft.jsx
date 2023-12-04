import React from "react";
import { UpComingData } from "./common/Helper";

const UpComingNft = () => {
  return (
    <>
      <div className="container upcoming_space">
        <div className="ps-0 gap_12 d-flex flex-lg-row flex-column ">
          {UpComingData.map((data, i) => {
            return (
              <div
                className={`bg_upcoming_property upcoming_box_spacing d-flex flex-column align-items-center ${data.bgImage}`}
              >
                <h2 className="ff_sans text-white text-center fs_5xl fw-bold lh_normal">
                  Top NFT Market places
                </h2>
                <p className=" text-white ff_sans fs_md fw-semibold lh_120 opacity_07 mb-0 max_w_455 text-center mb-5 pb-2">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <button className=" text-center ff_sans fs_lg fw-semibold lh_normal border-0 upcoming_btn bg-white btn_transition rounded-pill">
                  Explore more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UpComingNft;
