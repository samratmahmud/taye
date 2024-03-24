/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {ReactNode} from "react";

export interface ButtonProps
   extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
   > {
   path: string;
   icon?: string;
   children?: ReactNode;
}

function Button(props: ButtonProps) {
   const {children, path, icon} = props;

   return (
      <Link
         href={path}
         className="flex gap-1 hover:gap-2.5 duration-300 items-center  hover:no-underline"
      >
         <p className="text-md font-normal">{children}</p>
         <div className="border border-primary-400 rounded-full p-1">
            <div className="border border-primary-400 rounded-full p-[5px]">
               <img className="w-[15px]" src={icon} alt="" />
            </div>
         </div>
      </Link>
   );
}

export default Button;
