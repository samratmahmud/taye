/* eslint-disable @next/next/no-img-element */
import Titles from "@/components/common/Titles";
import React from "react";

const offerName = [
   {
      background: "/images/cocktails.jpg",
      title: "Cocktails",
      describtion: "gusto in ogni goccia.",
   },
   {
      background: "/images/desserts.jpg",
      title: "Wines Beers",
      describtion: "gusto che si sorseggia.",
   },
   {
      background: "/images/tayeri.jpg",
      title: "Tayeri",
      describtion: "sapori senza confini.",
   },
   {
      background: "/images/desserts.jpg",
      title: "Desserts",
      describtion: "dolcezza che incanta.",
   },
];

function OurOffer() {
   return (
      <section>
         <div className="mb-44">
            <div className="mb-11">
               <Titles title=" Le nostre offerte." />
            </div>
            <div className="grid grid-cols-4">
               {offerName.map(({background, title, describtion}, index) => (
                  <div
                     key={index}
                     className="min-h-[688px] px-5 bg-cover bg-no-repeat flex flex-col justify-center items-center relative z-0"
                     style={{backgroundImage: `url(${background})`}}
                  >
                     <span
                        className="h-full absolute top-0 left-0 right-0 -z-10"
                        style={{
                           backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.68) 100%)`,
                        }}
                     />
                     <h2 className="text-12xl font-normal text-primary-400 font-bitter-rose text-center">
                        {title}
                     </h2>
                     <p className="text-3xl">{describtion}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default OurOffer;
