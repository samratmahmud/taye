/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {ButtonHTMLAttributes, ReactNode} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   path?: string;
   icon?: string;
   children?: ReactNode;
   as?: string;
}

function Button(props: ButtonProps) {
   const {children, path, icon, as, ...rest} = props;

   const Element = as || Link;

   return (
      // @ts-ignore
      <Element
         {...(path ? {href: path} : {})}
         {...rest}
         className="flex gap-1 hover:gap-2.5 duration-300 items-center  hover:no-underline"
      >
         <p className="text-md font-normal">{children}</p>
         <div>
            <div className="spinner spinner-3">
               <img className="" src={icon} alt="" />
            </div>
         </div>
      </Element>
   );
}

export default Button;
