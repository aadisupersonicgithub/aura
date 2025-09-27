import Link from 'next/link';

export default function Home() {
  const ecosystemItems = [
    {
      title: 'Fitness App',
      description: 'Track workouts, build habits, monitor progress',
      icon: '💪',
      href: '/ecosystem',
    },
    {
      title: 'Protein Factory',
      description: 'Diet plans, custom recipes, nutrition guidance',
      icon: '🥗',
      href: '/ecosystem',
    },
    {
      title: 'Sleep Mastery',
      description: 'Tools, guides, and sleep optimization',
      icon: '😴',
      href: '/ecosystem',
    },
    {
      title: 'Mindset Hub',
      description: 'Courses, psychology hacks, personal growth',
      icon: '🧠',
      href: '/mindset',
    },
    {
      title: 'Yoga + Mobility',
      description: 'Flow, stretches, dance, flexibility',
      icon: '🧘',
      href: '/ecosystem',
    },
    {
      title: 'Life Habits',
      description: 'Discipline, daily rituals, consistency',
      icon: '⚡',
      href: '/ecosystem',
    },
  ];

  const auraReels = [
    { title: 'Aura Reel #1 – Cold Showers', tag: 'Mind' },
    { title: 'Aura Reel #2 – Sleep Power', tag: 'Body' },
    { title: 'Aura Reel #3 – Morning Rituals', tag: 'Lifestyle' },
    { title: 'Aura Reel #4 – Workout Intensity', tag: 'Body' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-6xl">A</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Strong Body. Strong Mind.
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
            Aura is the ecosystem of discipline, fitness, and mindset mastery. We transform body + mind into a lifestyle of power and resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Join Aura
            </Link>
            <Link
              href="/ecosystem"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Body + Mind Reels Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">#AuraSeries</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Body + Mind transformation through daily practices and mindset shifts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auraReels.map((reel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <div className="text-sm font-medium">Video Preview</div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mb-2">
                    {reel.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{reel.title}</h3>
                  <Link
                    href="/reels"
                    className="text-purple-600 hover:text-purple-800 font-medium text-sm"
                  >
                    Watch Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ecosystem Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your body and mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-gray-50 rounded-xl p-8 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <span className="text-purple-600 font-medium group-hover:text-purple-800">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Become Uncopyable</h2>
          <p className="text-xl mb-8 text-gray-200">
            Start your journey to unstoppable discipline, unwavering focus, and peak performance.
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Start Your Aura Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
