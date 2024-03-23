/* eslint-disable @next/next/no-img-element */
"use client";
import useNavbarEffect from "@/hooks/useNavbarEffect";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const navLink = [
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

   const nav = useNavbarEffect(
      "py-7 bg-transparent",
      "md:py-3 pt-4 pb-2 bg-black/30 backdrop-blur-[8px]"
   );

   const itemsWrapper = useNavbarEffect("py-3.5", "py-2.5");

   return (
      <nav className={`fixed left-0 right-0 z-[1080] duration-300 ${nav}`}>
         <div className="container">
            <div className="flex md:items-center justify-between">
               <Link href="/">
                  <img src="/images/logo in alto sx.svg" alt="" />
               </Link>
               <div
                  className={`hidden md:block border-2 border-primary-400 rounded-full duration-300 pl-9 pr-4 bg-gray-950/60 max-w-[535px] mx-auto ${itemsWrapper}`}
               >
                  <div className="flex gap-2 items-center justify-between">
                     <div className="flex gap-8">
                        {navLink.map(({title, path}, index) => (
                           <Link
                              href={path}
                              key={index}
                              className="text-md font-medium hover:text-gray-600 duration-300 hover:no-underline"
                              target="_blank"
                           >
                              {title}
                           </Link>
                        ))}
                     </div>
                     <Link
                        href="/"
                        target="_blank"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                        className="flex items-center gap-1.5 text-md font-medium leading-[1.3em] border hover:no-underline border-primary-400 py-[9px] px-4 rounded-full hover:bg-primary-400 duration-300"
                     >
                        <p>Prenota</p>
                        <img
                           className="mt-0.5"
                           src={`${
                              open
                                 ? "images/Group 210.svg"
                                 : "/images/Group 197 (1).svg"
                           }`}
                           alt=""
                        />
                     </Link>
                  </div>
               </div>
               <div className="md:hidden cursor-pointer pl-2">
                  <img src="/images/Group 209.svg" alt="" />
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
