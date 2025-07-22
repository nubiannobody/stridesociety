import React, { useState, useEffect } from 'react';
import { Menu, X, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Walks', href: '#walks' },
    { name: 'Join', href: '#join' },
    { name: 'Events', href: '#events' },
    { name: 'Routes', href: '/routes' },
    { name: 'Store', href: '#store' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Community', href: '#community' },    
  ];

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
      }
      setSession(data?.session || null);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleJoinClick = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleSignIn = () => {
    navigate('/auth/signin');
  };

  {/*const handleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ 
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) {
        console.error('Sign in error:', error);
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  }; */}

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Sign out error:', error);
      }
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Navigation className="h-8 w-8 text-black mr-3" />
            <a
              href="#home"
              className="text-2xl font-bold text-black inline-block px-4 py-2"
            >
              Stride Society
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-black hover:text-gray-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
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
                    <button
                      onClick={() => {
                        handleJoinClick();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-black hover:text-gray-600 transition-colors duration-200 font-medium"
                    >
                      Join
                    </button>
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