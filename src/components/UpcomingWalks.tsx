import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Walk {
  name: string;
  date: string;
  time: string;
  location: string;
  miles: string;
  difficulty: string;
  participants: number;
  type: string;
  highlights: string[];
  theme: string;
  image: string;
}

const UpcomingWalks = () => {
  const navigate = useNavigate();

  const handleRegister = (walk: Walk) => {
    navigate('/register', { state: { walk } });
  };

  const upcomingWalks = [
    {
      name: "FitBar to Coulon Park",
      date: "July 30th, 2025",
      theme: "A scenic city-to-waterfront route starting at FitBar Café and ending at Coulon Park. Ideal for casual walkers and community connection.",
      miles: "4.0 miles",
      time: "1 hour 20 minutes",
      difficulty: "Moderate",
      rating: 4.9,
      participants: 45,
      type: "Out & Back",
      location: "Renton, WA",
      highlights: ["Waterfront views", "Urban to nature", "Coffee stop"],
      image: "https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Coos Creek Trail Loop",
      date: "August 30th, 2025",
      theme: "Shaded, nature-heavy path perfect for early mornings",
      miles: "2.2 miles",
      time: "45 minutes",
      difficulty: "Easy",
      rating: 4.8,
      participants: 32,
      type: "Loop",
      location: "Renton, WA",
      highlights: ["Shaded trail", "Creek views", "Morning birds"],
      image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Heritage Park Path",
      date: "September 30th, 2025",
      theme: "Family-friendly loop with park views",
      miles: "3.5 miles",
      time: "1 hour 10 minutes",
      difficulty: "Easy",
      rating: 4.7,
      participants: 67,
      type: "Loop",
      location: "Renton, WA",
      highlights: ["Family friendly", "Park amenities", "Playground stops"],
      image: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Sunset Stroll at Lake Washington Blvd",
      date: "October 30th, 2025",
      theme: "Flat and relaxing evening walk with stunning lake views",
      miles: "2.0 miles",
      time: "40 minutes",
      difficulty: "Easy",
      rating: 4.9,
      participants: 89,
      type: "Out & Back",
      location: "Renton, WA",
      highlights: ["Lake views", "Sunset timing", "Flat terrain"],
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="walks" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Upcoming Walks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for our weekly walks in Renton, WA. All fitness levels welcome. Registration is free for members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingWalks.map((walk, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-black">{walk.name}</h3>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    walk.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    walk.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {walk.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-semibold">
                    {walk.type}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>{walk.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>{walk.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{walk.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3" />
                  <span>{walk.participants}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-black">{walk.miles}</span>
                <button 
                  onClick={() => {
                    localStorage.setItem('selectedWalk', JSON.stringify(walk));
                    navigate('/register');
                  }}                  
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
        <Link
  to="/routes"
  className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 inline-flex justify-center"
>
  View All Walks
</Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWalks;
