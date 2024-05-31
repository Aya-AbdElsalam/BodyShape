import React from "react";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import logo from "../assets/logo.png";
import copyRight from "../assets/copyRight.png";
export default function Footer() {
  return (
    <>
      <div className="py-20 bg-bg-footer flex  justify-center min-h-[439px] items-center">
        <div className="container gap-6 flex-wrap flex justify-between w-full">
          <div className="sm:w-[228px] w-full ">
            <div className="flex justify-center items-center w-fit">
              <img src={gym1} alt="logo" width={"28.5px"} height={"20px"} />
              <img src={logo} width={"143px"} height={"58px"} alt="logo" />
              <img src={gym2} alt="logo" width={"28.5px"} height={"20px"} />
            </div>
            <p className="text-white font-bold text-[20px] mt-4">
              Support Your Need To Much Fitness Goal
            </p>
          </div>
          <div className="sm:w-[81px] w-full">
            <p className="text-white font-bold text-[20px] mb-7">Company</p>
            <div className="flex flex-col gap-3 text-gray-300 transition-all">
              <p className="hover:text-white  hover:underline cursor-pointer">
                About
              </p>
              <p className="hover:text-white  hover:underline cursor-pointer">
                Careers
              </p>{" "}
              <p className="hover:text-white  hover:underline cursor-pointer">
                Blogs
              </p>
            </div>
          </div>
          <div className="sm:w-[81px] w-full">
            <p className="text-white font-bold text-[20px] mb-7">Contact</p>
            <div className="flex flex-col gap-3 text-gray-300 transition-all">
              <p className="hover:text-white  hover:underline cursor-pointer">
                Help \FAQ
              </p>
              <p className="hover:text-white  hover:underline cursor-pointer">
                Press
              </p>{" "}
            </div>
          </div>{" "}
          <div className="sm:w-[81px] w-full">
            <p className="text-white font-bold text-[20px] mb-7">More</p>
            <div className="flex flex-col gap-3 text-gray-300 transition-all">
              <p className="hover:text-white  hover:underline cursor-pointer">
                Program
              </p>
              <p className="hover:text-white  hover:underline cursor-pointer">
                Plan
              </p>{" "}
              <p className="hover:text-white  hover:underline cursor-pointer">
                Method
              </p>
            </div>
          </div>
          <div className="sm:w-[228px] w-full">
            <p className="text-white font-bold text-[20px] mb-7">
              Popular Tags
            </p>
            <div className="flex  gap-1 text-white transition-all flex-wrap text-[14px]">
              {[
                "Abs",
                "Workout",
                "Nutrition",
                "Boxing",
                "Gym",
                "Facilities",
                "Plans",
                "Trainers",
              ].map((t) => {
                return (
                  <p
                    key={t}
                    className={`p-[10px] bg-gray-400  border-2 hover:bg-black cursor-pointer text-center ${
                      t.toLowerCase() === "Facilities".toLowerCase()
                        ? "bg-bg-linear border-primary-color hover:bg-bg-hover"
                        : " border-gray-400 "
                    }`}
                  >
                    {t}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-primary-color min-h-[100px] text-white gap-2 text-[20px]">
        <img src={copyRight} alt="copyRight" width={"30px"} height={"30px"} />{" "}
        {new Date().getFullYear() + " All Rights Reserved "}
      </div>
    </>
  );
}
