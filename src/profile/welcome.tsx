import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

interface Walk {
  id: string;
  title: string;
  date: string;
  location: string;
  // add other walk fields as needed
}

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [userWalks, setUserWalks] = useState<Walk[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessionAndWalks = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        // No session — redirect to home or signin
        navigate('/');
        return;
      }

      setSession(session);

      // Fetch user walks from your 'walk_registrations' or similar table
      // This assumes you have a table that tracks user registrations for walks
      const { data, error } = await supabase
        .from('walk_registrations') // adjust to your actual table name
        .select(`
          walks (
            id,
            title,
            date,
            location
          )
        `)
        .eq('user_id', session.user.id);

      if (error) {
        console.error('Error fetching walks:', error);
      } else if (data) {
        // data is array of registrations with nested walks
        // Map to get walks only
        const walks = data
          .map((reg: any) => reg.walks)
          .filter((walk: any) => walk != null);
        setUserWalks(walks);
      }
      setLoading(false);
    };

    fetchSessionAndWalks();
  }, [navigate]);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 max-w-7xl mx-auto">
     <h1 className="text-4xl font-bold mb-8 text-center text-black">
  Welcome, {session?.user?.user_metadata?.full_name?.split(' ')[0] || 'Walker'}!
</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading your walks...</p>
      ) : userWalks.length > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-black">Your Registered Walks</h2>
          <ul className="space-y-4">
            {userWalks.map((walk) => (
              <li
                key={walk.id}
                className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-black">{walk.title}</h3>
                <p className="text-gray-700">
                  Date: {new Date(walk.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">Location: {walk.location}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-gray-600">
          You haven’t registered for any walks yet.
        </p>
      )}
    </section>
  );
};

export default Welcome;
