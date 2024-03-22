/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export interface ButtonProps {
   name?: string;
   path: string;
   icon?: string;
}

function Button(props: ButtonProps) {
   const {name, path, icon} = props;

   return (
      <Link
         href={path}
         className="flex gap-1 items-center justify-center hover:no-underline px-6 group"
      >
         <p className="text-md font-normal">{name}</p>
         <div className="border border-primary-400 rounded-full p-1 group-hover:translate-x-2 duration-300">
            <div className="border border-primary-400 rounded-full p-[5px]">
               <img className="w-[15px]" src={icon} alt="" />
            </div>
         </div>
      </Link>
   );
}

export default Button;
