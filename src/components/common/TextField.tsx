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
         className={`flex items-center justify-between gap-2 border duration-200 rounded-md cursor-pointer max-h-[62px] relative ${
            !focus ? "border-primary-400" : "border-primary-600"
         }`}
         tabIndex={0}
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}
      >
         {startIcon && <img className="w-6 h-6 absolute left-5" src={startIcon} alt="" />}
         <input
            className={`w-full placeholder:font-normal leading-[1.44em] px-5 placeholder:text-primary-600 py-[18px] ${
               startIcon ? "pl-16" : ""
            }`}
            {...rest}
         />
         {arrow && (
            <img
               className={`absolute right-5 duration-200`}
               src="/images/freccia data.svg"
               alt=""
            />
         )}
      </div>
   );
}

export default TextField;
