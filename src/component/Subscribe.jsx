import React from "react";
import { useSelector } from "react-redux";

export default function Subscribe() {
  const data = useSelector((state) => {
    return state.plansSlice.plans;
  });
  return (
    <div className="container py-20">
      <p className="text-[40px] text-white font-semibold mb-10">
        Subscribe To <span className="text-primary-color"> Plans</span>{" "}
      </p>
      <div
        className="gap-8 text-center flex justify-center max-[800px]:flex-wrap "
        data-aos="zoom-in"
      >
        {data.map((d, index) => {
          return (
            <div
              className={`p-7 flex flex-col gap-7 bg-bg-footer max-[800px]:w-full ${
                index !== 1 && "mt-24"
              }`}
              key={d.id}
            >
              {" "}
              {d.recommended === true && (
                <p className="bg-white p-[10px] font-semibold text-[14px] rounded-md">
                  Recommended
                </p>
              )}
              <p className="text-white font-semibold text-[24px]">{d.title}</p>
              <p className="text-gray-300">Plan Exp. {d.exp} </p>
              <p className="text-white font-semibold text-[24px]">
                ₹{d.price} /
                <span className="text-[16px] text-gray-300">Month</span>
              </p>
              <p className="text-gray-300">Streaming </p>
              <div className="group cursor-pointer relative inline-block overflow-hidden border border-primary-color p-[10px] w-full focus:outline-none focus:ring">
                <span className="absolute inset-y-0 -left-[1px] w-[2px] bg-primary-color transition-all group-hover:w-full group-active:bg-primary-color"></span>

                <span className="relative text-sm font-medium text-primary-color transition-colors group-hover:text-white">
                  Select Plan
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
