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
         <div className="container xl:mb-52 lg:mb-44 md:mb-36 sm:mb-32 mb-[104px]">
            <div className="flex gap-10 justify-between items-center">
               <div data-aos="fade-right" className="hidden lg:block">
                  <img src="/images/Group 200.jpg" alt="" />
               </div>
               <Slider
                  {...settings}
                  className="sm:max-w-[515px] max-w-[315px] mx-auto"
               >
                  {personInfo.map(({content, name, title}, index) => (
                     <div key={index} className="px-2.5">
                        <div className="text-11xl text-primary-400 font-semibold leading-[0.95em] text-center md:mb-2.5">
                           ”
                        </div>
                        <p
                           data-aos="fade-up"
                           className="text-4xl text-center leading-[1.4em] lg:mb-10 md:mb-8 mb-6"
                        >
                           {content}
                        </p>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="150"
                           className="text-2xl font-normal text-primary-400 text-center uppercase leading-[1.4em]"
                        >
                           {name}
                        </p>
                        <p
                           data-aos="fade-up"
                           data-aos-delay="300"
                           className="text-2xl font-normal text-center leading-[1.4em]"
                        >
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
