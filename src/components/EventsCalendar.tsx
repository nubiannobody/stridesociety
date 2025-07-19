import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, Users } from 'lucide-react';

const EventsCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1)); // March 2025

  const events = [
    { date: 5, title: "Spring Kickoff Walk", time: "10:00 AM", location: "City Park", type: "special" },
    { date: 8, title: "Morning Motivation @ Tiffany Park", time: "7:00 AM", location: "Tiffany Park", type: "regular" },
    { date: 12, title: "Lunch Break Stroll", time: "12:00 PM", location: "Downtown Renton", type: "regular" },
    { date: 15, title: "FitBar to Coulon Park", time: "9:00 AM", location: "FitBar Café", type: "regular" },
    { date: 16, title: "Sunset Stroll at Lake Washington", time: "6:30 PM", location: "Lake Washington Blvd", type: "social" },
    { date: 18, title: "Morning Motivation @ Tiffany Park", time: "7:00 AM", location: "Tiffany Park", type: "regular" },
    { date: 20, title: "Urban Explorer - Renton Loop", time: "10:00 AM", location: "Downtown Renton", type: "regular" },
    { date: 22, title: "Heritage Park Path", time: "8:00 AM", location: "Heritage Park", type: "regular" },
    { date: 26, title: "Community Cleanup Walk", time: "10:00 AM", location: "Coulon Park", type: "volunteer" },
    { date: 29, title: "Monthly Challenge", time: "9:00 AM", location: "Various", type: "challenge" }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const getEventType = (date: number) => {
    const event = events.find(e => e.date === date);
    return event ? event.type : null;
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'special': return 'bg-purple-100 text-purple-800';
      case 'social': return 'bg-blue-100 text-blue-800';
      case 'volunteer': return 'bg-green-100 text-green-800';
      case 'challenge': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const selectedDateEvents = events.filter(event => event.date === 15); // Default to 15th

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Events Calendar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with all our walks, special events, and community activities in Renton, WA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-black">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => navigateMonth('prev')}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigateMonth('next')}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {emptyDays.map((_, index) => (
                  <div key={index} className="p-2 h-16"></div>
                ))}
                {daysArray.map((day) => {
                  const eventType = getEventType(day);
                  return (
                    <div
                      key={day}
                      className={`p-2 h-16 border border-gray-200 rounded cursor-pointer transition-colors duration-200 ${
                        eventType ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium">{day}</div>
                      {eventType && (
                        <div className="text-xs mt-1 truncate">
                          {events.find(e => e.date === day)?.title}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">Today's Events</h3>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map((event, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">{event.title}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getEventTypeColor(event.type)}`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No events scheduled for today.</p>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">Event Types</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <span className="text-sm">Regular Walks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-sm">Special Events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Social Events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm">Volunteer Events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-sm">Challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;