import React from "react";
import {GoogleMap, Marker, LoadScript} from "@react-google-maps/api";

const MapContainer: React.FC = () => {
   const mapStyles = {
      height: "100vh",
      width: "100%",
   };

   const defaultCenter = {
      lat: 40.712776,
      lng: -74.005974,
   };

   return (
      <LoadScript googleMapsApiKey="k3o84ukjfslksjdlkfjsdlf">
         <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
            {/* Example Marker */}
            <Marker position={defaultCenter} />
         </GoogleMap>
      </LoadScript>
   );
};

export default MapContainer;
