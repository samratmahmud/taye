/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface ButtonProps {
   title: string;
   path: string;
   icon?: string;
}

function Button(props: ButtonProps) {
   const {title, path, icon} = props;

   return (
      <Link
         href={path}
         className="flex gap-0.5 items-center justify-center hover:no-underline px-6 group"
      >
         <p className="text-md font-normal">{title}</p>
         <div className="border border-primary-400 rounded-full p-1 group-hover:translate-x-2 duration-300">
            <div className="border border-primary-400 rounded-full p-[5px]">
               <img src={icon} alt="" />
            </div>
         </div>
      </Link>
   );
}

export default Button;
