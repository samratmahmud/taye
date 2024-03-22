/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, {Fragment} from "react";
import MenuItems, {MenuItemsProps} from "./MenuItems";
import Button, {ButtonProps} from "@/components/common/Button";

export interface MenuGroupProps {
   thambnail: string;
   thambnailI?: string;
   title: string;
   menuItem: MenuItemsProps[];
   menuItemP?: MenuItemsProps[];
   action?: ButtonProps[];
}

function MenuBar(props: MenuGroupProps) {
   const {thambnail, thambnailI, title, menuItem, menuItemP, action} = props;

   return (
      <Fragment>
         <div className="flex even:flex-row-reverse gap-11 justify-between mb-12">
            <div className="w-[50%]">
               <div>
                  <h2 className="text-9xl font-normal text-primary-400 font-bitter-rose leading-[1.06em] mb-10">
                     {title}
                  </h2>
               </div>
               <div className="flex flex-col gap-[41px]">
                  {menuItem.map(
                     ({titles, price, describtion, iconG}, index) => (
                        <MenuItems
                           key={index}
                           titles={titles}
                           price={price}
                           describtion={describtion}
                           iconG={iconG}
                        />
                     )
                  )}
               </div>
            </div>
            <div
               className={`w-[50%] ${menuItemP ? "flex flex-col gap-20" : ""}`}
            >
               <div className="relative">
                  <div className="absolute top-[48%] right-[22%]">
                     <img className="" src={thambnail} alt="" />
                  </div>
                  <div className="flex justify-end group-even:items-start -mt-12">
                     <img className="" src={thambnailI} alt="" />
                  </div>
               </div>
               {menuItemP && (
                  <div className="flex flex-col gap-10 pt-[65%]">
                     {menuItemP.map(
                        ({titles, price, describtion, iconG}, index) => (
                           <MenuItems
                              key={index}
                              titles={titles}
                              price={price}
                              describtion={describtion}
                              iconG={iconG}
                           />
                        )
                     )}
                  </div>
               )}
            </div>
         </div>
         {action && (
            <div>
               {action.map(({name, path, icon}, index) => (
                  <Button key={index} path={path} name={name} icon={icon} />
               ))}
            </div>
         )}
      </Fragment>
   );
}

export default MenuBar;
