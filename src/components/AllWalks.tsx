import React, { useState } from 'react';
import { MapPin, Clock, Ruler, Star, Users, Filter, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllWalks: React.FC = () => {
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const navigate = useNavigate();

  const allRoutes = [
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
      status: "Active",
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
      status: "Active",
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
      status: "Active",
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
      status: "Active",
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
      status: "Active",
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
      status: "Active",
      highlights: ["Downtown views", "Urban exploration", "Mixed terrain"],
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Cedar River Trail",
      theme: "Peaceful riverside walk through natural scenery",
      miles: "5.2 miles",
      time: "1 hour 45 minutes",
      difficulty: "Challenging",
      rating: 4.5,
      participants: 23,
      type: "Out & Back",
      location: "Renton, WA",
      status: "Seasonal",
      highlights: ["River views", "Wildlife", "Longer distance"],
      image: "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Renton Highlands Loop",
      theme: "Challenging hill walk with city views",
      miles: "3.8 miles",
      time: "1 hour 15 minutes",
      difficulty: "Challenging",
      rating: 4.4,
      participants: 19,
      type: "Loop",
      location: "Renton, WA",
      status: "Active",
      highlights: ["Hill training", "City views", "Cardio workout"],
      image: "https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Coming Soon",
      theme: "Relaxing beach walk",
      miles: "5.0 miles",
      time: "2 hour 30 minutes",
      difficulty: "Challenging",
      rating: 4.8,
      participants: 50,
      type: "Loop",
      location: "Renton, WA",
      status: "Inactive",
      highlights: ["Sunset Timing", "Beach views", "Cardio workout"],
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const filteredRoutes = allRoutes.filter(route => {
    const difficultyMatch = filterDifficulty === 'all' || route.difficulty === filterDifficulty;
    const typeMatch = filterType === 'all' || route.type === filterType;
    return difficultyMatch && typeMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Seasonal': return 'bg-blue-100 text-blue-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRegister = (walk: typeof allRoutes[0]) => {
    navigate('/walk-registration', { state: { walk } });
  };

  const handleDownloadMap = (routeName: string) => {
    console.log(`Downloading map for ${routeName}`);
    alert(`Downloading route map for ${routeName}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">All Walking Routes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection of walking routes in Renton, WA. Filter by difficulty and type to find the perfect walk for you.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-black mr-2" />
            <h3 className="text-lg font-semibold text-black">Filter Routes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Challenging">Challenging</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Route Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="Loop">Loop</option>
                <option value="Out & Back">Out & Back</option>
              </select>
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(route.difficulty)}`}>
                    {route.difficulty}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(route.status)}`}>
                    {route.status}
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

                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleRegister(route)}
                      className="flex-1 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      disabled={route.status === 'Inactive'}
                    >
                      {route.status === 'Inactive' ? 'Unavailable' : 'Register'}
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
            href="/"
            className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 inline-block"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllWalks;
