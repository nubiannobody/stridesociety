import React from 'react';
import { Navigation, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Navigation className="h-8 w-8 text-white mr-3" />
              <span className="text-2xl font-bold text-white">Stride Society</span>
            </div>
            <p className="text-gray-300 mb-6">
              Connect. Walk. Thrive. Building a community of wellness through the simple joy of walking together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#walks" className="text-gray-300 hover:text-white transition-colors duration-200">Upcoming Walks</a></li>
              <li><a href="#join" className="text-gray-300 hover:text-white transition-colors duration-200">Join Club</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a></li>
              <li><a href="#routes" className="text-gray-300 hover:text-white transition-colors duration-200">Walking Routes</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#store" className="text-gray-300 hover:text-white transition-colors duration-200">Merch Store</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Walking Buddy Program</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Route Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Wellness Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-300 mr-3" />
                <span className="text-gray-300">hello@stridesociety.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-300 mr-3" />
                <span className="text-gray-300">(555) 123-STRIDE</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-300 mr-3 mt-1" />
                <span className="text-gray-300">123 Walking Street<br />Renton, WA 98058</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Stride Society. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;