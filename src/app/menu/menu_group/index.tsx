/* eslint-disable @next/next/no-img-element */
import React from "react";
import MenuItems, {MenuItemsProps} from "./MenuItems";

export interface MenuGroupProps {
   thambnail: string;
   title: string;
   menuItem: MenuItemsProps[];
}

function MenuBar(props: MenuGroupProps) {
   const {thambnail, title, menuItem} = props;

   return (
      <div className="flex even:flex-row-reverse gap-11 justify-between">
         <div className="w-[50%]">
            <div>
               <h2 className="text-9xl font-normal text-primary-400 font-bitter-rose leading-[1.06em] mb-10">
                  {title}
               </h2>
            </div>
            <div className="flex flex-col gap-10">
               {menuItem.map(({titles, price, describtion, iconG}, index) => (
                  <MenuItems
                     key={index}
                     titles={titles}
                     price={price}
                     describtion={describtion}
                     iconG={iconG}
                  />
               ))}
            </div>
         </div>
         <div className="w-[50%]">
            <img className="w-full" src={thambnail} alt="" />
         </div>
      </div>
   );
}

export default MenuBar;
