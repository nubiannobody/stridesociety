import React, { useState, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, Users } from 'lucide-react';

const EventsCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1)); // March 2025
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const baseEvents = [
    { title: "Spring Kickoff Walk", time: "10:00 AM", location: "City Park", type: "special" },
    { title: "Morning Motivation @ Tiffany Park", time: "7:00 AM", location: "Tiffany Park", type: "regular" },
    { title: "Lunch Break Stroll", time: "12:00 PM", location: "Downtown Renton", type: "regular" },
    { title: "FitBar to Coulon Park", time: "9:00 AM", location: "FitBar Café", type: "regular" },
    { title: "Sunset Stroll at Lake Washington", time: "6:30 PM", location: "Lake Washington Blvd", type: "social" },
    { title: "Morning Motivation @ Tiffany Park", time: "7:00 AM", location: "Tiffany Park", type: "regular" },
    { title: "Urban Explorer - Renton Loop", time: "10:00 AM", location: "Downtown Renton", type: "regular" },
    { title: "Heritage Park Path", time: "8:00 AM", location: "Heritage Park", type: "regular" },
    { title: "Community Cleanup Walk", time: "10:00 AM", location: "Coulon Park", type: "volunteer" },
    { title: "Monthly Challenge", time: "9:00 AM", location: "Various", type: "challenge" }
  ];

  // Generate random events for the current month
  const events = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentDate);
    const shuffledEvents = [...baseEvents];
    const randomEvents = [];
    
    // Generate random dates for events (ensure no duplicates on same day)
    const usedDates = new Set();
    
    shuffledEvents.forEach(event => {
      let randomDate;
      do {
        randomDate = Math.floor(Math.random() * daysInMonth) + 1;
      } while (usedDates.has(randomDate));
      
      usedDates.add(randomDate);
      randomEvents.push({
        ...event,
        date: randomDate
      });
    });
    
    return randomEvents.sort((a, b) => a.date - b.date);
  }, [currentDate]);

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
    setSelectedDate(null); // Reset selected date when changing months
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const getEventForDate = (date: number) => {
    return events.find(e => e.date === date);
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'special': return 'bg-purple-100 text-purple-800';
      case 'social': return 'bg-blue-100 text-blue-800';
      case 'volunteer': return 'bg-green-100 text-green-800';
      case 'challenge': return 'bg-red-100 text-red-800';
      default: return 'bg-orange-100 text-orange-800';
    }
  };

  const getCalendarDayColor = (type: string) => {
    switch (type) {
      case 'special': return 'bg-purple-500 text-white hover:bg-purple-600';
      case 'social': return 'bg-blue-500 text-white hover:bg-blue-600';
      case 'volunteer': return 'bg-green-500 text-white hover:bg-green-600';
      case 'challenge': return 'bg-red-500 text-white hover:bg-red-600';
      default: return 'bg-orange-500 text-white hover:bg-orange-600';
    }
  };

  const selectedDateEvents = selectedDate ? 
    events.filter(event => event.date === selectedDate) : 
    events.filter(event => event.date === new Date().getDate());

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  return (
    <section id="events" className="py-6 bg-white">
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
                  const event = getEventForDate(day);
                  const isSelected = selectedDate === day;
                  return (
                    <div
                      key={day}
                      onClick={() => handleDateClick(day)}
                      className={`p-2 h-16 border border-gray-200 rounded cursor-pointer transition-colors duration-200 ${
                        event ? getCalendarDayColor(event.type) : 
                        isSelected ? 'bg-blue-100 border-blue-300' :
                        'bg-white hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium">{day}</div>
                      {event && (
                        <div className="text-xs mt-1 truncate">
                          {event.title}
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
              <h3 className="text-xl font-bold text-black mb-4">
                {selectedDate ? `Events for ${monthNames[currentDate.getMonth()]} ${selectedDate}` : "Selected Day's Events"}
              </h3>
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
                <p className="text-gray-600">No events scheduled for this day.</p>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">Event Types</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
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

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">This Month's Events</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {events.map((event, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleDateClick(event.date)}
                    className="flex items-center justify-between p-2 bg-white rounded cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-sm">{event.title}</div>
                      <div className="text-xs text-gray-600">{event.time}</div>
                    </div>
                    <div className="text-sm font-bold text-black">{event.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;