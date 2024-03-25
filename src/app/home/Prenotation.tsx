import Button from "@/components/common/Button";
import DateField from "@/components/common/DateField";
import SelectField from "@/components/common/SelectField";
import TextField from "@/components/common/TextField";
import Titles from "@/components/common/Titles";
import React from "react";

function Prenotation() {
   return (
      <section>
         <div className="md:container mb-[77px]">
            <div className="max-w-[1400px] mx-auto bg-gray-800 xl:py-32 lg:py-24 md:py-16 py-11 lg:px-[135px] sm:px-12 px-7 rounded-lg bg-Prenotation-bg bg-cover bg-center">
               <h3 className="text-5xl leading-[1.05em] font-normal text-primary-400 font-bitter-rose text-center mb-1 md:mb-0">
                  Il tuo tavolo
               </h3>
               <div className="lg:mb-[50px] md:mb-9 mb-7">
                  <Titles title="Prenotation." />
               </div>
               <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-[38px] md:gap-y-6 gap-y-4 mb-5">
                  <TextField type="text" placeholder="Nome*" />
                  <TextField type="text" placeholder="Email*" />
                  <TextField
                     type="number"
                     placeholder="Telefono (consigliato)"
                  />
                  <SelectField
                     icon="/images/Group 212.svg"
                     options={["2", "3", "4", "5"]}
                  />
                  <DateField icon="/images/Group 213.svg" />
                  <TextField
                     type="time"
                     startIcon="/images/Group 214.svg"
                     arrow
                  />
               </div>
               <p className="text-base text-center font-normal leading-[1.41em] md:mb-3 mb-4">
                  Ti verrà inviata una conferma della sua prenotazione
               </p>
               <div className="flex items-center gap-4 justify-center xl:mb-14 lg:mb-12 md:mb-9 sm:mb-7 mb-5">
                  <input
                     className="w-4 h-4 cursor-pointer"
                     type="checkbox"
                     id="checkbox"
                  />
                  <p className="text-base font-normal leading-[1.42em]">
                     Iscriviti alla newsletter
                  </p>
               </div>
               <div className="flex justify-center">
                  <Button path="/" icon="/images/Group 201.svg">
                     Prenota
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Prenotation;
