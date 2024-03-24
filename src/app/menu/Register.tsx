/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";
import Link from "next/link";
import React from "react";

function Register() {
   return (
      <section>
         <div className="container">
            <div className="grid lg:grid-cols-2 items-center gap-6 mb-5 xl:mb-0">
               <div className="w-full">
                  <div className="text-5xl font-normal leading-[1.05em] text-primary-400 font-bitter-rose text-center">
                     Registrati alla
                  </div>
                  <h2 className="text-7xl tracking-normal font-normal leading-[1.4em] text-center mb-4">
                     Newsletter
                  </h2>
                  <div className="flex flex-col gap-[18px] lg:max-w-[330px] mx-auto md:mb-7 mb-5">
                     <TextField type="text" placeholder="nome*" />
                     <TextField type="email" placeholder="Email*" />
                     <TextField
                        type="number"
                        placeholder="Telefono (consigliato)"
                     />
                  </div>
                  <div className="flex items-center justify-center gap-2.5 mb-6">
                     <input className="w-4 h-4" type="checkbox" />
                     <div className="text-xs font-normal leading-[1.42em]">
                        Inviando questa richiesta si accetta la nostra{" "}
                        <Link href="/">privacy policy</Link>
                     </div>
                  </div>
                  <div>
                     <Button path="/" icon="/images/Group 201.svg">
                        Iscriviti
                     </Button>
                  </div>
               </div>
               <div className="relative lg:block hidden">
                  <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <h1 className="text-10xl font-syncopate font-bold uppercase text-center leading-[0.81em] mb-3">
                        tayè
                     </h1>
                     <p className="text-sm font-bold font-syncopate text-center leading-[1.08em]">
                        WINES - DRINK - FOOD
                     </p>
                  </div>
                  <div className="relative z-0">
                     <span
                        className="absolute top-0 left-0 right-0 h-full opacity-60"
                        style={{
                           backgroundImage:
                              "linear-gradient(#000000 50%, #000000 50%)",
                        }}
                     />
                     <img src="/images/cocktails.jpg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Register;
