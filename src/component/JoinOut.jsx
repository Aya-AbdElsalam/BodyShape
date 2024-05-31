import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.webp";

import gmail from "../assets/gmail.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
export default function JoinOut() {
  return (
    <div className="container py-20">
      <p className="text-[40px] text-white font-semibold mb-10">
        Join Out<span className="text-primary-color"> Trainer</span>{" "}
      </p>
      <div
        className="flex gap-5 md:justify-center items-center flex-wrap "
        data-aos="zoom-in"
      >
        <div className="lg:w-[278px] w-[200px] relative group overflow-hidden grow sm:grow-0 h-[300px]">
          <img
            src={team1}
            alt="team1"
            width={"100%"}
            height={"100%"}
            className="group-hover:brightness-50 w-full h-full"
          />
          <div className="w-fit left-[-100%] absolute bottom-0 group-hover:left-0 flex gap-4 items-center bg-primary-color p-4 before:content-[''] before:absolute before:right-[-61px] before:bottom-0 before:border-[31.5px] before:border-l-primary-color before:border-r-transparent before:border-t-primary-color before:border-b-transparent">
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
        </div>
        <div className="lg:w-[278px] relative w-[200px] group overflow-hidden grow sm:grow-0 h-[300px]">
          <img
            src={team2}
            alt="team2"
            width={"100%"}
            height={"100%"}
            className="group-hover:brightness-50 w-full h-full"
          />
          <div className="w-fit left-[-100%] absolute bottom-0 group-hover:left-0 flex gap-4 items-center bg-primary-color p-4 before:content-[''] before:absolute before:right-[-61px] before:bottom-0 before:border-[31.5px] before:border-l-primary-color before:border-r-transparent before:border-t-primary-color before:border-b-transparent">
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
        </div>{" "}
        <div className="lg:w-[278px] relative group w-[200px] overflow-hidden grow sm:grow-0 h-[300px]">
          <img
            src={team3}
            alt="team3"
            width={"100%"}
            height={"100%"}
            className="group-hover:brightness-50 w-full h-full"
          />
          <div className="w-fit left-[-100%] absolute bottom-0 group-hover:left-0 flex gap-4 items-center bg-primary-color p-4 before:content-[''] before:absolute before:right-[-61px] before:bottom-0 before:border-[31.5px] before:border-l-primary-color before:border-r-transparent before:border-t-primary-color before:border-b-transparent">
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
        </div>
      </div>
    </div>
  );
}
