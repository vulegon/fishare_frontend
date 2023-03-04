// app/javascript/components/App.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { api_key } from '../config/api_key';


function Map() {
  const mapStyles = { height: "100%", width: "100%" };
  const defaultUserPosition = { lat: 36.15305354356379, lng: 136.2725972414738 };   //丸岡城
  const [userCurrentPosition, setUserCurrentPosition] = useState(defaultUserPosition);
  const [marker, setMarker] = useState(defaultUserPosition);
  const zoom = 15;
  const getCurrentPositionOptions = { timeout: 10000, maximumAge: 1500 }

  const getUserCurrentPosition = () => {
    const isUserDeviceCanGetCurrentPosition = navigator.geolocation
    if (isUserDeviceCanGetCurrentPosition) {
      isUserDeviceCanGetCurrentPosition.getCurrentPosition((position) => {
        setUserCurrentPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
      }, (() => {
        console.log('位置情報を取得できませんでした。')
      }), getCurrentPositionOptions)
    }
  }
  useState(() => {
    getUserCurrentPosition();
  }, [])

  const onMapClick = (e) => {
    console.log(`latitude: ${e.latLng.lat()}, longitude: ${e.latLng.lng()}`)
    const clickPosition = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setMarker(clickPosition);
  }

  return (
    <LoadScript googleMapsApiKey={api_key}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={zoom} center={userCurrentPosition} onClick={onMapClick}>
        <Marker position={{ lat: marker.lat, lng: marker.lng }} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;
