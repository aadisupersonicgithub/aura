'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Digital Products', 'Physical Products', 'Courses', 'Programs'];

  const products = [
    {
      id: 1,
      title: 'Aura Fitness App - Premium',
      description: 'Complete fitness tracking with personalized workouts, progress monitoring, and habit building.',
      price: 19.99,
      type: 'Digital',
      category: 'Digital Products',
      image: '💪',
      features: ['Custom workout plans', 'Progress tracking', 'Habit building', 'Performance analytics'],
      rating: 4.8,
      reviews: 1247,
      popular: true
    },
    {
      id: 2,
      title: 'Cold Exposure Mastery Course',
      description: 'Complete guide to cold therapy from beginner to advanced protocols.',
      price: 49.99,
      type: 'Digital',
      category: 'Courses',
      image: '❄️',
      features: ['Video tutorials', 'Protocol guides', 'Progress tracking', 'Community access'],
      rating: 4.9,
      reviews: 892,
      popular: true
    },
    {
      id: 3,
      title: 'Sleep Optimization Program',
      description: 'Transform your sleep quality with science-backed methods and nightly routines.',
      price: 39.99,
      type: 'Digital',
      category: 'Programs',
      image: '😴',
      features: ['Sleep tracking', 'Optimization guides', 'Recovery protocols', 'Dream journaling'],
      rating: 4.7,
      reviews: 634,
      popular: false
    },
    {
      id: 4,
      title: 'Aura Protein Shaker',
      description: 'Premium quality shaker bottle with Aura branding and measurement markings.',
      price: 24.99,
      type: 'Physical',
      category: 'Physical Products',
      image: '🥤',
      features: ['Leak-proof design', 'Measurement markings', 'Durable material', 'Aura branding'],
      rating: 4.6,
      reviews: 423,
      popular: false
    },
    {
      id: 5,
      title: 'Mindset Mastery Bundle',
      description: 'Complete collection of mindset courses, guides, and tools for mental fortitude.',
      price: 99.99,
      type: 'Digital',
      category: 'Digital Products',
      image: '🧠',
      features: ['5 mindset courses', 'Psychology guides', 'Mental toughness training', 'Lifetime access'],
      rating: 4.9,
      reviews: 1567,
      popular: true
    },
    {
      id: 6,
      title: 'Mobility Fundamentals Course',
      description: 'Build a foundation of movement that lasts a lifetime with comprehensive mobility training.',
      price: 34.99,
      type: 'Digital',
      category: 'Courses',
      image: '🤸',
      features: ['Video demonstrations', 'Progressive routines', 'Flexibility tracking', 'Injury prevention'],
      rating: 4.8,
      reviews: 789,
      popular: false
    },
    {
      id: 7,
      title: 'Aura Training Journal',
      description: 'Physical journal for tracking workouts, nutrition, and mindset progress.',
      price: 19.99,
      type: 'Physical',
      category: 'Physical Products',
      image: '📔',
      features: ['Workout logs', 'Nutrition tracking', 'Mindset journaling', 'Goal setting pages'],
      rating: 4.7,
      reviews: 312,
      popular: false
    },
    {
      id: 8,
      title: 'Complete Aura Transformation',
      description: 'The ultimate bundle: all digital products, courses, and programs for total transformation.',
      price: 199.99,
      type: 'Digital',
      category: 'Digital Products',
      image: '✨',
      features: ['All digital products', 'Complete course library', 'Priority support', 'Community access'],
      rating: 5.0,
      reviews: 2341,
      popular: true
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const popularProducts = products.filter(product => product.popular);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Aura Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Tools, courses, and products to accelerate your transformation journey
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to build your uncopyable lifestyle
          </p>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most sought-after tools for transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                  <div className="text-6xl">{product.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
                      {product.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Get Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {filteredProducts.length} products to accelerate your transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-purple-300">
                <div className="h-64 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                  <div className="text-6xl">{product.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                      Features
                    </h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      {product.type === 'Digital' && (
                        <span className="text-xs text-green-600 ml-2">Digital</span>
                      )}
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                      Get Access
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Complete Transformation Bundle</h2>
                <p className="text-xl mb-6 text-gray-200">
                  Get every Aura product, course, and program in one ultimate package. Save over 60% compared to buying individually.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    All digital products and courses
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Lifetime access to all content
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Priority customer support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Exclusive community access
                  </li>
                </ul>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold">$199.99</span>
                  <span className="text-xl text-gray-300 line-through">$499.99</span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save 60%
                  </span>
                </div>
                <button className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105">
                  Get Complete Bundle
                </button>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">✨</div>
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Total Value</h3>
                  <p className="text-3xl font-bold mb-2">$499.99</p>
                  <p className="text-lg text-gray-300">Your price: $199.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Aura Transformation Guarantee</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're confident in our products. If you don't see results within 30 days, 
            we'll give you a full refund. No questions asked.
          </p>
          <div className="flex items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              30-Day Money Back
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Instant Access
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Lifetime Updates
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
