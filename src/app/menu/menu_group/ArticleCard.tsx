/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface ArticleCardProps {
   titles: string;
   price: string;
   describtion: string;
   iconG?: string[];
}

function ArticleCard(props: ArticleCardProps) {
   const {titles, price, describtion, iconG} = props;

   return (
      <div className="group">
         <div className="gap-2.5 items-end mb-[3px] md:mb-0">
            <h3
               className="text-xl inline font-medium text-primary-400 leading-[1.42em] flex-shrink-0 relative z-10"
               dangerouslySetInnerHTML={{
                  __html: `<div style="background: #0B1315; display: inline;">${insertLineBreakAfterSlash(
                     titles
                  )}</div> `,
               }}
            />

            <div className="md:flex hidden gap-2.5 items-center -mt-[26px]">
               <div className="flex flex-col gap-1 w-full opacity-50">
                  <hr className="border border-primary-400 w-full" />
                  <hr className="border border-primary-400 w-full" />
               </div>
               <p className="text-xl font-medium !leading-[1.42em] text-primary-400">{price}</p>
            </div>
         </div>
         <p className="max-w-[465px] leading-[1.41em] mb-1 md:mb-0">{describtion}</p>
         <div className={`flex items-center ${iconG ? "justify-between" : "justify-end"}`}>
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
            <p className="text-[21px] font-medium leading-[1.4em] text-primary-400 inline md:hidden">
               {price}
            </p>
         </div>
      </div>
   );
}

export default ArticleCard;

function insertLineBreakAfterSlash(str: string) {
   // Use regular expression to find all occurrences of "/"
   return str.replace(/\//g, " / <br />");
}
