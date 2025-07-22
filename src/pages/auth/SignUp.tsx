import React, { useState } from 'react';
import { supabase } from '../auth/SignIn';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return alert(error.message);

    const user = data.user;
    if (user) {
      await supabase.from('profiles').insert([
        { id: user.id, username },
      ]);
    }
    alert('Check your email for confirmation!');
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
