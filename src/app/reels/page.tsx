'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Reels() {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Mind', 'Body', 'Lifestyle', 'Discipline', 'Recovery'];

  const auraReels = [
    {
      id: 1,
      title: 'Aura Reel #1 – Cold Showers',
      description: 'Discover the life-changing benefits of cold exposure and how to start your journey.',
      thumbnail: '🚿',
      duration: '0:45',
      views: '12.5K',
      tags: ['Mind', 'Discipline'],
      date: '2024-09-15',
      featured: true
    },
    {
      id: 2,
      title: 'Aura Reel #2 – Sleep Power',
      description: 'Unlock the secrets of deep sleep and wake up with unstoppable energy.',
      thumbnail: '😴',
      duration: '1:02',
      views: '8.3K',
      tags: ['Body', 'Recovery'],
      date: '2024-09-12',
      featured: true
    },
    {
      id: 3,
      title: 'Aura Reel #3 – Morning Rituals',
      description: 'Build a morning routine that sets you up for daily success.',
      thumbnail: '🌅',
      duration: '0:58',
      views: '15.7K',
      tags: ['Lifestyle', 'Discipline'],
      date: '2024-09-10',
      featured: false
    },
    {
      id: 4,
      title: 'Aura Reel #4 – Workout Intensity',
      description: 'Push your limits with these high-intensity training techniques.',
      thumbnail: '💪',
      duration: '1:15',
      views: '9.8K',
      tags: ['Body', 'Discipline'],
      date: '2024-09-08',
      featured: false
    },
    {
      id: 5,
      title: 'Aura Reel #5 – Mindfulness Meditation',
      description: 'Quick meditation techniques to center yourself in chaos.',
      thumbnail: '🧘',
      duration: '0:52',
      views: '6.2K',
      tags: ['Mind', 'Recovery'],
      date: '2024-09-05',
      featured: false
    },
    {
      id: 6,
      title: 'Aura Reel #6 – Nutrition Basics',
      description: 'Essential nutrition principles for optimal performance.',
      thumbnail: '🥗',
      duration: '1:08',
      views: '11.4K',
      tags: ['Body', 'Lifestyle'],
      date: '2024-09-03',
      featured: false
    },
    {
      id: 7,
      title: 'Aura Reel #7 – Breathing Techniques',
      description: 'Master your breath to control your state and performance.',
      thumbnail: '🌬️',
      duration: '0:47',
      views: '7.9K',
      tags: ['Mind', 'Body'],
      date: '2024-09-01',
      featured: false
    },
    {
      id: 8,
      title: 'Aura Reel #8 – Goal Setting',
      description: 'Set and achieve goals that actually matter to you.',
      thumbnail: '🎯',
      duration: '1:12',
      views: '13.1K',
      tags: ['Mind', 'Discipline'],
      date: '2024-08-29',
      featured: false
    },
    {
      id: 9,
      title: 'Aura Reel #9 – Mobility Flow',
      description: 'Improve flexibility and movement with this daily flow.',
      thumbnail: '🤸',
      duration: '0:55',
      views: '5.6K',
      tags: ['Body', 'Recovery'],
      date: '2024-08-27',
      featured: false
    },
    {
      id: 10,
      title: 'Aura Reel #10 – Mental Toughness',
      description: 'Build unshakeable mental resilience in any situation.',
      thumbnail: '🧠',
      duration: '1:05',
      views: '18.9K',
      tags: ['Mind', 'Discipline'],
      date: '2024-08-25',
      featured: false
    },
    {
      id: 11,
      title: 'Aura Reel #11 – Hydration Habits',
      description: 'Optimize your hydration for peak mental and physical performance.',
      thumbnail: '💧',
      duration: '0:43',
      views: '4.3K',
      tags: ['Body', 'Lifestyle'],
      date: '2024-08-23',
      featured: false
    },
    {
      id: 12,
      title: 'Aura Reel #12 – Evening Wind Down',
      description: 'Create the perfect evening routine for recovery and growth.',
      thumbnail: '🌙',
      duration: '0:51',
      views: '8.7K',
      tags: ['Lifestyle', 'Recovery'],
      date: '2024-08-21',
      featured: false
    }
  ];

  const filteredReels = selectedTag === 'All' 
    ? auraReels 
    : auraReels.filter(reel => reel.tags.includes(selectedTag));

  const featuredReels = auraReels.filter(reel => reel.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            #AuraSeries
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Body + Mind transformation through daily practices and mindset shifts
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Subscribe for your daily dose of Aura and join thousands transforming their lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Subscribe on YouTube
            </button>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Reels</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular content to kickstart your transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredReels.map((reel) => (
              <div key={reel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{reel.thumbnail}</div>
                      <div className="text-white font-medium text-lg">{reel.title}</div>
                      <div className="text-white text-sm mt-2">{reel.duration}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {reel.duration}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {reel.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{reel.title}</h3>
                  <p className="text-gray-600 mb-4">{reel.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{reel.views} views</span>
                    <span>{new Date(reel.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Reels Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All #AuraSeries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {filteredReels.length} videos to transform your body and mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredReels.map((reel) => (
              <div key={reel.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                    <div className="text-4xl">{reel.thumbnail}</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {reel.duration}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 text-purple-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {reel.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm line-clamp-2">
                    {reel.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{reel.views} views</span>
                    <span>{new Date(reel.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss an Aura Dose</h2>
          <p className="text-xl mb-8">
            Get daily reels delivered straight to your feed. Transform your life one minute at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Subscribe Now
            </button>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
