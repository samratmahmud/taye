/* eslint-disable @next/next/no-img-element */
import Titles from "@/components/common/Titles";
import React from "react";

const offerName = [
   {
      thumb: "/images/cocktails (1).jpg",
      title: "Cocktails",
      describtion: "gusto in ogni goccia.",
   },
   {
      thumb: "/images/desserts.jpg",
      title: "Wines Beers",
      describtion: "gusto che si sorseggia.",
   },
   {
      thumb: "/images/tayeri.jpg",
      title: "Tayeri",
      describtion: "sapori senza confini.",
   },
   {
      thumb: "/images/desserts (1).jpg",
      title: "Desserts",
      describtion: "dolcezza che incanta.",
   },
];

function OurOffer() {
   return (
      <section>
         <div className="xl:mb-44 lg:mb-36 md:mb-24 sm:mb-20 mb-11">
            <div className="mb-11">
               <Titles title="Le nostre offerte." />
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2">
               {offerName.map(({thumb, title, describtion}, index) => (
                  <div
                     key={index}
                     className="lg:min-h-[670px] sm:min-h-[400px] min-h-[134px] bg-cover bg-center relative z-0"
                     style={{backgroundImage: `url('${thumb}')`}}
                  >
                     <span
                        className="h-full absolute top-0 left-0 right-0 -z-10"
                        style={{
                           backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.68) 100%)`,
                        }}
                     />
                     <div className="absolute xl:px-5 px-3 w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                        <div className="sm:translate-y-[80px] translate-y-10">
                           <h2 className="text-12xl font-normal text-primary-400 font-bitter-rose text-center">
                              {title}
                           </h2>
                           <p className="2xl:text-3xl sm:text-[25px] text-base">
                              {describtion}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default OurOffer;
