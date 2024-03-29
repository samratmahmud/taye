"use client";
import React, {ReactNode, useEffect} from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface LayoutProps {
   children?: ReactNode;
}

function Layout({children}: LayoutProps) {
   useEffect(() => {
      AOS.init({
         duration: 700,
         once: false,
      });
   });
   return (
      <div>
         <Navbar />
         {children}
         <Footer />
      </div>
   );
}

export default Layout;
