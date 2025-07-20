import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface RouteMapProps {
  route: {
    coordinates: [number, number][];
    startPoint: { lat: number; lng: number; name: string };
    endPoint: { lat: number; lng: number; name: string };
  };
}

const FullScreenMap: React.FC<RouteMapProps> = ({ route }) => {
  return (
    <MapContainer center={[route.startPoint.lat, route.startPoint.lng]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={route.startPoint}>
        <Popup>{route.startPoint.name}</Popup>
      </Marker>
      <Marker position={route.endPoint}>
        <Popup>{route.endPoint.name}</Popup>
      </Marker>
      <Polyline positions={route.coordinates} color="blue" />
    </MapContainer>
  );
};

export default FullScreenMap;
