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

function Navbar() {
   return (
      <nav className="fixed left-0 right-0 top-7 z-[1080]">
         <div className="container">
            <div className="border-2 border-primary-400 rounded-full py-3.5 pl-9 pr-4 bg-gray-950/60 max-w-[535px] mx-auto">
               <div className="flex gap-2 items-center justify-between">
                  <div className="flex gap-8">
                     {navLink.map(({title, path}, index) => (
                        <Link
                           href={path}
                           key={index}
                           className="text-md font-medium"
                        >
                           {title}
                        </Link>
                     ))}
                  </div>
                  <Link
                     href="/"
                     target="_blank"
                     className="flex items-center gap-1.5 text-md font-medium leading-[1.3em] border hover:no-underline border-primary-400 py-[9px] px-4 rounded-full"
                  >
                     <p>Prenota</p>
                     <img
                        className="mt-1"
                        src="/images/Group 197 (1).svg"
                        alt=""
                     />
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
