import React from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About Stride Society</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that walking is more than just movement—it's a pathway to connection, wellness, and community. Founded in 2020, Stride Society has become the premier walking club in our city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              To create a welcoming community where people of all ages and fitness levels can come together to explore our beautiful city on foot. We promote physical wellness, mental health, and social connection through the simple act of walking together.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every week, we organize group walks that range from leisurely strolls to more challenging routes, ensuring there's something for everyone. Our members form lasting friendships, discover new neighborhoods, and improve their health one step at a time.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">500+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">3</div>
                <div className="text-gray-600">Years Running</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">15</div>
                <div className="text-gray-600">Walking Routes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">1200+</div>
                <div className="text-gray-600">Miles Walked</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Wellness Focus</h4>
            <p className="text-gray-600">Physical and mental health through regular walking</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Community</h4>
            <p className="text-gray-600">Building connections and friendships</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">All Levels</h4>
            <p className="text-gray-600">Walks for every fitness level and ability</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Achievement</h4>
            <p className="text-gray-600">Celebrating milestones and progress</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;