import React from 'react'
import style from "./HeroSection.module.css"
import { FaRegPlayCircle } from "react-icons/fa";
import heroImg from "../images/heroImg.png";
import heroImg2 from "../images/heroImg2.png";

const HeroSection = () => {
  return (
    <div className={`${style.mid}`}>
        <div className={`${style.part}`}>
            <div className={`${style.star}`}>
                <p className={`${style.para1}`}>
                    Make The Best Financial Decisions
                </p>
                <br />
                <p className={`${style.para2}`}>
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
                <br/>
                <div className={`flex gap-4`}>
                    <div className="  flex items-end">
                        <a className="btn text-white w-36 ">Get Started →</a>
                    </div>
                    <div className={`flex justify-center items-center gap-2 ${style.video}`}>
                        <FaRegPlayCircle />
                        <p>Watch Video</p>
                    </div>
                </div>
                <img src={heroImg} alt="heroImg" className="" />
            </div>
            <div>
                <img src={heroImg2} alt="heroImg2" className={``} />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
