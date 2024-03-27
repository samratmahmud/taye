import React from "react";

const LocationMap = () => {
   return (
      <div>
         <iframe
            className="w-full invert saturate-0 rounded-2xl overflow-hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5636.655521573901!2d7.692147876836454!3d45.05886186039149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d3cef51c9b5%3A0x7bc8e5871e351376!2sTay%C3%A8%20Cocktail%20Bar!5e0!3m2!1sit!2sit!4v1711358400606!5m2!1sit!2sit"
            height="450"
            style={{aspectRatio: "683/245", border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
   );
};

export default LocationMap;
