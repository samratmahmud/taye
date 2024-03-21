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
      <section className="bg-gray-800">
         <hr className="border border-primary-400 w-full mb-8" />
         <div className="container mb-11">
            <div className="grid grid-cols-5">
               <div className="max-w-[250px]">
                  <Link href="/" className="text-5xl font-medium">
                     tayè.
                  </Link>
                  <p className="text-lg font-extralight">
                     Siamo aperti tutti i giorni della settimana dalle ore 18
                     alle 02. <br /> Puoi trovarci in Corso Moncalieri, 19b,
                     10131 Torino TO
                  </p>
               </div>
               {footerLink.map(({title, links, iconG}, index) => (
                  <div key={index} className="">
                     <h2 className="text-lg font-semibold mb-2.5">{title}</h2>
                     {links && (
                        <div className="flex flex-col gap-2.5">
                           {links.map(({name, path}, index) => (
                              <Link href={path} key={index}>
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
                              >
                                 <img src={icon} alt="" />
                              </Link>
                           ))}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
         <hr className="border border-primary-400 w-full" />
         <div className="text-lg font-extralight text-center py-8">
            Copyright © 2024 tayè
         </div>
      </section>
   );
}

export default Footer;
