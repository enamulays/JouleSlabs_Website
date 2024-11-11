// GoogleMapComponent.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 24.4353,
  lng: 89.543
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDqV_02QgmsMbOntcWOJnxD0L4mTI3eF2Q"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComponent;
