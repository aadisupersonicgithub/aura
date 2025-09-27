import Link from 'next/link';

export default function Mindset() {
  const blogCategories = [
    { name: 'Discipline', count: 12, color: 'bg-purple-600' },
    { name: 'Psychology', count: 8, color: 'bg-blue-600' },
    { name: 'Lifestyle', count: 15, color: 'bg-green-600' },
    { name: 'Focus', count: 6, color: 'bg-yellow-600' },
    { name: 'Resilience', count: 9, color: 'bg-red-600' },
  ];

  const featuredPosts = [
    {
      title: 'Why Cold Showers Work: The Science Behind the Shock',
      excerpt: 'Discover how cold exposure triggers a cascade of physiological and psychological benefits that build mental toughness.',
      category: 'Discipline',
      readTime: '5 min read',
      date: 'September 15, 2024',
      image: '🚿',
      slug: 'cold-showers-science'
    },
    {
      title: 'Sleep Like a Warrior: Optimize Your Recovery',
      excerpt: 'Master the art of deep sleep and wake up ready to conquer your day with these proven techniques.',
      category: 'Lifestyle',
      readTime: '8 min read',
      date: 'September 12, 2024',
      image: '😴',
      slug: 'sleep-warrior-optimization'
    },
    {
      title: 'Mobility = Strength: The Hidden Connection',
      excerpt: 'Understanding how flexibility and mobility training directly contributes to strength gains and injury prevention.',
      category: 'Focus',
      readTime: '6 min read',
      date: 'September 10, 2024',
      image: '🧘',
      slug: 'mobility-strength-connection'
    },
  ];

  const recentPosts = [
    {
      title: 'The Power of Morning Rituals',
      excerpt: 'How to design a morning routine that sets you up for success every single day.',
      category: 'Discipline',
      readTime: '4 min read',
      date: 'September 8, 2024',
      slug: 'morning-rituals-power'
    },
    {
      title: 'Building Unshakeable Confidence',
      excerpt: 'Practical strategies to develop genuine self-confidence that lasts.',
      category: 'Psychology',
      readTime: '7 min read',
      date: 'September 5, 2024',
      slug: 'unshakeable-confidence'
    },
    {
      title: 'Nutrition for Mental Clarity',
      excerpt: 'Foods and eating patterns that enhance cognitive function and focus.',
      category: 'Lifestyle',
      readTime: '5 min read',
      date: 'September 3, 2024',
      slug: 'nutrition-mental-clarity'
    },
    {
      title: 'The Art of Deep Focus',
      excerpt: 'Techniques to enter flow state and maintain concentration for hours.',
      category: 'Focus',
      readTime: '6 min read',
      date: 'September 1, 2024',
      slug: 'deep-focus-art'
    },
    {
      title: 'Bouncing Back from Failure',
      excerpt: 'How to turn setbacks into comebacks with resilience training.',
      category: 'Resilience',
      readTime: '5 min read',
      date: 'August 29, 2024',
      slug: 'bouncing-back-failure'
    },
    {
      title: 'The Psychology of Habit Formation',
      excerpt: 'Understanding the science behind building habits that stick.',
      category: 'Psychology',
      readTime: '8 min read',
      date: 'August 27, 2024',
      slug: 'habit-formation-psychology'
    },
  ];

  const guides = [
    {
      title: 'Complete Cold Exposure Guide',
      description: 'From beginner to advanced protocols for cold therapy',
      level: 'Advanced',
      duration: '2 hours',
      icon: '❄️'
    },
    {
      title: 'Sleep Optimization Masterclass',
      description: 'Transform your sleep quality with science-backed methods',
      level: 'Intermediate',
      duration: '1.5 hours',
      icon: '🌙'
    },
    {
      title: 'Mobility Fundamentals',
      description: 'Build a foundation of movement that lasts a lifetime',
      level: 'Beginner',
      duration: '1 hour',
      icon: '🤸'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mindset Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Master your psychology, unlock your potential, and build the mental fortitude to become uncopyable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#featured"
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Read Latest Articles
            </Link>
            <Link
              href="#guides"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Explore Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {blogCategories.map((category, index) => (
              <button
                key={index}
                className={`${category.color} text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2`}
              >
                {category.name}
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="featured" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep dives into the mindset principles that drive transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-purple-300">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                  <div className="text-6xl">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/mindset/${post.slug}`}
                      className="text-purple-600 font-medium hover:text-purple-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In-Depth Guides</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses and masterclasses for deep transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{guide.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {guide.level}
                  </span>
                  <span className="text-sm text-gray-500">{guide.duration}</span>
                </div>
                <Link
                  href="/shop"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center block"
                >
                  Start Learning
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh insights and strategies for your mindset journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="group border-l-4 border-purple-600 pl-6 hover:bg-gray-50 transition-colors rounded-r-lg p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/mindset/${post.slug}`}
                    className="text-purple-600 font-medium hover:text-purple-800 transition-colors text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/mindset/archive"
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              View All Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay in the Aura Zone</h2>
          <p className="text-xl mb-8 text-gray-200">
            Get weekly mindset insights, exclusive content, and early access to new guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
