import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How do I join a walk?",
      answer: "Simply browse our upcoming walks section, choose a walk that interests you, and click the 'Register' button. Fill out the registration form with your details and you're all set! We recommend arriving 10 minutes early for check-in and safety briefing."
    },
    {
      question: "Is this group beginner friendly?",
      answer: "Absolutely! Stride Society welcomes walkers of all fitness levels and experience. We have routes ranging from easy 2-mile strolls to more challenging 4+ mile walks. Our walk leaders are experienced and will ensure everyone feels comfortable and included."
    },
    {
      question: "What should I bring on a walk?",
      answer: "We recommend comfortable walking shoes, a water bottle, weather-appropriate clothing, and your phone for emergencies. For longer walks, you might want to bring a small snack. Most importantly, bring a positive attitude and be ready to meet new friends!"
    },
    {
      question: "Are walks canceled if it rains?",
      answer: "Light rain won't stop us! We believe there's no bad weather, only inappropriate clothing. However, we will cancel walks in severe weather conditions like thunderstorms, heavy snow, or dangerous conditions. Cancellations are communicated via email and our social media channels at least 2 hours before the scheduled start time."
    },
    {
      question: "How much does it cost to join?",
      answer: "Membership to Stride Society is completely free! All our regular walks are free for members. We occasionally have special events or workshops that may have a small fee to cover materials or refreshments, but these are always optional."
    },
    {
      question: "Can kids or pets come too?",
      answer: "We love families! Children are welcome on our family-friendly routes (clearly marked in our walk descriptions) when accompanied by a parent or guardian. For safety reasons, pets are not allowed on group walks, but we do organize special pet-friendly walks once a month - check our events calendar!"
    },
    {
      question: "What if I can't keep up with the group?",
      answer: "Don't worry! Our walk leaders always ensure no one gets left behind. We walk at a comfortable pace for the group and take regular breaks. If you're concerned about pace, let us know when you register and we can pair you with a walking buddy or recommend a more suitable route."
    },
    {
      question: "Do I need to be a member to attend walks?",
      answer: "While membership is free and highly recommended, first-time visitors can join up to 2 walks as a guest to see if our community is a good fit. After that, we ask that you become a member to continue participating. Membership gives you access to all walks, events, and our supportive community."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-12 w-12 text-black mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-black">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions about joining Stride Society? We got answers to our most common questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-black pr-4">{item.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-black mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We're here to help! Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
              >
                Contact Us
              </a>
              <a 
                href="#join"
                className="border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors duration-200 inline-block"
              >
                Join Community Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
