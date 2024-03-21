import React from "react";
import Header from "./home/Header";
import OurPhilosophy from "./home/OurPhilosophy";
import PersonDetails from "./home/PersonDetails";
import OurOffer from "./home/OurOffer";
import GiveMenu from "./home/GiveMenu";
import Prenotation from "./home/Prenotation";
import Contact from "./home/Contact";
import Map from "./home/Map";

function Homepage() {
   return (
      <main>
         <Header />
         <OurPhilosophy />
         <PersonDetails />
         <OurOffer />
         <GiveMenu />
         <Prenotation />
         <Contact />
         <Map />
      </main>
   );
}

export default Homepage;
