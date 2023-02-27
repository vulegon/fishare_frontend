// app/javascript/components/App.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { api_key } from '../config/api_key';


function Map() {
  const mapStyles = {
    height: "100%",
    width: "100%"
  };
  const defaultUserPosition = {
    lat: 36.15305354356379, lng: 136.2725972414738 //福井県坂井市丸岡町
  };
  const [userCurrentPosition, setUserCurrentPosition] = useState(defaultUserPosition)
  const zoom = 15;
  const getCurrentPositionOptions={
    timeout: 10000,
    maximumAge: 1500
  }

  const getUserCurrentPosition = () => {
    const isUserDeviceCanGetCurrentPosition = navigator.geolocation
    if (isUserDeviceCanGetCurrentPosition) {
      isUserDeviceCanGetCurrentPosition.getCurrentPosition((position) => {
        setUserCurrentPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
      },(()=>{
        console.log('位置情報を取得できませんでした。')
      }),getCurrentPositionOptions)
    }
  }
  useState(() => {
    getUserCurrentPosition();
  }, [])

  return (
    <LoadScript googleMapsApiKey={api_key}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={zoom}
        center={userCurrentPosition}
      />
    </LoadScript>
  )
}

export default Map;
