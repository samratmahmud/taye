/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   startIcon?: string;
   arrow?: boolean;
}

function TextField(props: TextFieldProps) {
   const {startIcon, arrow, ...rest} = props;
   const [focus, setFocus] = React.useState(false);

   return (
      <div
         className={`flex items-center justify-between gap-2 border   duration-200 rounded-md cursor-pointer px-5 ${
            !focus ? "border-primary-400" : "border-primary-600"
         }`}
         tabIndex={0}
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}
      >
         {startIcon && <img className="flex-shrink-0" src={startIcon} alt="" />}
         <input
            className="w-full placeholder:font-normal placeholder:text-primary-600 leading-[1.44em] py-[18px] px-5"
            {...rest}
         />
         {arrow && (
            <img
               className={`duration-200 ${focus ? "rotate-180" : ""}`}
               src="/images/freccia data.svg"
               alt=""
            />
         )}
      </div>
   );
}

export default TextField;
