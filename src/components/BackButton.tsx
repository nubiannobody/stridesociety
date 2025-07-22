// components/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-8 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
      style={{ fontSize: '1rem' }} // Matches typical button font size
    >
      ← Back
    </button>
  );
};

export default BackButton;
