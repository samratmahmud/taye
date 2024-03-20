import React from "react";
import Header from "./home/Header";
import OurPhilosophy from "./home/OurPhilosophy";
import PersonDetails from "./home/PersonDetails";
import OurOffer from "./home/OurOffer";

function page() {
   return (
      <main>
         <Header />
         <OurPhilosophy />
         <PersonDetails />
         <OurOffer />
      </main>
   );
}

export default page;