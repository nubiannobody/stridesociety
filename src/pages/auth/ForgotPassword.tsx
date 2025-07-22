// src/pages/ForgotPassword.tsx
import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:5173/update-password', // Or your deployed domain
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Check your email for the reset link!');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Send Reset Email</button>
      <p>{message}</p>
    </div>
  );
}

