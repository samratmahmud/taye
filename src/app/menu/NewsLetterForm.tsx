"use client";
import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import Link from "next/link";
import React, {useState} from "react";

function NewsLetterForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [isChecked, setIsChecked] = useState(true);

   const [nameError, setNameError] = useState<null | string>(null);
   const [emailError, setEmailError] = useState<null | string>(null);
   const [checkboxError, setCheckboxError] = useState<null | string>(null);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      let isValid = true;

      // Reset errors
      setNameError(null);
      setEmailError(null);
      setCheckboxError(null);

      // Validate Name
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!name) {
         setNameError("Il nome è obbligatorio");
         isValid = false;
      } else if (!nameRegex.test(name)) {
         setNameError("Il nome deve contenere solo lettere e spazi");
         isValid = false;
      }

      // Validate Email
      const emailRegex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!email) {
         setEmailError("L'email è obbligatoria");
         isValid = false;
      } else if (!emailRegex.test(String(email).toLowerCase())) {
         setEmailError("Inserisci un indirizzo email valido");
         isValid = false;
      }

      // Validate Checkbox
      if (!isChecked) {
         setCheckboxError("Si prega di accettare la privacy policy");
         isValid = false;
      }

      // If valid, proceed with submission...
      if (isValid) {
         // Your submission logic here
      }
   };

   return (
      <form onSubmit={handleSubmit} className="w-full">
         <div className="text-5xl font-normal leading-[1.05em] text-primary-400 font-bitter-rose text-center">
            Registrati alla
         </div>
         <h2 className="text-7xl tracking-normal font-normal leading-[1.4em] text-center mb-4">
            Newsletter
         </h2>
         <div className="flex flex-col gap-[18px] lg:max-w-[330px] mx-auto md:mb-7 mb-5">
            <TextField
               type="text"
               placeholder="nome*"
               value={name}
               onChange={(e) => setName(e.target.value)}
               error={nameError}
            />
            <TextField
               type="email"
               placeholder="Email*"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               error={emailError}
            />
            <TextField type="number" placeholder="Telefono (consigliato)" />
         </div>
         <div className="flex items-center justify-center gap-2.5 mb-6">
            <input
               className="w-4 h-4 cursor-pointer"
               type="checkbox"
               checked={isChecked}
               onChange={() => setIsChecked(!isChecked)}
            />
            <div className="text-base md:text-xs font-normal leading-[1.42em]">
               Inviando questa richiesta si accetta la nostra <Link href="/">privacy policy</Link>
               {checkboxError && <p className="text-red-500">{checkboxError}</p>}
            </div>
         </div>
         <div className="flex justify-center">
            <Button type="submit" as="button" icon="/images/Group 201.svg">
               Iscriviti
            </Button>
         </div>
      </form>
   );
}

export default NewsLetterForm;
