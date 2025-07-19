import React, { useState } from 'react';
import { MessageCircle, Send, Users, Clock, Pin } from 'lucide-react';

const CommunityChat: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Sarah M.",
      message: "Great walk this morning at Coulon Park! The weather was perfect 🌞",
      time: "2 hours ago",
      isPinned: false
    },
    {
      id: 2,
      user: "Mike R.",
      message: "Anyone interested in an early morning walk tomorrow? I'm thinking Tiffany Park around 7 AM",
      time: "4 hours ago",
      isPinned: false
    },
    {
      id: 3,
      user: "Walk Leader - Jenny",
      message: "Reminder: Tomorrow's Heritage Park walk starts at 8 AM sharp. Don't forget your water bottles!",
      time: "6 hours ago",
      isPinned: true
    },
    {
      id: 4,
      user: "David L.",
      message: "Just completed my 50th walk with Stride Society! This community is amazing 🎉",
      time: "8 hours ago",
      isPinned: false
    },
    {
      id: 5,
      user: "Lisa K.",
      message: "New member here! Looking forward to my first walk this weekend. Any tips for a beginner?",
      time: "12 hours ago",
      isPinned: false
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: "You",
        message: newMessage,
        time: "Just now",
        isPinned: false
      };
      setMessages([message, ...messages]);
      setNewMessage('');
    }
  };

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About Stride Society</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that walking is more than just movement—it's a pathway to connection, wellness, and community. Founded in 2020, Stride Society has become the premier walking club in our city.
          </p>
        </div>

        {/* Community Chat Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="h-12 w-12 text-black mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-black">Community Chat</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow walkers, share experiences, and plan meetups. Our community is here to support and motivate each other.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-black text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Stride Society Community</h3>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2" />
                <span>127 members online</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${message.isPinned ? 'bg-yellow-50 p-3 rounded-lg' : ''}`}
              >
                {message.isPinned && (
                  <Pin className="h-4 w-4 text-yellow-600 mt-1 flex-shrink-0" />
                )}
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {message.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-black">{message.user}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {message.time}
                    </div>
                  </div>
                  <p className="text-gray-700">{message.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Share your thoughts, ask questions, or plan a meetup..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-black mb-2">Be Respectful</h4>
              <p>Treat all members with kindness and respect. We're all here to support each other's walking journey.</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Stay On Topic</h4>
              <p>Keep discussions related to walking, fitness, and community events. Off-topic posts may be removed.</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">No Spam</h4>
              <p>Avoid repetitive posts or promotional content. Share genuine experiences and helpful information.</p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-2">Safety First</h4>
              <p>When planning meetups, always prioritize safety and follow our group walking guidelines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityChat;
