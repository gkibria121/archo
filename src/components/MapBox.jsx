import React from "react";

function MapBox({src,title}) {
   
  return <>{src && (
    <div className="map-section mt-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <iframe
        width="100%"
        height="500"
        frameBorder="0"
        style={{ border: 0 }}
        src={src}
        allowFullScreen
      />
    </div>
  )}</>;
}

export default MapBox;
