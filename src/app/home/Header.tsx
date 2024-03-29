/* eslint-disable @next/next/no-img-element */
import React from "react";

interface titlesProps {
   title: string;
}

function Header(props: titlesProps) {
   const {title} = props;

   return (
      <section className="md:bg-headerW bg-headerM bg-cover bg-center relative min-h-screen grid place-content-center">
         <span
            className="hidden md:block absolute top-0 left-0 right-0 h-full"
            style={{
               backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0B1315 88%)",
            }}
         />
         <span
            className="md:hidden absolute top-0 left-0 right-0 h-full"
            style={{
               backgroundImage:
                  " linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0B1315 94%)",
            }}
         />
         <div className="container relative z-10 md:pt-64 md:pb-[400px] py-80">
            <div
               data-aos="fade-up"
               className="text-9xl font-bitter-rose text-primary-400 text-center mb-1.5 leading-[1.05em]"
            >
               {title}
            </div>
            <h1
               data-aos="fade-up"
               data-aos-delay="150"
               className="text-10xl font-syncopate font-bold uppercase text-center leading-[0.81em] md:mb-3 mb-2"
            >
               tayè
            </h1>
            <p
               data-aos="fade-up"
               data-aos-delay="300"
               className="text-sm font-bold font-syncopate text-center leading-[1.08em]"
            >
               WINES - DRINK - FOOD
            </p>
         </div>
      </section>
   );
}

export default Header;
