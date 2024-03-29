/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const footerLink = [
   {
      title: "Company",
      links: [
         {
            name: "Terms & Conditions",
            path: "/",
         },
         {
            name: "Privacy Policy",
            path: "/",
         },
      ],
   },
   {
      title: "Pagine",
      links: [
         {
            name: "Filosofia",
            path: "/",
         },
         {
            name: "Menu",
            path: "/",
         },
         {
            name: "Le nostre offerte",
            path: "/",
         },
         {
            name: "Prenotazione",
            path: "/",
         },
      ],
   },
   {
      title: "Contatti",
      links: [
         {
            name: "taye@info.it",
            path: "/",
         },
         {
            name: "+39 3489888635",
            path: "",
         },
         {
            name: "+011394723749295",
            path: "",
         },
      ],
   },
   {
      title: "Canali Social",
      iconG: [
         {
            icon: "/images/facebook.svg",
            path: "https://www.facebook.com/",
         },
         {
            icon: "/images/Instagram.svg",
            path: "https://twitter.com/",
         },
         {
            icon: "/images/tiktok.svg",
            path: "https://www.tiktok.com/en/",
         },
      ],
   },
];

function Footer() {
   return (
      <footer className="bg-gray-800">
         <div className="border-y border-primary-400 pt-9 pb-11">
            <div className="container">
               <div className="grid lg:grid-cols-11 grid-cols-4 gap-x-6 md:gap-y-12 gap-y-6">
                  <div
                     data-aos="fade-right"
                     className="col-span-4 sm:col-span-2 lg:col-span-3 lg:max-w-[260px]"
                  >
                     <div className="lg:text-5xl md:text-[36px] text-[31px] leading-[0.81em] md:leading-[1.4em] font-medium hover:no-underline uppercase mb-5 md:mb-0">
                        tayè.
                     </div>
                     <p className="md:text-lg text-base leading-[1.41em] font-extralight">
                        Siamo aperti tutti i giorni della settimana dalle ore 18
                        alle 02. <br /> Puoi trovarci in Corso Moncalieri, 19b,
                        10131 Torino TO
                     </p>
                  </div>
                  {footerLink.map(({title, links, iconG}, index) => (
                     <div
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 200}
                        key={index}
                        className="col-span-4 sm:col-span-2 lg:col-span-2"
                     >
                        <h2 className="text-lg font-semibold leading-[1.23em] mb-2.5">
                           {title}
                        </h2>
                        {links && (
                           <div className="flex flex-col gap-[11px]">
                              {links.map(({name, path}, index) => (
                                 <Link
                                    href={path}
                                    key={index}
                                    className="text-base md:leading-[1.3em] leading-[1.41em]"
                                 >
                                    {name}
                                 </Link>
                              ))}
                           </div>
                        )}
                        {iconG && (
                           <div className="flex gap-0.5">
                              {iconG.map(({icon, path}, index) => (
                                 <Link
                                    href={path}
                                    key={index}
                                    className="px-1.5 py-1"
                                    target="_blank"
                                 >
                                    <img
                                       className="hover:opacity-80 duration-200"
                                       src={icon}
                                       alt=""
                                    />
                                 </Link>
                              ))}
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="text-lg font-extralight leading-[1.32em] text-center md:py-8 py-7">
            Copyright © 2024 tayè
         </div>
      </footer>
   );
}

export default Footer;
