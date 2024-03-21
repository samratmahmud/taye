import Titles from "@/components/common/Titles";
import React from "react";

const contactDetails = [
   {
      title: "Chiamaci",
      describtion: ["+39 3489888635", "+011394723749295"],
   },
   {
      title: "Scrivici",
      describtion: ["taye@info.it"],
   },
   {
      title: "Siamo situati in",
      describtion: ["Corso Moncalieri, 19b", "10131 Torino TO"],
   },
];

const opening = [
   {
      title: "Orari di apertura.",
      items: [
         {
            name: "Lunedì",
            value: "Chiuso",
         },
         {
            name: "Martedì",
            value: "18 - 00",
         },
         {
            name: "Mercoledì",
            value: "18 - 00",
         },
         {
            name: "Giovedì",
            value: "18 - 01",
         },
         {
            name: "Venerdì",
            value: "18 - 02",
         },
         {
            name: "Sabato",
            value: "18 - 03",
         },
         {
            name: "Domenica",
            value: "18 - 03",
         },
      ],
   },
];

function Contact() {
   return (
      <section>
         <div className="container mb-[72px]">
            <div className="max-w-[1266px] mx-auto">
               <h3 className="text-5xl leading-[1.05em] font-normal text-primary-400 font-bitter-rose text-center">
                  Vieni a trovarci!
               </h3>
               <div className="mb-14">
                  <Titles title="Contattaci." />
               </div>
               <div className="flex gap-28 items-center">
                  <div className="flex flex-col gap-5 w-[50%]">
                     {contactDetails.map(({title, describtion}, index) => (
                        <div key={index}>
                           <h2 className="text-4xl font-semibold leading-[1.4em] text-primary-400 text-center">
                              {title}
                           </h2>
                           <div>
                              {describtion.map((item, index) => (
                                 <p
                                    key={index}
                                    className="text-4xl leading-[1.4em] font-light text-center"
                                 >
                                    {item}
                                 </p>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="w-[50%] pt-10 pb-20 px-[74px]">
                     {opening.map(({title, items}, index) => (
                        <div key={index}>
                           <h2 className="text-4xl font-semibold  leading-[1.4em] text-primary-400 text-center mb-[50px]">
                              {title}
                           </h2>
                           <div>
                              {items.map(({name, value}, index) => (
                                 <div
                                    key={index}
                                    className="flex justify-between"
                                 >
                                    <h3 className="text-4xl font-light  leading-[1.4em]">
                                       {name}
                                    </h3>
                                    <p className="font-normal text-4xl  leading-[1.4em]">
                                       {value}
                                    </p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
