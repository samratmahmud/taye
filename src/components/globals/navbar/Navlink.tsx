/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

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

function Navlink() {
   return (
      <div className="flex gap-2 items-center justify-between">
         <div className="flex gap-4">
            {navLink.map(({title, path}, index) => (
               <Link
                  href={path}
                  key={index}
                  className="text-md font-medium hover:text-gray-600 duration-300 hover:no-underline p-2"
               >
                  {title}
               </Link>
            ))}
         </div>
         <Link
            href="/"
            className="flex items-center gap-1.5 text-md font-medium leading-[1.3em] border hover:no-underline border-primary-400 py-[9px] px-4 rounded-full hover:bg-primary-400 duration-300 group"
         >
            <p>Prenota</p>
            <img className="mt-0.5 group-hover:block hidden" src="images/Group 210.svg" alt="" />
            <img
               className="mt-0.5 group-hover:hidden block"
               src="/images/Group 197 (1).svg"
               alt=""
            />
         </Link>
      </div>
   );
}

export default Navlink;
