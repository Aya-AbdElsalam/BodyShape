import React from "react";
import join1 from "../assets/joinUs1.png";
import join2 from "../assets/joinUs2.jpg";

export default function JoinUs() {
  return (
    <div className="container py-20 flex justify-between gap-3">
      <div data-aos="fade-right">
        <p className="text-[40px] text-white font-semibold mb-10">
          Why Join With <span className="text-primary-color"> Us?</span>{" "}
        </p>
        <ul className="text-[24px] text-white font-semibold list-disc ml-[20px] leading-[2] sm:ml-[200px]">
          <li className="marker:text-primary-color">Best Gym</li>
          <li className="marker:text-primary-color"> Experts Coach</li>
          <li className="marker:text-primary-color">Good Workout Facilities</li>
          <li className="marker:text-primary-color">
            Consultation With Experts
          </li>
        </ul>
        <button className="bg-bg-linear py-[10px] px-[30px] mt-20 w-full sm:w-auto text-white sm:ml-[100px] border border-primary-color hover:bg-bg-hover">
          See More Benifits{" "}
        </button>
      </div>
      <div
        className="flex flex-col items-end gap-8 justify-end max-[770px]:hidden"
        data-aos="fade-left"
      >
        <img
          src={join1}
          alt="join"
          width={"180px"}
          height={"215px"}
          className="mr-20"
        />
        <img
          src={join2}
          alt="join"
          width={"180px"}
          height={"215px"}
          className="h-[215px] w-[200px]"
        />
      </div>
    </div>
  );
}
