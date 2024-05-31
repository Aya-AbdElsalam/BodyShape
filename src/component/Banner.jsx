import React from "react";
import bg from "../assets/bg.jpg";
import play from "../assets/play.png";
import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
export default function Banner() {
  return (
    <>
      <div className="h-[100vh] bg-cover relative">
        <img
          src={bg}
          width={"100%"}
          height={"100%"}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="background"
        />
        <div
          className="max-w-[368px] top-[160px] relative md:mx-0 mx-auto"
          data-aos="zoom-in"
        >
          <div className=" md:left-[91px] relative">
            <p className="text-[64px] font-[600] text-white leading-[75.38px]">
              Transform Your Body
            </p>
            <p className="text-[15px] leading-[17.67px] text-gray-300 mt-6">
              We are dedicated to helping you transform your body and mind
              through the power of fitness.
            </p>
            <div className="flex gap-4 mt-20 text-white text-[14px]">
              <button className="bg-bg-linear px-[30px] py-[10px] hover:bg-bg-hover border-2 border-primary-color">
                Get Started
              </button>
              <button className="hover:bg-bg-linear gap-2 group px-[30px] py-[10px] bg-bg-hover border-2 border-primary-color flex justify-center items-center ">
                <img
                  src={play}
                  alt="play"
                  width={"24px"}
                  height={"24px"}
                  className="group-hover:brightness-75"
                />
                <p>Watch Reviews</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="w-[245px] justify-between -top-[40px] bottom-0 relative flex gap-4 items-center bg-primary-color p-[14.5px] before:content-[''] before:absolute before:right-[-59.2px] before:bottom-0 before:border-[30.39px] before:border-l-primary-color before:border-r-transparent before:border-t-primary-color before:border-b-transparent"
      >
        <img
          src={gmail}
          width={"30px"}
          height={"30px"}
          alt="gmail"
          className="cursor-pointer hover:drop-shadow-3xl"
        />
        <img
          src={facebook}
          width={"30px"}
          height={"30px"}
          alt="facebook"
          className="cursor-pointer hover:drop-shadow-3xl"
        />{" "}
        <img
          src={youtube}
          width={"30px"}
          height={"30px"}
          alt="youtube"
          className="cursor-pointer hover:drop-shadow-3xl"
        />
      </div>
    </>
  );
}
