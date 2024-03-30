"use client";
import Button from "@/components/common/Button";
import DateField from "@/components/common/DateField";
import SelectField from "@/components/common/SelectField";
import TextField from "@/components/common/TextField";
import Titles from "@/components/common/Titles";
import React, {useState} from "react";
import moment from "moment";

function Prenotation() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [guests, setGuests] = useState("2");
   const [date, setDate] = useState<Date | null>(new Date());
   const [time, setTime] = useState("17:30");

   const [nameError, setNameError] = useState<string | null>(null);
   const [emailError, setEmailError] = useState<string | null>(null);
   const [phoneError, setPhoneError] = useState<string | null>(null);
   const [dateError, setDateError] = useState<string | null>(null);
   const [timeError, setTimeError] = useState<string | null>(null);

   const validateName = (name: string | null) => {
      if (!name) {
         return "Il nome è obbligatorio";
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
         return "Il nome deve contenere solo lettere e spazi";
      }
      return null; // No error
   };

   const validateEmail = (email: string) => {
      const emailRegex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!email) {
         return "L'email è obbligatoria";
      } else if (!emailRegex.test(String(email).toLowerCase())) {
         return "Inserisci un indirizzo email valido";
      }
      return null;
   };

   const validateDate = (date: any) => {
      if (!date) {
         return "La data è obbligatoria";
      } else if (moment(date).isBefore(moment(), "day")) {
         return "Seleziona una data odierna o futura";
      }
      return null;
   };

   const validatePhone = (phone: string) => {
      if (!phone) {
         return null; // Phone is empty, no error
      }

      // Replace this with the regular expression that matches your desired phone number format
      const phoneRegex = /^[0-9]{10}$/; // Example: Accepts 10-digit numbers only

      if (!phoneRegex.test(phone)) {
         return "Numero di telefono non valido"; // Adjust this error message as needed
      }

      return null; // No error, phone number is valid (if it reaches this point)
   };

   const validateTime = (time: any) => {
      if (!time) {
         return "L'orario è obbligatorio";
      }
      return null;
   };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // Reset errors
      setNameError(null);
      setEmailError(null);
      setPhoneError(null);
      setDateError(null);
      setTimeError(null);

      // Validate all fields
      setNameError(validateName(name));
      setEmailError(validateEmail(email));
      setPhoneError(validatePhone(phone));
      setDateError(validateDate(date));
      setTimeError(validateTime(time));

      // If valid, proceed with submission...
      if (!nameError && !emailError && !phoneError && !dateError && !timeError) {
         // Your submission logic here
         console.log("Form submitted with valid data!");
      }
   };

   return (
      <section>
         <div className="md:container mb-[77px]">
            <form
               onSubmit={handleSubmit}
               className="max-w-[1400px] mx-auto bg-gray-800 xl:py-32 lg:py-24 md:py-16 py-11 lg:px-[135px] sm:px-12 px-7 rounded-lg bg-Prenotation-bg bg-cover bg-center"
            >
               <h3
                  data-aos="fade-up"
                  className="text-5xl leading-[1.05em] font-normal text-primary-400 font-bitter-rose text-center mb-1 md:mb-0"
               >
                  Il tuo tavolo
               </h3>
               <div data-aos="fade-up" data-aos-delay="200" className="lg:mb-[50px] md:mb-9 mb-7">
                  <Titles title="Prenotation." />
               </div>
               <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-[38px] md:gap-y-6 gap-y-4 mb-5">
                  <div data-aos="fade-up" data-aos-delay="200">
                     <TextField
                        type="text"
                        placeholder="Nome*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={nameError}
                     />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="350">
                     <TextField
                        type="email"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                     />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="500">
                     <TextField
                        type="text"
                        placeholder="Telefono (consigliato)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        error={phoneError}
                     />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="650">
                     <SelectField
                        icon="/images/Group 212.svg"
                        options={["2", "3", "4", "5"]}
                        value={guests}
                        onChange={(value) => setGuests(value)}
                     />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="800">
                     <DateField
                        icon="/images/Group 213.svg"
                        value={date}
                        onChange={(value) => setDate(value)}
                        error={dateError}
                     />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="950">
                     <SelectField
                        icon="/images/Group 214.svg"
                        options={[
                           "17:30",
                           "18:00",
                           "18:30",
                           "19:00",
                           "19:30",
                           "20:00",
                           "20:30",
                           "21:00",
                           "21:30",
                           "22:00",
                           "22:30",
                           "23:00",
                           "23:30",
                           "00:00",
                           "00:30",
                        ]}
                        value={time}
                        onChange={(value) => setTime(value)}
                        error={timeError}
                     />
                  </div>
               </div>
               <p
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  className="text-base text-center font-normal leading-[1.41em] md:mb-3 mb-4"
               >
                  Ti verrà inviata una conferma della sua prenotazione
               </p>
               <div
                  data-aos="fade-up"
                  data-aos-delay="1100"
                  className="flex items-center gap-4 justify-center xl:mb-14 lg:mb-12 md:mb-9 sm:mb-7 mb-5"
               >
                  <input className="w-4 h-4 cursor-pointer" type="checkbox" id="checkbox" />
                  <p className="text-base font-normal leading-[1.42em]">
                     Iscriviti alla newsletter
                  </p>
               </div>
               <div data-aos="fade-up" data-aos-delay="1100" className="flex justify-center">
                  <Button as="button" type="submit" icon="/images/Group 201.svg">
                     Prenota
                  </Button>
               </div>
            </form>
         </div>
      </section>
   );
}

export default Prenotation;
