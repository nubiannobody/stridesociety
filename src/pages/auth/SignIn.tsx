import React, { useState } from 'react';

const SignIn = () => {
  // Mock navigate function for demo
  const navigate = (path) => console.log(`Navigating to: ${path}`);
  const [identifier, setIdentifier] = useState(''); // Can be email or username
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Helper function to check if input is an email
  const isEmail = (str) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    setErrorMsg('');

    try {
      // Mock Google OAuth for demo
      console.log('Signing in with Google...');
      setTimeout(() => {
        console.log('Google sign-in would redirect to /welcome');
        setLoading(false);
      }, 1000);
    } catch (error) {
      setErrorMsg(error.message || 'An error occurred during Google signup');
      setLoading(false);
    }
  };

  const signInWithEmail = async (email, password) => {
    // Mock Supabase auth for demo
    console.log('Signing in with email:', email);
    return new Promise(resolve => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ data: { user: { email } }, error: null });
        } else {
          resolve({ error: { message: 'Invalid email or password' } });
        }
      }, 1000);
    });
  };

  const signInWithUsername = async (username, password) => {
    try {
      // Mock database lookup for demo
      console.log('Looking up username:', username);
      
      // Simulate finding user's email by username
      const mockUsers = {
        'johndoe': 'john@example.com',
        'testuser': 'test@example.com'
      };
      
      const email = mockUsers[username.toLowerCase()];
      
      if (!email) {
        return { error: { message: 'Username not found' } };
      }

      // Then sign in with the found email
      return await signInWithEmail(email, password);
    } catch (error) {
      return { error: { message: 'Username not found' } };
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    let result;

    if (isEmail(identifier)) {
      // Sign in with email
      result = await signInWithEmail(identifier, password);
    } else {
      // Sign in with username
      result = await signInWithUsername(identifier, password);
    }

    if (result.error) {
      setErrorMsg(result.error.message);
    } else {
      navigate('/profile');
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-center">Sign In</h2>
        
        <div onSubmit={handleSignIn} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email or Username"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMsg && (
            <p className="text-sm text-red-600 text-center">{errorMsg}</p>
          )}

          <button
            onClick={handleSignIn}
            type="button"
            className="px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          
          <button
            onClick={handleGoogleSignup}
            className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {loading ? 'Signing in...' : 'Continue with Google'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;