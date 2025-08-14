"use client"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/girl1.png",
    bio: "With over 15 years in the travel industry, Sarah founded Wanderlust to make extraordinary travel accessible to everyone.",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Head of Operations",
    image: "/man1.png",
    bio: "Mike ensures every trip runs smoothly with his expertise in logistics and customer service excellence.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Travel Experience Designer",
    image: "/girl2.png",
    bio: "Emma crafts unique itineraries that create unforgettable memories for our travelers worldwide.",
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    role: "Destination Specialist",
    image: "/man2.png",
    bio: "Alex has visited over 80 countries and brings insider knowledge to every destination we offer.",
  },
]

const stats = [
  { number: "50,000+", label: "Happy Travelers" },
  { number: "120+", label: "Destinations" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Satisfaction Rate" },
]

export default function About() {
  return (
    <div className="p-6 space-y-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4 dark:text-white">About Wanderlust</h1>
        <p className="text-xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
          We're passionate about creating extraordinary travel experiences that inspire, educate and connect people
          with the world's most amazing destinations.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden h-96">
        <img src="/travel-hero-mountain-lake-sunset.png" alt="Our Story" className="w-full h-full object-cover" />
        <div className="absolute inset-0  bg-opacity-100 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Explore Beyond Limits</h2>
            <p className="text-xl md:text-2xl font-light">Your adventure starts here</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold dark:text-emerald-500 text-emerald-600 mb-2">{stat.number}</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-serif font-bold dark:text-white text-gray-800 mb-6">Our Story</h2>
          <div className="space-y-4 dark:text-gray-300 text-gray-700">
            <p>
              Founded in 2009, Wanderlust began as a small travel blog documenting adventures across Southeast Asia.
              What started as a passion project quickly grew into a mission to help others discover the transformative
              power of travel.
            </p>
            <p>
              Today, we're a full-service travel company specializing in curated experiences that go beyond typical
              tourist destinations. We believe that travel should be meaningful, sustainable, and accessible to
              everyone.
            </p>
            <p>
              Our team of travel experts has personally visited every destination we offer, ensuring that each itinerary
              is crafted with insider knowledge and genuine care for our travelers' experiences.
            </p>
          </div>
        </div>
        <div className="relative">
          <img src="/Russia-Travel-Guide.jpg" alt="Our Office" className="rounded-xl shadow-lg" />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-300">
            To inspire and enable meaningful travel experiences that create lasting memories, foster cultural
            understanding, and contribute positively to the communities we visit.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-700 dark:text-gray-300">
            To be the world's most trusted travel partner, known for creating transformative journeys that connect
            people with diverse cultures, stunning landscapes, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
        <h2 className="text-3xl font-serif font-bold text-gray-800 dark:text-white text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">Authenticity</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We create genuine experiences that showcase the true spirit of each destination.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We're committed to responsible travel that protects our planet for future generations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We support local communities and create connections between travelers and locals.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-serif font-bold dark:text-white text-gray-800 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-90 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-1">{member.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-serif font-bold mb-4">Ready to Start Your Adventure?</h2>
        <p className="text-xl mb-6">Join thousands of travelers who have discovered the world with Wanderlust.</p>
        <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Plan Your Trip
        </button>
      </div>
    </div>
  )
}
