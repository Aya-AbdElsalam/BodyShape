import React, { useEffect } from "react";
import bg from "../assets/bg.jpg";
import plans1 from "../assets/gym.png";
import plans2 from "../assets/plans2.png";
import plans3 from "../assets/plans3.png";
import plans4 from "../assets/plans4.png";
import plans5 from "../assets/plans5.png";
import plans6 from "../assets/plans6.png";

export default function Plans() {
  return (
    <div className="relative">
      <img
        src={bg}
        width={"100%"}
        height={"100%"}
        className="absolute  opacity-25 object-none w-full h-full object-bottom"
        style={{ transform: "rotateX(180deg)" }}
        alt="background"
      />
      <div className="container py-20">
        <p className="text-[40px] text-white font-semibold mb-10">
          Fitness Plans &<span className="text-primary-color"> Nutritions</span>{" "}
        </p>
        <div className="flex items-center justify-center flex-wrap min-[917px]:flex-nowrap">
          <div
            className="flex flex-col text-center min-[770px]:border-r-2  border-primary-color"
            data-aos="fade-up"
          >
            <div className=" flex flex-col gap-4 p-5 lg:p-8 box-content items-center justify-center w-[257px] max-[770px]:basis-full border-b-2  border-primary-color">
              <img src={plans1} width={"60px"} height={"60px"} alt="gym" />
              <p className="font-semibold text-white">Weight Loss</p>
              <p className="text-gray-300 text-[10px]">
                Weight loss can have causes that aren't due to underlying
                disease. Examples include dieting, exercise, malnutrition or
                lack of access to food.
              </p>
            </div>
            <div className="flex  max-[770px]:border-b-2 border-primary-color flex-col gap-4 p-5 lg:p-8  items-center box-content justify-center w-[257px] max-[770px]:basis-full">
              <img src={plans2} width={"60px"} height={"60px"} alt="gym" />
              <p className="font-semibold text-white">Classic Yoga</p>
              <p className="text-gray-300 text-[10px]">
                The term "yoga" in the Western world often denotes a modern form
                of Hatha yoga and a posture-based physical fitness,
                stress-relief.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col text-center min-[917px]:border-r-2 border-primary-color"
            data-aos="fade-down"
          >
            <div className="flex flex-col gap-4 p-5 lg:p-8  items-center justify-center box-content w-[257px] max-[770px]:basis-full border-b-2  border-primary-color">
              <img src={plans3} width={"60px"} height={"60px"} alt="gym" />
              <p className="font-semibold text-white">Cycling</p>
              <p className="text-gray-300 text-[10px]">
                Cycling, also, when on a two-wheeled bicycle, called bicycling
                or biking, is the use of cycles for transport, recreation,
                exercise or sport.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-5 lg:p-8 items-center justify-center w-[257px] box-content max-[770px]:basis-full">
              <img src={plans4} width={"60px"} height={"60px"} alt="gym" />
              <p className="font-semibold text-white">Body Building</p>
              <p className="text-gray-300 text-[10px]">
                Bodybuilding is the use of progressive resistance exercise to
                control and develop one's muscles by muscle hypertrophy for
                aesthetic purposes.
              </p>
            </div>
          </div>{" "}
          <div
            className="flex min-[917px]:flex-col text-center max-[917px]:border-t-2 border-primary-color flex-wrap"
            data-aos="fade-up"
          >
            <div className="flex max-[770px]:border-b-2 flex-col gap-4 p-5 lg:p-8 items-center justify-center w-[257px] max-[770px]:border-r-0 max-[917px]:border-r-2 max-[770px]:basis-full box-content min-[917px]:border-b-2 border-primary-color">
              <img src={plans5} width={"60px"} height={"60px"} alt="gym" />
              <p className="font-semibold text-white">Musculation</p>
              <p className="text-gray-300 text-[10px]">
                Weight training is a common type of strength training for
                developing the strength, size of skeletal muscles and
                maintenance of strength.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-5 lg:p-8  items-center justify-center w-[257px] max-[770px]:basis-full box-content">
              <img src={plans6} width={"60px"} height={"60px"} alt="gym" />
              <p className="font-semibold text-white">Fitness Running</p>
              <p className="text-gray-300 text-[10px]">
                Running is a method of terrestrial locomotion allowing humans
                and other animals to move rapidly on foot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
