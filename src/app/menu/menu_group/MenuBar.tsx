/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, {Fragment, ReactNode} from "react";
import MenuItems, {MenuItemsProps} from "./MenuItems";
export interface MenuGroupProps {
   thambnail: string;
   title: string;
   menuItem: MenuItemsProps[];
   menuItemP?: MenuItemsProps[];
   action?: ReactNode;
}

function MenuBar(props: MenuGroupProps) {
   const {thambnail, title, menuItem, menuItemP, action} = props;

   return (
      <div className="group">
         <div className="flex group-even:flex-row-reverse gap-14 justify-between mb-12">
            <div className="w-[50%]">
               <div>
                  <h2 className="text-9xl font-normal text-primary-400 font-bitter-rose leading-[1.06em] mb-10">
                     {title}
                  </h2>
               </div>
               <div className="flex flex-col gap-[41px]">
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
            <div className={`w-[50%] ${menuItemP ? "flex flex-col gap-20" : ""}`}>
               <div className="relative z-0">
                  <div className="">
                     <div className="relative z-10 ">
                        <div className="group-even:block hidden">
                           <img className="" src="/images/forma wines.svg" alt="" />
                           <img className="ml-[106px] -mt-[117px]" src={thambnail} alt="" />
                        </div>
                        <div className="group-even:hidden block">
                           <div className="flex justify-end">
                              <img className="" src="/images/forma cocktails.svg " alt="" />
                           </div>
                           <img className="-mt-24" src={thambnail} alt="" />
                        </div>
                     </div>
                  </div>
               </div>
               {menuItemP && (
                  <div className="flex flex-col gap-10">
                     {menuItemP.map(({titles, price, describtion, iconG}, index) => (
                        <MenuItems
                           key={index}
                           titles={titles}
                           price={price}
                           describtion={describtion}
                           iconG={iconG}
                        />
                     ))}
                  </div>
               )}
            </div>
         </div>
         <div>{action}</div>
      </div>
   );
}

export default MenuBar;
