import Link from 'next/link';

export default function About() {
  const philosophyPoints = [
    {
      title: 'Body + Mind = Aura',
      description: 'True transformation happens when physical fitness and mental strength work in harmony. We believe in the power of integrated wellness.',
      icon: '⚖️',
    },
    {
      title: 'Discipline is Freedom',
      description: 'Through consistent practice and unwavering commitment, we unlock our true potential and create lasting change.',
      icon: '🔒',
    },
    {
      title: 'Community Over Competition',
      description: 'We grow stronger together. Our ecosystem supports collective growth and shared success.',
      icon: '🤝',
    },
    {
      title: 'Science Meets Spirit',
      description: 'Combining evidence-based practices with ancient wisdom to create a holistic approach to personal development.',
      icon: '🔬',
    },
  ];

  const coreValues = [
    {
      title: 'Authenticity',
      description: 'Be real, be raw, be unapologetically you.',
    },
    {
      title: 'Resilience',
      description: 'Fall seven times, stand up eight.',
    },
    {
      title: 'Growth',
      description: 'Embrace discomfort as the catalyst for evolution.',
    },
    {
      title: 'Impact',
      description: 'Leave every person and place better than you found them.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About Aura
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Our philosophy is simple: Strong Body. Strong Mind.
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're building an ecosystem where discipline meets purpose, and transformation becomes a lifestyle.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The core beliefs that guide everything we do at Aura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            To empower individuals to become uncopyable versions of themselves through the integration of physical excellence and mental mastery. We provide the tools, community, and guidance needed to transform daily habits into extraordinary results.
          </p>
          <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-r-lg">
            <p className="text-purple-900 font-medium text-lg italic">
              "Aura isn't just about building a better body or a stronger mind—it's about creating a lifestyle where both thrive together, making you truly uncopyable."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that define who we are and how we operate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Aura Movement</h2>
          <p className="text-xl mb-8 text-gray-200">
            Ready to transform your body and mind into a lifestyle of power and resilience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Your Journey
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
    </div>
  );
}
