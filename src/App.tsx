import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import UpcomingWalks from './components/UpcomingWalks';
import WalkRegistration from './components/WalkRegistration';
import JoinClub from './components/JoinClub';
import EventsCalendar from './components/EventsCalendar';
import WalkingRoutes from './components/WalkingRoutes';
import MerchStore from './components/MerchStore';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import CommunityChat from './components/CommunityChat';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllWalks from './components/AllWalks';
import RouteMapViewer from './components/RouteMapViewer'; // update the path if needed
import FullScreenMap from './components/FullScreenMap';


function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <UpcomingWalks />
      <WalkRegistration />
      <JoinClub />
      <EventsCalendar />
      <WalkingRoutes />
      <MerchStore />
      <Gallery />
      <FAQ />
      <CommunityChat />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/routes" element={<AllWalks />} />
      <Route path="/community" element={<CommunityChat />} />
      <Route path="/walk-registration" element={<WalkRegistration />} />
      <Route path="/register" element={<WalkRegistration />} />
      <Route path="/route-map" element={<RouteMapViewer />} />
      <Route path="/fullscreen-map" element={<FullScreenMap />} />
    </Routes>
  );
}

export default App;
