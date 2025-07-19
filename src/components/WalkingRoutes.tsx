import React from 'react';
import { MapPin, Clock, Ruler, Star, Users, Download } from 'lucide-react';
import RouteMap from './RouteMap';
import { routeData } from '../data/routeData';

const WalkingRoutes: React.FC = () => {
  const routes = [
    {
      name: "FitBar to Coulon Park",
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
    },
    {
      name: "Morning Motivation @ Tiffany Park",
      theme: "Great for weekday walks and light cardio",
      miles: "2.7 miles",
      time: "55 minutes",
      difficulty: "Easy",
      rating: 4.6,
      participants: 54,
      type: "Loop",
      location: "Renton, WA",
      highlights: ["Morning energy", "Light cardio", "Park facilities"],
      image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Urban Explorer - Renton Loop",
      theme: "Downtown and scenic detour combo",
      miles: "4.5 miles",
      time: "1 hour 30 minutes",
      difficulty: "Moderate",
      rating: 4.8,
      participants: 38,
      type: "Loop",
      location: "Renton, WA",
      highlights: ["Downtown views", "Urban exploration", "Mixed terrain"],
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRegister = (routeName: string) => {
    const registrationSection = document.getElementById('walk-registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
      // Update registration form with selected route
      const routeNameElement = document.getElementById('selected-route-name');
      if (routeNameElement) {
        routeNameElement.textContent = routeName;
      }
    }
  };

  const handleDownloadMap = (routeName: string) => {
    // Simulate PDF download
    console.log(`Downloading map for ${routeName}`);
    alert(`Downloading route map for ${routeName}...`);
  };

  // Map route names to data keys
  const routeKeyMap: { [key: string]: string } = {
    "FitBar to Coulon Park": "fitbar-to-coulon",
    "Coos Creek Trail Loop": "coos-creek-trail",
    "Heritage Park Path": "heritage-park",
    "Sunset Stroll at Lake Washington Blvd": "sunset-stroll",
    "Morning Motivation @ Tiffany Park": "morning-motivation",
    "Urban Explorer - Renton Loop": "urban-explorer"
  };
  return (
    <section id="routes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Walking Routes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our carefully curated walking routes in Renton, WA. Each route offers a unique experience and caters to different fitness levels and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" id={`route-${index}`}>
              <div className="relative">
                <img 
                  src={route.image} 
                  alt={route.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(route.difficulty)}`}>
                    {route.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-semibold">
                    {route.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{route.name}</h3>
                <p className="text-gray-600 mb-2 text-sm flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {route.location}
                </p>
                <p className="text-gray-600 mb-4">{route.theme}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Ruler className="h-4 w-4 mr-2" />
                    <span className="text-sm">{route.miles}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{route.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-2" />
                    <span className="text-sm">{route.rating}/5</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{route.participants}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-2">Route Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Route Map */}
                {routeKeyMap[route.name] && (
                  <div className="mb-6">
                    <RouteMap route={routeData[routeKeyMap[route.name]]} />
                  </div>
                )}
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleRegister(route.name)}
                      className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      Register
                    </button>
                    <button className="flex-1 border-2 border-black text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition-colors duration-200">
                      View Map
                    </button>
                  </div>
                  <button 
                    onClick={() => handleDownloadMap(route.name)}
                    className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Route Map
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/all-walks" 
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
          >
            View All Walks
          </a>
        </div>
      </div>
    </section>
  );
};

export default WalkingRoutes;