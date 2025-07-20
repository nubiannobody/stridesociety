// src/pages/RouteMapViewer.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { routeData } from '../data/routeData';
import FullScreenMap from '../components/FullScreenMap'

const RouteMapViewer: React.FC = () => {
  const location = useLocation();
  const { routeKey } = location.state || {};

  console.log("Location state:", location.state);
  console.log("routeKey:", routeKey);
  console.log("Matched route:", routeData[routeKey]);

  if (!routeKey) return <div className="p-6">No route key provided.</div>;
  if (!routeData[routeKey]) return <div className="p-6">Route not found for key: {routeKey}</div>;

  const route = routeData[routeKey];
  return <FullScreenMap route={route} />;
};

export default RouteMapViewer;
