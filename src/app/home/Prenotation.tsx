import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import Titles from "@/components/common/Titles";
import React from "react";

function Prenotation() {
   return (
      <section>
         <div className="container mb-[77px]">
            <div className="max-w-[1400px] mx-auto bg-gray-800 py-32 px-[135px] rounded-lg bg-Prenotation-bg bg-cover bg-center">
               <h3 className="text-5xl leading-[1.05em] font-normal text-primary-400 font-bitter-rose text-center">
                  Il tuo tavolo
               </h3>
               <div className="mb-[50px]">
                  <Titles title="Prenotation." />
               </div>
               <div className="grid grid-cols-3 gap-x-[38px] gap-y-6 mb-5">
                  <TextField type="text" placeholder="Nome*" />
                  <TextField type="text" placeholder="Email*" />
                  <TextField
                     type="number"
                     placeholder="Telefono (consigliato)"
                  />
                  <TextField type="text" placeholder="2*" />
                  <TextField type="text" placeholder="2*" />
                  <TextField type="text" placeholder="2*" />
               </div>
               <p className="text-center font-normal leading-[1.41em] mb-3">
                  Ti verrà inviata una conferma della sua prenotazione
               </p>
               <div className="flex items-center gap-4 justify-center mb-14">
                  <input
                     className="w-4 h-4 cursor-pointer"
                     type="checkbox"
                     id="checkbox"
                  />
                  <p className="font-normal leading-[1.42em]">
                     Iscriviti alla newsletter
                  </p>
               </div>
               <div className="flex justify-center">
                  <Button
                     name="Prenota"
                     path="/"
                     icon="/images/Group 201.svg"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Prenotation;
