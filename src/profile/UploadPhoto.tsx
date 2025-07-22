// src/pages/UploadPhoto.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const UploadPhoto: React.FC = () => {
  const [walks, setWalks] = useState<any[]>([]);
  const [selectedWalkId, setSelectedWalkId] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessionAndWalks = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      if (!session) {
        navigate('/'); // redirect if not signed in
        return;
      }

      const { data, error } = await supabase.from('walks').select('*');
      if (error) {
        console.error('Error fetching walks:', error);
      } else {
        setWalks(data);
      }
    };

    fetchSessionAndWalks();
  }, []);

  const handleUpload = async () => {
    if (!photo || !selectedWalkId) return alert('Please select a walk and upload a photo.');

    const filePath = `${Date.now()}_${photo.name}`;

    const { data: storageData, error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(filePath, photo);

    if (uploadError) {
      return alert('Upload failed: ' + uploadError.message);
    }

    const publicUrl = supabase.storage.from('gallery').getPublicUrl(filePath).data.publicUrl;

    const { error: insertError } = await supabase.from('photos').insert([
      {
        walk_id: selectedWalkId,
        photo_url: publicUrl,
        user_id: session.user.id,
      },
    ]);

    if (insertError) {
      alert('Failed to save photo to gallery: ' + insertError.message);
    } else {
      alert('Photo uploaded successfully!');
      setPhoto(null);
      setSelectedWalkId('');
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload a Photo</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-black">Select Walk</label>
        <select
          value={selectedWalkId}
          onChange={(e) => setSelectedWalkId(e.target.value)}
          className="w-full border rounded px-4 py-2"
        >
          <option value="">-- Choose a Walk --</option>
          {walks.map((walk) => (
            <option key={walk.id} value={walk.id}>
              {walk.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-black">Choose Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>

      <button
        onClick={handleUpload}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Upload Photo
      </button>
    </div>
  );
};

export default UploadPhoto;
