import React from "react";
import MenuBar from "./menu_group";

const menucards = [
   {
      thambnail: "/images/Group 203.png",
      title: "Cocktails",
      menuItem: [
         {
            titles: "NEGRONI TORINESE",
            price: "€10",
            describtion: "Vermouth rosso, Bitter, Gin, scorza d'arancia.",
         },
         {
            titles: "MANGO TANGO",
            price: "€12",
            describtion:
               "Vodka, succo di mango fresco, sciroppo di lime, foglie di menta.",
         },
         {
            titles: "APEROL SPRITZ RINFRESCANTE",
            price: "€9",
            describtion: "Aperol, Prosecco, soda, arancia a fette.",
         },
         {
            titles: "BASILICO MULE",
            price: "€11",
            describtion:
               "Vodka, succo di lime, sciroppo di basilico, ginger beer.",
         },
         {
            titles: "CILANTRO CITRUS SMASH",
            price: "€13",
            describtion:
               "Rum, cilantro, sciroppo d'agave, succo di lime, angostura.",
         },
      ],
   },
   {
      thambnail: "/images/Group 204.png",
      title: "Wines",
      menuItem: [
         {
            titles: "NEGRONI TORINESE",
            price: "€10",
            describtion: "Vermouth rosso, Bitter, Gin, scorza d'arancia.",
         },
         {
            titles: "MANGO TANGO",
            price: "€12",
            describtion:
               "Vodka, succo di mango fresco, sciroppo di lime, foglie di menta.",
         },
         {
            titles: "APEROL SPRITZ RINFRESCANTE",
            price: "€9",
            describtion: "Aperol, Prosecco, soda, arancia a fette.",
         },
         {
            titles: "BASILICO MULE",
            price: "€11",
            describtion:
               "Vodka, succo di lime, sciroppo di basilico, ginger beer.",
         },
         {
            titles: "CILANTRO CITRUS SMASH",
            price: "€13",
            describtion:
               "Rum, cilantro, sciroppo d'agave, succo di lime, angostura.",
         },
      ],
   },
];

function MenuGroups() {
   return (
      <section>
         <div className="container mb-32">
            <div className="max-w-[1085px] mx-auto flex flex-col gap-[70px]">
               {menucards.map(({title, thambnail, menuItem}, index) => (
                  <MenuBar
                     key={index}
                     thambnail={thambnail}
                     title={title}
                     menuItem={menuItem}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

export default MenuGroups;
