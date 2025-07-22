// src/pages/UpdatePassword.tsx
import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdatePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Password updated! You can now log in.');
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <input
        type="password"
        placeholder="New password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />
      <button onClick={handleUpdatePassword}>Update Password</button>
      <p>{message}</p>
    </div>
  );
}
