/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {ReactNode} from "react";

export interface ButtonProps {
   path: string;
   icon?: string;
   children?: ReactNode;
}

function Button(props: ButtonProps) {
   const {children, path, icon} = props;

   return (
      <Link
         href={path}
         className="flex gap-1 items-center justify-center hover:no-underline px-6 group"
      >
         <p className="text-md font-normal">{children}</p>
         <div className="border border-primary-400 rounded-full p-1 group-hover:translate-x-2 duration-300">
            <div className="border border-primary-400 rounded-full p-[5px]">
               <img className="w-[15px]" src={icon} alt="" />
            </div>
         </div>
      </Link>
   );
}

export default Button;
