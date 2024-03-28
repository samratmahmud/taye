import React from "react";
import Header from "../home/Header";
import MenuGroups from "./Articles";
import Register from "./Register";

function Menupage() {
   return (
      <main>
         <Header title="Il nostro menu '" />
         <MenuGroups />
         <Register />
      </main>
   );
}

export default Menupage;
