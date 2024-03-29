/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface datePickerProps {
   icon?: string;
   value: Date | null;
   onChange: (value: Date | null) => void;
   error?: string | null;
}

function DateField(props: datePickerProps) {
   const {icon, value, onChange, error} = props;

   const [focus, setFocus] = React.useState(false);
   return (
      <label
         className={`flex relative items-center justify-between gap-2 border duration-200 rounded-md cursor-pointer px-5 ${
            error ? "border-red-500" : focus ? "border-primary-600" : "border-primary-400"
         }`}
         role="button"
         tabIndex={0}
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}
      >
         {icon && <img className="flex-shrink-0" src={icon} alt="" />}
         <DatePicker
            selected={value}
            onChange={onChange}
            className="py-[17px] px-5 cursor-pointer w-full"
         />
         {error && (
            <p className="absolute -bottom-5 font-semibold left-0 text-xs text-red-500">{error}</p>
         )}
         <img src="/images/freccia data.svg" alt="" />
      </label>
   );
}

export default DateField;
