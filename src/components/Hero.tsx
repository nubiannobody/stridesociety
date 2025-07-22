import React from 'react';
import { ArrowRight, MapPin, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">SS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
              Stride Society
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect. Walk. Thrive. Join our community of walkers who believe that every step forward is a step toward wellness and connection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
  <a
    href="#join"
    className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center inline-flex justify-center"
  >
    Join Stride Society
    <ArrowRight className="ml-2 h-5 w-5" />
  </a>
  <Link
  to="/routes"
  className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 inline-flex justify-center"
>
  View Routes
</Link>
</div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Join 500+ local walkers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Routes</h3>
              <p className="text-gray-600">15+ scenic walking paths</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Walks</h3>
              <p className="text-gray-600">1 walk per month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;