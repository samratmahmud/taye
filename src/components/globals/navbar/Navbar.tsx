/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, {useEffect} from "react";

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
   const [visible, setVisible] = React.useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      };
      onScroll();
      window.addEventListener("scroll", () => onScroll());
   }, []);
   return (
      <nav
         className={`fixed left-0 right-0 z-[1080] duration-300 ${
            visible ? "py-3" : "py-7"
         }`}
      >
         <div className="container">
            <div className="flex items-center justify-between">
               <Link href="/">
                  <img src="/images/logo in alto sx.svg" alt="" />
               </Link>
               <div
                  className={`border-2 border-primary-400 rounded-full duration-300 ${
                     !visible ? "py-3.5" : "py-2.5"
                  } pl-9 pr-4 bg-gray-950/60 max-w-[535px] mx-auto`}
               >
                  <div className="flex gap-2 items-center justify-between">
                     <div className="flex gap-8">
                        {navLink.map(({title, path}, index) => (
                           <Link
                              href={path}
                              key={index}
                              className="text-md font-medium"
                              target="_blank"
                           >
                              {title}
                           </Link>
                        ))}
                     </div>
                     <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-1.5 text-md font-medium leading-[1.3em] border hover:no-underline border-primary-400 py-[9px] px-4 rounded-full hover:bg-gray-400/15 duration-200"
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
         </div>
      </nav>
   );
}

export default Navbar;
