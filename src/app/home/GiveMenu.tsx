/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import Titles from "@/components/common/Titles";
import React from "react";

const menus = [
   {
      title: "TAYÈRE DEL CONTADINO",
      price: "€18",
      describtion:
         "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
      iconG: [
         "/images/Group 143.svg",
         "/images/path402.svg",
         "/images/Group 141.svg",
         "/images/Group 140.svg",
      ],
   },
   {
      title: "TAYÈRE DEL MARE",
      price: "€26",
      describtion:
         "Selezione di salmone affumicato, gamberi, calamari, acciughe.",
      iconG: ["/images/Group 143.svg"],
   },
   {
      title: "TAYÈRE MEDITERRANEO",
      price: "€22",
      describtion:
         "Prosciutto crudo, mozzarella di bufala, pomodorini, olive, pesto.",
   },
   {
      title: "TAYÈRE VEGANO",
      price: "€15",
      describtion: "Hummus, pomodorini, olive, noci, verdure grigliate.",
   },
   {
      title: "TAYèRE DEI FORMAGGI LOCALI",
      price: "€20",
      describtion: "Assortimento di formaggi regionali, miele, noci.",
   },
   {
      title: "TAYèRE DOLCEZZA",
      price: "€16",
      describtion: "Selezione di frutta fresca, biscotti, cioccolato fondente.",
   },
];

function GiveMenu() {
   return (
      <section>
         <div className="container mb-[100px]">
            <div className="mb-[60px]">
               <Titles title="Dal nostro menu" />
            </div>
            <div className="max-w-[1200px] mx-auto">
               <div className="grid grid-cols-2 gap-x-36 gap-y-10 mb-[60px]">
                  {menus.map(({title, price, describtion, iconG}, index) => (
                     <div key={index} className="group">
                        <div className="flex gap-2.5 items-center">
                           <h3 className="text-xl font-medium text-primary-400 leading-[1.42em] flex-shrink-0">
                              {title}
                           </h3>
                           <div className="flex flex-col gap-1 w-full">
                              <hr className="border border-primary-400 w-full" />
                              <hr className="border border-primary-400 w-full" />
                           </div>
                           <p className="text-xl font-medium leading-[1.42em] text-primary-400">
                              {price}
                           </p>
                        </div>
                        <p className="max-w-[465px] leading-[1.41em]">
                           {describtion}
                        </p>
                        {iconG && (
                           <div className="flex items-center gap-1.5 mt-1">
                              <span className="w-1.5 h-1.5 bg-white group-hover:bg-primary-400 duration-200 rounded-full" />
                              <div className="flex gap-1.5">
                                 {iconG.map((icon, index) => (
                                    <img key={index} src={icon} alt="" />
                                 ))}
                              </div>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
               <div className="flex justify-center">
                  <Button name="Scopri" path="/" icon="/images/Group 201.svg" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default GiveMenu;
