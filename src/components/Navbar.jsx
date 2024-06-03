import React from "react";
import style from "./Navbar.module.css";
import "daisyui/dist/full.css"; // Import DaisyUI CSS here if needed
import logo from "../images/logo.png"; // Adjust the path according to your project structure

const Navbar = () => {
  return (
    <div className={`${style.back} ${style.mid}`}>
      <div className={`navbar bg-base-100 ${style.back} w-[1132px]`}>
        <div className="flex items-center w-full">
          <div className="navbar-start flex items-center">
            <div className="dropdown overflow-hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white font-semibold"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </a>
            <div className="hidden lg:flex ml-4">
              <ul className="menu menu-horizontal px-1 text-black font-semibold">
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end ml-auto flex items-end">
            <a className="btn text-white w-36 ">Download</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
