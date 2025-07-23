import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Download, MapPin, Clock, Ruler } from 'lucide-react';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface RouteData {
  name: string;
  miles: string;
  time: string;
  difficulty: string;
  type: string;
  coordinates: [number, number][];
  startPoint: {
    lat: number;
    lng: number;
    name: string;
  };
  endPoint: {
    lat: number;
    lng: number;
    name: string;
  };
  waypoints?: {
    lat: number;
    lng: number;
    name: string;
  }[];
  terrain: string;
}

interface RouteMapProps {
  route: RouteData;
  className?: string;
}

const RouteMap: React.FC<RouteMapProps> = ({ route, className = "" }) => {
  const mapRef = useRef<L.Map | null>(null);

  // Custom icons for different marker types
  const startIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0z" fill="#22c55e"/>
        <circle cx="12.5" cy="12.5" r="6" fill="white"/>
        <text x="12.5" y="17" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">S</text>
      </svg>
    `),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const endIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0z" fill="#ef4444"/>
        <circle cx="12.5" cy="12.5" r="6" fill="white"/>
        <text x="12.5" y="17" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">E</text>
      </svg>
    `),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const waypointIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64=' + btoa(`
      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8" fill="#3b82f6" stroke="white" stroke-width="2"/>
        <circle cx="10" cy="10" r="3" fill="white"/>
      </svg>
    `),
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });

  const handleDownloadMap = () => {
    // Create a canvas element to generate the map image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    canvas.width = 800;
    canvas.height = 600;
    
    // White background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Header
    ctx.fillStyle = 'black';
    ctx.font = 'bold 24px Arial';
    ctx.fillText(route.name, 40, 50);
    
    // Route details
    ctx.font = '16px Arial';
    ctx.fillText(`Distance: ${route.distance}`, 40, 80);
    ctx.fillText(`Time: ${route.time}`, 40, 105);
    ctx.fillText(`Difficulty: ${route.difficulty}`, 40, 130);
    ctx.fillText(`Terrain: ${route.terrain}`, 40, 155);
    
    // Map placeholder (in a real implementation, you'd capture the actual map)
    ctx.strokeStyle = 'black';
    ctx.strokeRect(40, 180, 720, 360);
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(41, 181, 718, 358);
    
    // Route path representation
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.quadraticCurveTo(400, 200, 700, 350);
    ctx.stroke();
    
    // Start and end markers
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(100, 300, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('S', 96, 305);
    
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(700, 350, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.fillText('E', 696, 355);
    
    // Footer
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.fillText('Stride Society - Renton, WA', 40, 580);
    
    // Download the image
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${route.name.replace(/\s+/g, '-').toLowerCase()}-route-map.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-black">{route.name}</h3>
          <button
            onClick={handleDownloadMap}
            className="flex items-center px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Map
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Ruler className="h-4 w-4 mr-2" />
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{route.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              route.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              route.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {route.difficulty}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">
              {route.terrain}
            </span>
          </div>
        </div>
      </div>
      
      <div className="h-80 relative">
        <MapContainer
          center={route.coordinates[0]}
          zoom={14}
          style={{ height: '100%', width: '100%' }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            className="map-tiles"
          />
          
          {/* Route path */}
          <Polyline
            positions={route.coordinates}
            color="black"
            weight={4}
            opacity={0.8}
          />
          
          {/* Start marker */}
          <Marker position={[route.startPoint.lat, route.startPoint.lng]} icon={startIcon}>
            <Popup>
              <div className="text-center">
                <strong>Start Point</strong><br />
                {route.startPoint.name}
              </div>
            </Popup>
          </Marker>
          
          {/* End marker */}
          <Marker position={[route.endPoint.lat, route.endPoint.lng]} icon={endIcon}>
            <Popup>
              <div className="text-center">
                <strong>{route.type === 'Loop' ? 'Start/End Point' : 'End Point'}</strong><br />
                {route.endPoint.name}
              </div>
            </Popup>
          </Marker>
          
          {/* Waypoint markers */}
          {route.waypoints?.map((waypoint, index) => (
            <Marker key={index} position={[waypoint.lat, waypoint.lng]} icon={waypointIcon}>
              <Popup>
                <div className="text-center">
                  <strong>Waypoint</strong><br />
                  {waypoint.name}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Start: {route.startPoint.name}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span>{route.type === 'Loop' ? 'Start/End' : 'End'}: {route.endPoint.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;