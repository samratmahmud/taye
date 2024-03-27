/* eslint-disable @next/next/no-img-element */
"use client";
import React, {Fragment, useState} from "react";
import {Listbox, Transition} from "@headlessui/react";

interface SelectFieldProps
   extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   label?: string;
   icon?: string;
   options: string[];
}

function SelectField(props: SelectFieldProps) {
   const {label, className, options, type, icon, ...rest} = props;

   const [selected, setSelected] = useState(options[0]);

   return (
      <Listbox
         value={selected}
         as="div"
         className={`flex flex-col gap-1 ${className}`}
         onChange={(value) => setSelected(value)}
      >
         {({open}) => (
            <>
               {label && (
                  <b
                     className={`text-sm duration-100 font-medium ${
                        open ? "text-primary-600" : "text-gray-950"
                     }`}
                  >
                     {label}
                  </b>
               )}
               <div className="relative">
                  <Listbox.Button as={Fragment}>
                     <div
                        role="button"
                        className="w-full placeholder:font-normal leading-[1.44em] border border-primary-400 focus:border-primary-600 duration-200 rounded-md py-[18px] px-5 flex gap-2 items-center justify-between"
                        tabIndex={0}
                     >
                        <img src={icon} alt="" />
                        <span>{selected}</span>
                        <img className={`duration-200`} src="/images/freccia data.svg" alt="" />
                     </div>
                  </Listbox.Button>

                  <Transition
                     enter="transition duration-100 ease-out"
                     enterFrom="transform scale-95 opacity-0"
                     enterTo="transform scale-100 opacity-100"
                     leave="transition duration-75 ease-out"
                     leaveFrom="transform scale-100 opacity-100"
                     leaveTo="transform scale-95 opacity-0"
                  >
                     <Listbox.Options as={Fragment}>
                        <div
                           aria-label="Option panel"
                           className="absolute w-full bg-gray-950 z-20 translate-y-1 shadow-6xl rounded-[10px] overflow-hidden py-2"
                        >
                           {options.map((option, index) => (
                              <Listbox.Option as="div" key={index} value={option}>
                                 <div role="button" className="px-3 py-1.5 hover:bg-neutral-600/10">
                                    {option}
                                 </div>
                              </Listbox.Option>
                           ))}
                        </div>
                     </Listbox.Options>
                  </Transition>
               </div>
            </>
         )}
      </Listbox>
   );
}

export default SelectField;
