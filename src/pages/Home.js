import React from "react";
import Banner from "../component/Banner";
import JoinOut from "../component/JoinOut";
import Plans from "../component/Plans";
import JoinUs from "../component/JoinUs";
import Subscribe from "../component/Subscribe";

export default function Home() {
  return (
    <>
      <Banner />
      <Plans />
      <Subscribe />
      <JoinOut />
      <JoinUs />
    </>
  );
}
