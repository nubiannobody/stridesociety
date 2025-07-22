import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/signin'); // redirect after a few seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">✅ Email Verified!</h1>
      <p className="text-lg mb-2">Thank you for confirming your email.</p>
      <p className="text-sm text-gray-500">Redirecting you to sign in...</p>
    </div>
  );
};

export default VerifyPage;
