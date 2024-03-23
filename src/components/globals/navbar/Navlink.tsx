/* eslint-disable @next/next/no-img-element */
import useNavbarEffect from "@/hooks/useNavbarEffect";
import Link from "next/link";
import React, {useState} from "react";

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
   const [visible, setVisible] = useState(false);

   return (
      <div className="flex gap-4 items-center justify-between">
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
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="flex items-center gap-1.5 text-md font-medium leading-[1.3em] border hover:no-underline border-primary-400 py-[9px] px-4 rounded-full hover:bg-primary-400 duration-300"
         >
            <p>Prenota</p>
            <img
               className="mt-0.5"
               src={`${
                  visible ? "images/Group 210.svg" : "/images/Group 197 (1).svg"
               }`}
               alt=""
            />
         </Link>
      </div>
   );
}

export default Navlink;
