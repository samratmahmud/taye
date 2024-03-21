/* eslint-disable @next/next/no-img-element */
import React from "react";

interface titlesProps {
   title: string;
}

function Titles(props: titlesProps) {
   const {title} = props;

   return (
      <div className="flex items-center justify-center gap-5">
         <img src="/images/forma sinistra.svg" alt="" />
         <h2 className="text-7xl font-medium leading-[1.4em] mb-1.5">
            {title}
         </h2>
         <img src="/images/forma sinistra.svg" alt="" />
      </div>
   );
}

export default Titles;
