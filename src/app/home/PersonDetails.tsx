/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const personInfo = [
   {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      name: "MATTEO ROSSI",
      title: "barman",
   },
   {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      name: "Martin Coper",
      title: "barman",
   },
   {
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      name: "Jesikah Martin",
      title: "barman",
   },
];

function PersonDetails() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
   };

   return (
      <section>
         <div className="container mb-52">
            <div className="flex gap-10 justify-between items-center">
               <div>
                  <img src="/images/Group 200.jpg" alt="" />
               </div>
               <Slider {...settings} className="max-w-[515px]">
                  {personInfo.map(({content, name, title}, index) => (
                     <div key={index} className="px-2.5">
                        <div className="text-11xl text-primary-400 font-semibold leading-[0.95em] text-center mb-2.5">
                           ”
                        </div>
                        <p className="text-4xl text-center leading-[1.4em] mb-10">
                           {content}
                        </p>
                        <p className="text-2xl font-normal text-primary-400 text-center uppercase leading-[1.4em]">
                           {name}
                        </p>
                        <p className="text-2xl font-normal text-center leading-[1.4em]">
                           {title}
                        </p>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   );
}

export default PersonDetails;
