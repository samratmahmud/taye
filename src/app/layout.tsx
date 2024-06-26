import Layout from "@/components/globals/Layout";
import "@/styles/main.css";
import type {Metadata} from "next";
import {Syncopate} from "next/font/google";
import localFont from "next/font/local";

// src\app\layout.tsx

const syncopate = Syncopate({
   subsets: ["latin"],
   weight: ["400", "700"],
   display: "swap",
   variable: "--font-syncopate",
});

const BitterRoseDEMO = localFont({
   src: [
      {
         path: "../assets/fonts/bitter_rose/Bitter Rose DEMO.otf",
         weight: "400",
         style: "normal",
      },
   ],
   variable: "--font-bitter-rose",
});

const ChillaxComplete = localFont({
   src: [
      {
         path: "../assets/fonts/Chillax_Complete/Chillax-Extralight.otf",
         weight: "200",
         style: "normal",
      },
      {
         path: "../assets/fonts/Chillax_Complete/Chillax-Light.otf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../assets/fonts/Chillax_Complete/Chillax-Regular.otf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../assets/fonts/Chillax_Complete/Chillax-Medium.otf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../assets/fonts/Chillax_Complete/Chillax-Semibold.otf",
         weight: "600",
         style: "normal",
      },
      {
         path: "../assets/fonts/Chillax_Complete/Chillax-Bold.otf",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--font-chillax",
});

export const metadata: Metadata = {
   title: "Taye Webpage",
   description: "Generated by create next app",
   icons: "/images/favicon.svg",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
   return (
      <html lang="en">
         <body
            className={`${syncopate.variable} ${BitterRoseDEMO.variable} ${ChillaxComplete.variable}`}
         >
            <Layout>{children}</Layout>
         </body>
      </html>
   );
}
