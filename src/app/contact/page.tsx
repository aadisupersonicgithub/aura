'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message, interest });
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setInterest('');
  };

  const communityLinks = [
    {
      name: 'Discord Community',
      description: 'Join our active Discord community for daily discussions and support',
      icon: '💬',
      url: '#',
      members: '2.5K members'
    },
    {
      name: 'Instagram',
      description: 'Follow for daily motivation, tips, and transformation stories',
      icon: '📸',
      url: '#',
      members: '15K followers'
    },
    {
      name: 'YouTube',
      description: 'Subscribe to #AuraSeries for daily transformation content',
      icon: '🎥',
      url: '#',
      members: '8.2K subscribers'
    },
    {
      name: 'Twitter',
      description: 'Join the conversation and get real-time updates',
      icon: '🐦',
      url: '#',
      members: '5.1K followers'
    }
  ];

  const faqs = [
    {
      question: 'How do I start my Aura journey?',
      answer: 'Start by subscribing to our newsletter, joining the Discord community, and exploring our free content. From there, you can choose specific products or programs that align with your goals.'
    },
    {
      question: 'What makes Aura different from other fitness programs?',
      answer: 'Aura integrates physical fitness with mental mastery, creating a holistic approach to transformation. We focus on building sustainable habits rather than quick fixes.'
    },
    {
      question: 'Do I need to be fit to start?',
      answer: 'Absolutely not! Aura is designed for all fitness levels. Our programs are scalable and adapt to your current fitness level while helping you progress.'
    },
    {
      question: 'How much time do I need to commit daily?',
      answer: 'You can start with as little as 15-20 minutes per day. Our approach focuses on consistency over intensity, making it sustainable for busy lifestyles.'
    },
    {
      question: 'Can I get personal coaching?',
      answer: 'Yes! We offer personalized coaching options through our premium programs. Join our community to learn more about 1-on-1 coaching opportunities.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Join Aura
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Start your transformation journey today and become uncopyable
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with our community, get personalized guidance, and access exclusive content
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay in the Aura Zone</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly insights, exclusive content, and early access to new programs. 
            Join thousands transforming their lives with Aura.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">What interests you most?</option>
                  <option value="fitness">Fitness & Training</option>
                  <option value="mindset">Mindset & Psychology</option>
                  <option value="nutrition">Nutrition & Diet</option>
                  <option value="recovery">Sleep & Recovery</option>
                  <option value="lifestyle">Lifestyle & Habits</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors transform hover:scale-105 duration-200"
              >
                Join the Movement
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Join 10,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with like-minded individuals on your transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-300 border border-gray-200 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{link.description}</p>
                <p className="text-purple-600 font-medium text-sm">{link.members}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Want to collaborate? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Here's your quick start guide to begin your Aura transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Join the Community</h3>
              <p className="text-gray-200 mb-4">Connect with others on the same journey in our Discord community</p>
              <a href="#" className="text-white font-medium hover:underline">Join Discord →</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Start with Free Content</h3>
              <p className="text-gray-200 mb-4">Explore our free guides, articles, and #AuraSeries videos</p>
              <Link href="/mindset" className="text-white font-medium hover:underline">Explore Content →</Link>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Path</h3>
              <p className="text-gray-200 mb-4">Select programs and tools that align with your specific goals</p>
              <Link href="/shop" className="text-white font-medium hover:underline">Browse Shop →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Transformation Starts Now</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait for tomorrow. The best time to start your Aura journey is right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-purple-600 hover:bg-purple-50 text-purple-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Learn More About Aura
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
