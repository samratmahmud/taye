import React from "react";
import Header from "../home/Header";
import Articles from "./Articles";
import Register from "./Register";

function Menupage() {
   return (
      <main>
         <Header title="Il nostro menu '" />
         <Articles />
         <Register />
      </main>
   );
}

export default Menupage;
