import React, { useEffect, useState } from "react";
import { CrossIcon, MenuIcon, NavSearch } from "./common/Icons";
const MyNav = () => {
  const [menu, setMenu] = useState(false);

  // Function to handle the menu open/close
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    // Update the body's style when the menuOpen state changes
    document.body.style.overflow = menu ? "hidden" : "auto";

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  return (
    <div>
      {" "}
      <nav className="position-sticky z-100 top-0 start-0 py_5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="gap-4 d-flex z-1 align-items-center">
              <a href="#">
                <div className="nav_logo bg_grayD9 rounded-circle"></div>
              </a>
            </div>
            <div className="d-flex align-items-center nav_search rounded-pill d-lg-none d-sm-block d-none overflow-hidden">
              <NavSearch />
              <input
                type="text"
                className="ms-2  border-0 color_black0F fs_md ff_sans fw-normal lh-1 nav_input"
                placeholder="Search..."
              />
            </div>
            <div className={`${menu ? "show-nav" : "nav-fix"}`}>
              <div
                className="d-lg-none crossIconset"
                onClick={() => setMenu(false)}
              >
                <CrossIcon />
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center nav_search rounded-pill w-100 me_lg_60 d-lg-block d-none overflow-hidden">
                  <NavSearch />
                  <input
                    type="text"
                    className="ms-2  border-0 color_black0F fs_md ff_sans fw-normal lh-1 nav_input"
                    placeholder="Search..."
                  />
                </div>
                <ul className=" list-unstyled d-flex flex-lg-row flex-column gap_29 align-items-center me_lg_60 mb-0">
                  <li>
                    <a
                      onClick={() => setMenu(false)}
                      className="hoverLineAlign text-black position-relative text-decoration-none text-nowrap opacity_06 opacity_06 ff_sans fs_md fw-medium"
                      href="#"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setMenu(false)}
                      className="hoverLineAlign text-black position-relative text-decoration-none opacity_06 opacity_06 ff_sans fs_md fw-medium"
                      href="#"
                    >
                      Explore
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setMenu(false)}
                      className="hoverLineAlign text-black position-relative opacity_06 opacity_06 ff_sans fs_md fw-medium text-decoration-none "
                      href="#"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setMenu(false)}
                      className="hoverLineAlign text-black position-relative opacity_06 opacity_06 ff_sans fs_md fw-medium text-decoration-none"
                      href="#"
                    >
                      Activity
                    </a>
                  </li>
                </ul>

                <button
                  className="nav_btn bg-black rounded-pill text-nowrap text-white ff_sans fw-semibold lh-1 d-flex align-items-center justify-content-center fs_lg border-0"
                  href="#"
                  onClick={() => setMenu(false)}
                >
                  SIGN IN
                </button>
              </div>
            </div>
            <div className="d-lg-none">
              <span onClick={() => setMenu(true)}>
                <MenuIcon />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MyNav;
