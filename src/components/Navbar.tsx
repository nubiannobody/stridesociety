import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

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

  {/*const handleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) {
        console.error('Sign in error:', error);
      }
    } catch (error) {
      console.error('Sign in error:', error);
    }
  }; */}

  const handleSignIn = () => {
    navigate('/auth/signin');
  };

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
    <nav className="w-full flex justify-between items-center p-4 border-b border-gray-300">
      <ul className="flex gap-6 text-lg font-semibold">
      <li><Link to="/">Stride Society</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/walk-registration">Walks</Link></li>
      <li><Link to="/join">Join</Link></li>
      <li><Link to="/events">Events</Link></li>  
      </ul>
      <div className="flex items-center gap-3">
        {loading ? (
          <span>Loading...</span>
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
            {/* Join button that now routes to join page */}
            <button
              onClick={handleJoinClick}
              className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition-opacity duration-200"
            >
              Join
            </button>
            {/* Sign in button triggers Google OAuth */}
            <button
              onClick={handleSignIn}
              className="border border-black text-black px-4 py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;