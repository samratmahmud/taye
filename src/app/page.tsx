import React from "react";
import Header from "./home/Header";
import OurPhilosophy from "./home/OurPhilosophy";
import PersonDetails from "./home/PersonDetails";
import OurOffer from "./home/OurOffer";
import GiveMenu from "./home/GiveMenu";

function page() {
   return (
      <main>
         <Header />
         <OurPhilosophy />
         <PersonDetails />
         <OurOffer />
         <GiveMenu />
      </main>
   );
}

export default page;
