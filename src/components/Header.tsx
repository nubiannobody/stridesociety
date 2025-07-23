import React, { useState } from 'react';
import { Menu, X, Navigation } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';


const Header: React.FC = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/signin';
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Walks', href: '/walk-registration' },
    { name: 'Events', href: '/events' },
    { name: 'Routes', href: '/routes' },
    { name: 'Store', href: '/store' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Community', href: '/community' },
  ];
  
  const handleJoinClick = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignIn = () => {
    navigate('/auth/signin');
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Sign out error:', error);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Navigation className="h-8 w-8 text-black mr-3" />
            <Link to="/" className="text-2xl font-bold text-black inline-block px-4 py-2">
              Stride Society
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} className="text-black hover:text-gray-600 transition-colors duration-200 font-medium">
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              {loading ? (
                <span className="text-sm text-gray-600">Loading...</span>
              ) : session ? (
                <>
                  <span className="text-sm text-gray-600">
                    Welcome, {session.user?.email?.split('@')[0] || 'User'}!
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleJoinClick}
                    className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200"
                  >
                    Join
                  </button>
                  <button
                    onClick={handleSignIn}
                    className="border border-black text-black px-4 py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-black hover:text-gray-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="border-t pt-3 mt-3 space-y-2">
                {loading ? (
                  <span className="block px-3 py-2 text-sm text-gray-600">Loading...</span>
                ) : session ? (
                  <>
                    <span className="block px-3 py-1 text-sm text-gray-600">
                      Welcome, {session.user?.email?.split('@')[0] || 'User'}!
                    </span>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-black hover:text-gray-600 transition-colors duration-200 font-medium"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/JoinClub">
  <button  className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200">
    Join the Club
  </button>
</Link>
                    <button
                      onClick={() => {
                        handleSignIn();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-black hover:text-gray-600 transition-colors duration-200 font-medium"
                    >
                      Sign In
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
