/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import LocationMap from "./GoogleMap";

function Map() {
   return (
      <section>
         <div className="container lg:mb-[72px] md:mb-12 mb-9">
            <div className="max-w-[1366px] mx-auto">
               <LocationMap />
            </div>
         </div>
      </section>
   );
}

export default Map;
