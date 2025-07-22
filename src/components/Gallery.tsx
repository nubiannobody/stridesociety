import React from 'react';
import { Camera, Users, MapPin, Calendar } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      image: "/images/trailImages/morning motivation @ tiffany park.png",
      title: "Morning Motivation @ Tiffany Park",
      location: "Tiffany Park, Renton",
      date: "March 2025",
      participants: 25
    },
    {
      image:  "/images/trailImages/Sunset Stroll at Lake Washington.png",
      title: "Sunset Stroll at Lake Washington Blvd",
      location: "Lake Washington Blvd, Renton",
      date: "February 2025",
      participants: 18
    },
    {
      image: "/images/trailImages/heritage park path.png",
      title: "Heritage Park Path",
      location: "Heritage Park, Renton",
      date: "February 2025",
      participants: 32
    },
    {
      image:  "/images/trailImages/urban explorer renton loop.png",
      location: "Downtown Renton",
      date: "January 2025",
      participants: 22
    },
    {
      image: "/images/trailImages/Coos Creek Trail.png",
      title: "Coos Creek Trail Loop",
      location: "Coos Creek Trail, Renton",
      date: "January 2025",
      participants: 15
    },
    {
      image: "/images/trailImages/fitbar to coulon park.png",
      title: "FitBar to Coulon Park",
      location: "Renton Waterfront",
      date: "December 2024",
      participants: 28
    },
    {
      image:  "/images/trailImages/heritage park path.png",
      title: "Nature & Nurture Walk",
      location: "Gene Coulon Park",
      date: "December 2024",
      participants: 35
    },
    {
      image: "/images/trailImages/Cedar River Trail.png",
      location: "Cedar River Trail",
      date: "November 2024",
      participants: 20
    },
    {
      image: "/images/trailImages/urban explorer renton loop.png",
      title: "City Lights Walk",
      location: "Downtown Renton",
      date: "November 2024",
      participants: 26
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capture the moments, celebrate the journey. Here are some highlights from our recent walks and community events in Renton, WA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center text-white text-sm opacity-90">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-colors duration-200">
                    <Camera className="h-5 w-5 text-black" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{item.participants} walkers</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Share Your Walking Moments</h3>
            <p className="text-gray-600 mb-6">
              Tag us in your photos from our walks! Use #StrideSociety to be featured in our gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <label className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer inline-block">
  Upload Photos
  <input
    type="file"
    accept="image/*"
    multiple
    className="hidden"
    onChange={(e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        console.log([...files]); // replace this with actual upload logic
      }
    }}
  />
</label>
<a href="#gallery">
  <button className="border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200">
    View All Photos
  </button>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;