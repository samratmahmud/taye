/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, {useState} from "react";
import Navlink from "./Navlink";
import NavButton from "./NavButton";
import useNavbarEffect from "@/hooks/useNavbarEffect";

const pages = [
   {
      title: "Filosofia",
      path: "/",
   },
   {
      title: "Offerte",
      path: "/",
   },
   {
      title: "Menu",
      path: "/",
   },
   {
      title: "Contattaci",
      path: "/",
   },
];

function Navbar() {
   const [open, setOpen] = useState(false);
   const toggle = () => setOpen((prev) => !prev);
   const [tab, setTab] = useState(0);

   const nav = useNavbarEffect(
      "",
      "md:bg-transparent bg-gray-950/60 backdrop-blur-sm",
      300
   );

   return (
      <nav className={`fixed left-0 right-0 z-[1080] duration-300 py-7 ${nav}`}>
         <div className="container">
            <div className="flex md:items-center justify-between px-3">
               <Link href="/">
                  <img
                     className="md:w-auto w-12"
                     src="/images/logo in alto sx.svg"
                     alt=""
                  />
               </Link>
               <div
                  className={`hidden md:block border-2 border-primary-400 rounded-full duration-300 pl-9 pr-4 bg-gray-950/60 w-max mx-auto py-3.5 backdrop-blur-sm overflow-hidden`}
               >
                  <Navlink pages={pages} />
               </div>
               <div className="md:hidden cursor-pointer pl-2" onClick={toggle}>
                  <img src="/images/Group 209.svg" alt="" />
               </div>
            </div>
            <div className="md:hidden">
               <div
                  className={`fixed z-[1040] duration-500 inset-0 ${
                     open
                        ? "translate-x-0 ease-in"
                        : "-translate-x-[calc(100%+24px)] ease-out"
                  }`}
               >
                  <div className="bg-black h-screen w-screen p-8 overflow-y-auto">
                     <div className="flex items-center gap-5 justify-between mb-[136px]">
                        <Link href="/">
                           <img src="/images/logo in alto sx (1).svg" alt="" />
                        </Link>
                        <div onClick={toggle} className="cursor-pointer">
                           <img src="/images/Group 211.svg" alt="" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-2 items-center">
                        <div className="flex flex-col items-center gap-2 mb-10">
                           {pages.map(({title, path}, index) => (
                              <Link
                                 href={path}
                                 key={index}
                                 onClick={() => setTab(index)}
                                 className={`text-[24px] font-medium  duration-300 hover:no-underline leading-[1.42em] py-1.5 ${
                                    tab === index
                                       ? "text-white"
                                       : "text-white/70"
                                 }`}
                              >
                                 {title}
                              </Link>
                           ))}
                        </div>
                        <NavButton url="/">Prenota</NavButton>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
