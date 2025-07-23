// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useUser } from '@supabase/auth-helpers-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useUser();

  return (
    <div className="min-h-screen bg-white">
      <Header hideAuthButtons={!!user} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
