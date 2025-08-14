"use client"

import { useState } from "react"

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-01-01",
    nationality: "United States",
    passportNumber: "US123456789",
  })

  const savedTrips = [
    {
      id: 1,
      title: "European Grand Tour",
      image: "/European Grand Tourbooking.jpg",
      price: "$3,499",
      duration: "14 days",
    },
    {
      id: 2,
      title: "Bali Paradise",
      image: "/bali Retreatalt.jpeg",
      price: "$1,299",
      duration: "7 days",
    },
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setActiveTab("login")
  }

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    alert("Profile updated successfully!")
  }

  if (!isLoggedIn) {
    return (
      <div className="p-6  max-w-lg mx-auto mt-14">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="border-b dark:border-gray-700 border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === "login"
                    ? "text-emerald-600 border-b-2 dark:text-emerald-500 border-emerald-500"
                    : "text-gray-500 dark:text-white hover:text-gray-700"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === "signup"
                    ? "text-emerald-600 border-b-2 dark:text-emerald-500 border-emerald-500"
                    : "text-gray-500 dark:text-white hover:text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">Welcome Back</h2>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full px-4 py-2 border dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm dark:text-gray-300 text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm dark:text-emerald-500 text-emerald-600 hover:text-emerald-700">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Sign In
                </button>
              </form>
            )}

            {activeTab === "signup" && (
              <form onSubmit={handleSignup} className="space-y-4">
                <h2 className="text-2xl font-bold dark:text-white text-gray-800 text-center mb-6">Create Account</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm dark:text-white font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={signupData.firstName}
                      onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                      className="w-full px-4 py-2 border dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={signupData.lastName}
                      onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                      className="w-full px-4 py-2 dark:border-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="w-full px-4 py-2 border dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="w-full px-4 py-2 border dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    className="w-full px-4 py-2 border dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif font-bold dark:text-white text-gray-800">My Profile</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Manage your account and travel preferences</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-gray-100 dark:bg-gray-600 dark:text-white hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">Personal Information</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent  [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-100 
             [&::-webkit-calendar-picker-indicator]:bg-transparent 
             [&::-webkit-calendar-picker-indicator]:cursor-pointer 
             [&::-webkit-calendar-picker-indicator]:invert-0 
             dark:[&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Nationality</label>
                  <input
                    type="text"
                    value={profileData.nationality}
                    onChange={(e) => setProfileData({ ...profileData, nationality: e.target.value })}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Passport Number</label>
                <input
                  type="text"
                  value={profileData.passportNumber}
                  onChange={(e) => setProfileData({ ...profileData, passportNumber: e.target.value })}
                  className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">
                {profileData.firstName[0]}
                {profileData.lastName[0]}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              {profileData.firstName} {profileData.lastName}
            </h3>
            <p className="text-gray-600 mb-4 dark:text-white">Travel Enthusiast</p>
            <button className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-4 py-2 rounded-lg font-medium transition-colors">
              Change Photo
            </button>
          </div>

          {/* Travel Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold dark:text-white text-gray-800 mb-4">Travel Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Countries Visited</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-500">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Total Trips</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-500">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600  dark:text-gray-300">Miles Traveled</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-500">45,230</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Member Since</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-500">2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Saved Trips */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-6">Saved Trips & Wishlist</h2>
        {savedTrips.length === 0 ? (
          <div className="text-center py-8">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h3 className="text-lg dark:text-white font-medium text-gray-900 mb-2">No saved trips yet</h3>
            <p className="text-gray-600 dark:text-white">Start exploring and save your favorite destinations!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedTrips.map((trip) => (
              <div
                key={trip.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <img src={trip.image || "/placeholder.svg"} alt={trip.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">{trip.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-600 dark:text-emerald-500 font-semibold">{trip.price}</span>
                    <span className="text-sm dark:text-gray-300 text-gray-500">{trip.duration}</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3 rounded text-sm font-medium transition-colors">
                      Book Now
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded text-sm font-medium transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
