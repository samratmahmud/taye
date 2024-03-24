/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   icon?: string;
   arrow?: string;
}

function TextField(props: TextFieldProps) {
   const [focus, setFocus] = React.useState(false);
   const {icon, arrow, ...rest} = props;

   return (
      <div
         className={`flex items-center justify-between gap-2 border   duration-200 rounded-md py-[18px] px-5 ${
            !focus ? "border-primary-400" : "border-primary-600"
         }`}
         tabIndex={0}
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}
      >
         {icon && <img className="flex-shrink-0" src={icon} alt="" />}
         <input
            className="w-full placeholder:font-normal placeholder:text-primary-600 leading-[1.44em]"
            {...rest}
         />
         <img src="/images/freccia data.svg" alt="" />
      </div>
   );
}

export default TextField;
