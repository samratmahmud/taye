/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface datePickerProps {
   icon?: string;
}

function DateField(props: datePickerProps) {
   const {icon} = props;

   const [focus, setFocus] = React.useState(false);
   const [startDate, setStartDate] = useState<Date | null>(new Date());

   return (
      <label
         className={`flex items-center justify-between gap-2 border duration-200 rounded-md cursor-pointer px-5 ${
            !focus ? "border-primary-400" : "border-primary-600"
         }`}
         role="button"
         tabIndex={0}
         onFocus={() => setFocus(true)}
         onBlur={() => setFocus(false)}
      >
         {icon && <img className="flex-shrink-0" src={icon} alt="" />}
         <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="py-[17px] px-5 cursor-pointer w-full"
         />
         <img src="/images/freccia data.svg" alt="" />
      </label>
   );
}

export default DateField;
