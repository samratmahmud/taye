/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   startIcon?: string;
   arrow?: boolean;
   error?: string | null;
}

function TextField(props: TextFieldProps) {
   const {startIcon, arrow, error, ...rest} = props;
   const [focus, setFocus] = useState(false);

   return (
      <div
         className={`flex items-center justify-between gap-2 border duration-200 rounded-md cursor-pointer max-h-[62px] relative ${
            error ? "border-red-500" : !focus ? "border-primary-400" : "border-primary-600" // Modify border color based on error
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
         {error && (
            <div className="absolute -bottom-[18px] left-0 text-xs font-semibold text-red-500">
               {error}
            </div>
         )}
      </div>
   );
}

export default TextField;
