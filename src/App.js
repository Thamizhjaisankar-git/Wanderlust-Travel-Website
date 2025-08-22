"use client"

import React from "react"
import ReactDOM from "react-dom"

const { useState, useEffect } = React


//2nd commit
// Theme Toggle Component
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  )
}

// Landing Page Component
const LandingPage = ({ onEnterSite }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-serif">Loading your adventure...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-blue-600 dark:from-emerald-800 dark:to-blue-900 relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in-up">Wanderlust</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Discover breathtaking destinations and create unforgettable memories
          </p>
          <p
            className="text-lg mb-12 opacity-80 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            From pristine beaches to majestic mountains, from bustling cities to serene countryside - your perfect
            adventure awaits
          </p>
          <button
            onClick={onEnterSite}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  )
}

// Sidebar Component
const Sidebar = ({ activeSection, setActiveSection, isMobileOpen, setIsMobileOpen }) => {
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: "🏠" },
    { id: "destinations", name: "Destinations", icon: "🌍" },
    { id: "packages", name: "Travel Packages", icon: "📦" },
    { id: "bookings", name: "My Bookings", icon: "📅" },
    { id: "gallery", name: "Gallery", icon: "📸" },
    { id: "blog", name: "Travel Blog", icon: "📝" },
    { id: "contact", name: "Contact", icon: "📞" },
    { id: "about", name: "About Us", icon: "ℹ️" },
    { id: "profile", name: "Profile", icon: "👤" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 z-50 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:shadow-none`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-emerald-600 dark:text-emerald-400">Wanderlust</h1>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id)
                    setIsMobileOpen(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}

// Dashboard Component
const Dashboard = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "/santorini-white-blue.png",
      price: "$1,299",
      rating: 4.9,
      description: "Stunning sunsets and white-washed buildings",
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      image: "/bali-rice-temple.png",
      price: "$899",
      rating: 4.8,
      description: "Tropical paradise with rich culture",
    },
    {
      id: 3,
      name: "Swiss Alps",
      image: "/swiss-alps-snow-peaks.png",
      price: "$1,599",
      rating: 4.9,
      description: "Majestic mountains and pristine lakes",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden">
        <img src="/travel-hero-mountain-lake-sunset.png" alt="Travel Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-8">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Your Next Adventure Awaits</h1>
            <p className="text-xl mb-6 max-w-lg">
              Discover amazing places at exclusive deals. Eat, Shop, Visit interesting places around the world.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">150+</div>
          <div className="text-gray-600 dark:text-gray-400">Destinations</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">50K+</div>
          <div className="text-gray-600 dark:text-gray-400">Happy Travelers</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">4.9</div>
          <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
          <div className="text-gray-600 dark:text-gray-400">Support</div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div>
        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{destination.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{destination.price}</span>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Simple placeholder components for other sections
const Destinations = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Destinations</h2>
    <p className="text-gray-600 dark:text-gray-400">Explore amazing destinations around the world</p>
  </div>
)

const TravelPackages = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Travel Packages</h2>
    <p className="text-gray-600 dark:text-gray-400">Discover our curated travel packages</p>
  </div>
)

const Bookings = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">My Bookings</h2>
    <p className="text-gray-600 dark:text-gray-400">Manage your travel bookings</p>
  </div>
)

const Gallery = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Gallery</h2>
    <p className="text-gray-600 dark:text-gray-400">Beautiful travel photography</p>
  </div>
)

const Blog = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Travel Blog</h2>
    <p className="text-gray-600 dark:text-gray-400">Read inspiring travel stories</p>
  </div>
)

const Contact = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
    <p className="text-gray-600 dark:text-gray-400">Get in touch with our travel experts</p>
  </div>
)

const About = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">About Us</h2>
    <p className="text-gray-600 dark:text-gray-400">Learn about our travel company</p>
  </div>
)

const Profile = () => (
  <div className="text-center py-20">
    <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900 dark:text-white">Profile</h2>
    <p className="text-gray-600 dark:text-gray-400">Manage your account settings</p>
  </div>
)

// Main App Component
const App = () => {
  const [showLanding, setShowLanding] = useState(true)
  const [activeSection, setActiveSection] = useState("dashboard")
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "destinations":
        return <Destinations />
      case "packages":
        return <TravelPackages />
      case "bookings":
        return <Bookings />
      case "gallery":
        return <Gallery />
      case "blog":
        return <Blog />
      case "contact":
        return <Contact />
      case "about":
        return <About />
      case "profile":
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  if (showLanding) {
    return <LandingPage onEnterSite={() => setShowLanding(false)} />
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 lg:flex">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-serif font-bold text-emerald-600 dark:text-emerald-400">Wanderlust</h1>
          <ThemeToggle />
        </div>

        {/* Main Content */}
        <main className="p-6">{renderSection()}</main>
      </div>
    </div>
  )
}

// Render the app
ReactDOM.render(<App />, document.getElementById("root"))
