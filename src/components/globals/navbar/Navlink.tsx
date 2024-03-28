/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import NavButton from "./NavButton";

interface NavlinkProps {
   pages: {title: string; path: string}[];
}

function Navlink({pages}: NavlinkProps) {
   return (
      <div className="flex gap-2 items-center justify-between">
         <div className="flex gap-4">
            {pages.map(({title, path}, index) => (
               <Link
                  href={path}
                  key={index}
                  className="text-md font-medium hover:text-gray-600 duration-300 hover:no-underline p-2"
               >
                  {title}
               </Link>
            ))}
         </div>
         <NavButton url="/">Prenota</NavButton>
      </div>
   );
}

export default Navlink;
