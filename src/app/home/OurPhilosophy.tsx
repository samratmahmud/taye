/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const philosophys = [
   {
      title: "La nostra filosofia.",
      describtion: `Ci impegniamo a offrirti un'esperienza culinaria
      straordinaria, dove la qualità del cibo e delle bevande
      si fonde con un'atmosfera unica. Ogni momento trascorso
      da noi è pensato per regalarti un'indimenticabile
      degustazione di eccellenza e comfort, rendendo il tuo
      tempo da Tayè veramente speciale.`,
   },
   {
      title: "filosofia. La nostra",
      describtion: `Ci impegniamo a offrirti un'esperienza culinaria
      straordinaria, dove la qualità del cibo e delle bevande
      si fonde con un'atmosfera unica. Ogni momento trascorso
      da noi è pensato per regalarti un'indimenticabile
      degustazione di eccellenza e comfort, rendendo il tuo
      tempo da Tayè veramente speciale.`,
   },
   {
      title: "filosofia. La nostra",
      describtion: `Ci impegniamo a offrirti un'esperienza culinaria
      straordinaria, dove la qualità del cibo e delle bevande
      si fonde con un'atmosfera unica. Ogni momento trascorso
      da noi è pensato per regalarti un'indimenticabile
      degustazione di eccellenza e comfort, rendendo il tuo
      tempo da Tayè veramente speciale.`,
   },
];

function OurPhilosophy() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
   };

   return (
      <section>
         <div className="container mb-[200px]">
            <Slider {...settings} className="max-w-[1210px] mx-auto px-0.5l">
               {philosophys.map(({title, describtion}, index) => (
                  <div key={index} className="my-1">
                     <div className="flex items-center justify-center gap-5">
                        <img src="/images/forma sinistra.svg" alt="" />
                        <h2 className="text-7xl font-medium leading-[1.4em] mb-1.5">
                           {title}
                        </h2>
                        <img src="/images/forma sinistra.svg" alt="" />
                     </div>
                     <p className="text-4xl leading-[1.4em] text-center font-thin">
                        {describtion}
                     </p>
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   );
}

export default OurPhilosophy;
