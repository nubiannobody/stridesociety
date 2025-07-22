import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
import AllWalks from './components/AllWalks';
import RouteMapViewer from './components/RouteMapViewer';
import FullScreenMap from './components/FullScreenMap';
import SignIn from './pages/auth/SignIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import UpdatePassword from './pages/auth/UpdatePassword';
import Welcome from './profile/welcome';


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">{children}</div>
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/routes" element={<Layout><AllWalks /></Layout>} />
      <Route path="/community" element={<Layout><CommunityChat /></Layout>} />
      <Route path="/walk-registration" element={<Layout><WalkRegistration /></Layout>} />
      <Route path="/register" element={<Layout><WalkRegistration /></Layout>} />
      <Route path="/route-map" element={<Layout><RouteMapViewer /></Layout>} />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/fullscreen-map" element={<Layout><FullScreenMap /></Layout>} />
    </Routes>
  );
}

export default App;