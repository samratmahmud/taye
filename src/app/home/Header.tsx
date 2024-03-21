/* eslint-disable @next/next/no-img-element */
import React from "react";

function Header() {
   return (
      <section className="bg-header bg-cover bg-no-repeat relative min-h-screen grid place-content-center mb-[106px]">
         <span
            className="absolute top-0 left-0 right-0 h-full"
            style={{
               backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0B1315 88%)",
            }}
         />
         <div className="container pt-64 relative z-10 mb-[400px]">
            <div className="text-9xl font-bitter-rose text-primary-400 text-center mb-1.5 leading-[1.05em]">
               L’arte del gusto a Torino
            </div>
            <h1 className="text-10xl font-syncopate font-bold uppercase text-center leading-[0.81em] mb-3">
               tayè
            </h1>
            <p className="text-sm font-bold font-syncopate text-center leading-[1.08em]">
               WINES - DRINK - FOOD
            </p>
         </div>
      </section>
   );
}

export default Header;
