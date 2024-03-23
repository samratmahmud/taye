import React from "react";
import Header from "../home/Header";
import MenuGroups from "./menu_group";
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
