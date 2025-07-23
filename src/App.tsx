import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import BackButton from '../src/components/BackButton';


function Layout({ children, showBackButton = true }: { children: React.ReactNode; showBackButton?: boolean }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16"> {/* add padding for fixed header */}
        {children}
        {showBackButton && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-8 flex justify-center">
            <BackButton />
          </div>
        )}
      </main>
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
    <>
      <Routes>
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/" element={<Layout showBackButton={false}><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/join" element={<Layout><JoinClub /></Layout>} />
        <Route path="/events" element={<Layout><EventsCalendar /></Layout>} />
        <Route path="/store" element={<Layout><MerchStore /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/community" element={<Layout><CommunityChat /></Layout>} />
        <Route path="/routes" element={<Layout><AllWalks /></Layout>} />
        {/*<Route path="/walk-registration" element={<Layout><UpcomingWalks/></Layout>} />*/}
        <Route path="/walks" element={<Layout><UpcomingWalks/></Layout>} />
        <Route path="/register" element={<Layout><WalkRegistration /></Layout>} />
        <Route path="/route-map" element={<Layout><RouteMapViewer /></Layout>} />
        <Route path="/fullscreen-map" element={<Layout><FullScreenMap /></Layout>} />
        
        {/* Auth Routes */}
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
