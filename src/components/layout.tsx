// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
