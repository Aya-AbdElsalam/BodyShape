import React, { useState } from "react";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import logo from "../assets/logo.png";
import close from "../assets/close.png";

import { Link, useLocation } from "react-router-dom";
import menu from "../assets/menu.png";
export default function Header() {
  const [links, setLinks] = useState([
    { link: "/", name: "Home" },
    { link: "/Services", name: "Services" },
    { link: "/About", name: "About" },
    { link: "/Contacts", name: "Contacts" },
  ]);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="absolute w-full top-0 left-0">
      <div className="relative">
        <div className="flex md:justify-center items-center container justify-between">
          <div className="flex justify-center items-center w-fit">
            <img src={gym1} alt="logo" width={"28.5px"} height={"20px"} />
            <img src={logo} width={"143px"} height={"58px"} alt="logo" />
            <img src={gym2} alt="logo" width={"28.5px"} height={"20px"} />
          </div>
          <nav className="md:hidden ">
            <img
              src={open ? close : menu}
              width={"32px"}
              height={"32px"}
              alt="menu"
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            <ul
              className={`w-[95%] flex flex-col gap-4 absolute left-2 bg-white overflow-hidden ${
                open ? "h-[303.3px]" : "h-0"
              }`}
            >
              {links.map((i) => {
                return (
                  <li className="w-full" key={i.name}>
                    <Link
                      onClick={() => {
                        setOpen(false);
                      }}
                      to={i.link}
                      className={`p-3 w-[95%] hover:text-primary-color  h-full inline-block relative before:content-[''] before:w-0 before:transition-all before:bottom-0 before:h-[2px] before:bg-primary-color ${
                        location.pathname == i.link && "before:w-full"
                      } hover:before:w-full before:absolute`}
                    >
                      {i.name}
                    </Link>
                  </li>
                );
              })}
              <li className="bg-bg-linear  hover:bg-bg-hover transition-none border-2 border-primary-color hover:text-white ">
                <Link to={"/"} className="p-[10px] inline-block w-full">
                  Join Us
                </Link>
              </li>{" "}
            </ul>
          </nav>
          <nav className="text-white  grow  justify-end md:flex hidden">
            <ul className="flex gap-3">
              {links.map((i) => {
                return (
                  <li className="" key={i.name}>
                    <Link
                      to={i.link}
                      className={` ${
                        location.pathname == i.link && "before:w-[95%]"
                      } p-3 h-full inline-block relative before:content-[''] before:w-0 before:transition-all before:bottom-0 before:h-[3px] before:bg-primary-color hover:before:w-[95%] before:absolute`}
                    >
                      {i.name}
                    </Link>
                  </li>
                );
              })}
              <li className="bg-bg-linear  hover:bg-bg-hover border-2 border-primary-color ">
                <Link to={"/"} className="p-[10px] inline-block">
                  Join Us
                </Link>
              </li>{" "}
            </ul>
          </nav>
        </div>{" "}
      </div>
    </div>
  );
}
