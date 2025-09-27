import Link from 'next/link';

export default function Ecosystem() {
  const ecosystemItems = [
    {
      title: 'Fitness App',
      description: 'Track workouts, build habits, monitor progress with our comprehensive fitness tracking system.',
      icon: '💪',
      features: [
        'Custom workout plans',
        'Progress tracking',
        'Habit building',
        'Performance analytics'
      ],
      href: '/shop',
      category: 'Physical Development'
    },
    {
      title: 'Protein Factory',
      description: 'Diet plans, custom recipes, and nutrition guidance tailored to your fitness goals.',
      icon: '🥗',
      features: [
        'Personalized meal plans',
        'Recipe database',
        'Nutrition tracking',
        'Supplement guidance'
      ],
      href: '/shop',
      category: 'Nutrition'
    },
    {
      title: 'Sleep Mastery',
      description: 'Tools, guides, and sleep optimization techniques for peak recovery and performance.',
      icon: '😴',
      features: [
        'Sleep tracking',
        'Optimization guides',
        'Recovery protocols',
        'Dream journaling'
      ],
      href: '/shop',
      category: 'Recovery'
    },
    {
      title: 'Mindset Hub',
      description: 'Courses, psychology hacks, and personal growth resources for mental mastery.',
      icon: '🧠',
      features: [
        'Psychology courses',
        'Mental toughness training',
        'Focus techniques',
        'Personal development'
      ],
      href: '/mindset',
      category: 'Mental Development'
    },
    {
      title: 'Yoga + Mobility',
      description: 'Flow, stretches, dance, and flexibility training for holistic movement.',
      icon: '🧘',
      features: [
        'Yoga flows',
        'Mobility routines',
        'Movement meditation',
        'Flexibility training'
      ],
      href: '/shop',
      category: 'Movement'
    },
    {
      title: 'Life Habits',
      description: 'Discipline systems, daily rituals, and consistency frameworks for lasting change.',
      icon: '⚡',
      features: [
        'Habit tracking',
        'Daily rituals',
        'Discipline systems',
        'Consistency frameworks'
      ],
      href: '/shop',
      category: 'Lifestyle'
    }
  ];

  const categories = [...new Set(ecosystemItems.map(item => item.category))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Aura Ecosystem
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Everything you need to transform your body and mind into a lifestyle of power and resilience.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our integrated approach combines physical excellence with mental mastery across six core pillars.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors border"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Six Pillars</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each component of our ecosystem is designed to work together for complete transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemItems.map((item, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-purple-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Explore {item.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our ecosystem works together to create a complete transformation system
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connected</h3>
                <p className="text-gray-600">All components work together seamlessly</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven</h3>
                <p className="text-gray-600">Track progress across all areas of life</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Goal-Oriented</h3>
                <p className="text-gray-600">Every tool designed for specific outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Ecosystem Journey</h2>
          <p className="text-xl mb-8 text-gray-200">
            Choose your starting point and begin building your uncopyable lifestyle today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore All Tools
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Personal Guidance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
