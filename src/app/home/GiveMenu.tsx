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
         <div className="container xl:mb-[100px] lg:mb-20 md:mb-16 mb-11">
            <div className="lg:mb-[60px] mb-10">
               <Titles title="Dal nostro menu" />
            </div>
            <div className="max-w-[1200px] mx-auto">
               <div className="grid lg:grid-cols-2 xl:gap-x-36 gap-x-16 lg:gap-y-10 gap-y-5 lg:mb-[60px] mb-10">
                  {menus.map(({title, price, describtion, iconG}, index) => (
                     <div key={index} className="group">
                        <div className="flex gap-2.5 items-center mb-1 lg:mb-0">
                           <h3 className="text-xl font-medium text-primary-400 leading-[1.42em] lg:flex-shrink-0">
                              {title}
                           </h3>
                           <div className="lg:flex hidden flex-col gap-1 w-full">
                              <hr className="border border-primary-400 w-full" />
                              <hr className="border border-primary-400 w-full" />
                           </div>
                           <p className="text-xl font-medium leading-[1.42em] text-primary-400 hidden lg:block">
                              {price}
                           </p>
                        </div>
                        <p className="max-w-[465px] leading-[1.41em] mb-1 lg:mb-0">
                           {describtion}
                        </p>
                        <div
                           className={`flex items-center ${
                              iconG ? "justify-between" : "justify-end"
                           }`}
                        >
                           {iconG && (
                              <div className="inline-block">
                                 <div className="flex items-center gap-1.5 mt-1">
                                    <span className="w-1.5 h-1.5 bg-white group-hover:bg-primary-400 duration-200 rounded-full" />
                                    <div className="flex gap-1.5">
                                       {iconG.map((icon, index) => (
                                          <img key={index} src={icon} alt="" />
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           )}
                           <p className="text-[21px] font-medium leading-[1.2em] text-primary-400 inline lg:hidden">
                              {price}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="flex justify-center">
                  <Button path="/" icon="/images/Group 201.svg">
                     Scopri
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default GiveMenu;
