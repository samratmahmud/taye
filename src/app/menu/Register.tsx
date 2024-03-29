"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import Link from "next/link";
import React from "react";
import NewsLetterForm from "./NewsLetterForm";

function Register() {
   return (
      <section>
         <div className="container">
            <div className="grid lg:grid-cols-2 items-center gap-6 mb-5 xl:mb-0">
               <NewsLetterForm />
               <div className="relative lg:block hidden" data-aos="zoom-in">
                  <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <h1 className="text-10xl font-syncopate font-bold uppercase text-center leading-[0.81em] mb-3">
                        tayè
                     </h1>
                     <p className="text-sm font-bold font-syncopate text-center leading-[1.08em]">
                        WINES - DRINK - FOOD
                     </p>
                  </div>
                  <div className="relative z-0">
                     <span
                        className="absolute top-0 left-0 right-0 h-full opacity-60"
                        style={{
                           backgroundImage:
                              "linear-gradient(#000000 50%, #000000 50%)",
                        }}
                     />
                     <img src="/images/cocktails.jpg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Register;
