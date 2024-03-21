/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface MenuItemsProps {
   titles: string;
   price: string;
   describtion: string;
   iconG?: string[];
}

function MenuItems(props: MenuItemsProps) {
   const {titles, price, describtion, iconG} = props;

   return (
      <div className="group">
         <div className="flex gap-2.5 items-center">
            <h3 className="text-xl font-medium text-primary-400 leading-[1.42em] flex-shrink-0">
               {titles}
            </h3>
            <div className="flex flex-col gap-1 w-full">
               <hr className="border border-primary-400 w-full" />
               <hr className="border border-primary-400 w-full" />
            </div>
            <p className="text-xl font-medium leading-[1.42em] text-primary-400">
               {price}
            </p>
         </div>
         <p className="max-w-[465px] leading-[1.41em]">{describtion}</p>
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
   );
}

export default MenuItems;
