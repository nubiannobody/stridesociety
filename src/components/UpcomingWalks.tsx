import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const UpcomingWalks: React.FC = () => {
  const navigate = useNavigate();

  const upcomingWalks = [
    {
      name: "FitBar to Coulon Park",
      date: "March 15, 2025",
      time: "9:00 AM",
      location: "FitBar Café, Renton",
      distance: "4.0 miles",
      difficulty: "Moderate",
      spots: "8 spots left",
      type: "Out & Back",
      summary: "A scenic city-to-waterfront route starting at FitBar Café and ending at Coulon Park."
    },
    {
      name: "Sunset Stroll at Lake Washington Blvd",
      date: "March 16, 2025",
      time: "6:30 PM",
      location: "Lake Washington Blvd, Renton",
      distance: "2.0 miles",
      difficulty: "Easy",
      spots: "12 spots left",
      type: "Out & Back",
      summary: "Flat and relaxing evening walk with stunning lake views."
    },
    {
      name: "Morning Motivation @ Tiffany Park",
      date: "March 18, 2025",
      time: "7:00 AM",
      location: "Tiffany Park, Renton",
      distance: "2.7 miles",
      difficulty: "Easy",
      spots: "15 spots left",
      type: "Loop",
      summary: "Great for weekday walks and light cardio."
    },
    {
      name: "Urban Explorer - Renton Loop",
      date: "March 20, 2025",
      time: "10:00 AM",
      location: "Downtown Renton",
      distance: "4.5 miles",
      difficulty: "Moderate",
      spots: "6 spots left",
      type: "Loop",
      summary: "Downtown and scenic detour combo."
    }
  ];

  const handleRegister = (walk: typeof upcomingWalks[0]) => {
    navigate('/walk-registration', { state: { walk } });
  };

  return (
    <section id="walks" className="py-20 bg-white">
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
                  <span>{walk.spots}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-black">{walk.distance}</span>
                <button 
                  onClick={() => handleRegister(walk)}
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/all-walks" 
            className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 inline-block"
          >
            View All Walks
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWalks;
