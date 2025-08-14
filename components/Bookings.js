"use client"

import { useState } from "react"

const myBookings = [
  {
    id: 1,
    title: "European Grand Tour",
    destination: "Paris, Rome, London",
    dates: "June 15 - June 29, 2024",
    status: "Confirmed",
    price: "$3,499",
    image: "/European Grand Tourbooking.jpg",
    bookingRef: "WL001234",
  },
  {
    id: 2,
    title: "Bali Retreat",
    destination: "Ubud, Bali",
    dates: "August 10 - August 17, 2024",
    status: "Pending",
    price: "$1,299",
    image: "/Bali Retreat.webp",
    bookingRef: "WL001235",
  },
]

export default function Bookings() {
  const [activeTab, setActiveTab] = useState("my-bookings")
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    packageType: "",
    specialRequests: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Booking request submitted! We will contact you soon.")
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold dark:text-white text-gray-800 mb-4">Bookings</h1>
        <p className="text-xl dark:text-gray-300 text-gray-600">Manage your travel bookings</p>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="border-b border-gray-300 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("my-bookings")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "my-bookings"
                  ? "border-emerald-500 text-emerald-500"
                  : "border-transparent text-gray-500 dark:text-white hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab("new-booking")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "new-booking"
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent dark:text-white text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              New Booking
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "my-bookings" && (
            <div className="space-y-6">
              {myBookings.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
                  <p className="text-gray-600">Start planning your next adventure!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {myBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start space-x-4 mb-4 md:mb-0">
                          <img
                            src={booking.image || "/placeholder.svg"}
                            alt={booking.title}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-bold dark:text-white text-gray-800">{booking.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{booking.destination}</p>
                            <p className="text-sm dark:text-gray-400 text-gray-500">{booking.dates}</p>
                            <p className="text-xs dark:text-gray-400 text-gray-400">Ref: {booking.bookingRef}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:flex-col md:items-end">
                          <div className="text-right mb-2">
                            <p className="text-xl font-bold dark:text-emerald-500 text-emerald-600">{booking.price}</p>
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                                booking.status === "Confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                              View Details
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                              Modify
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "new-booking" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="Where would you like to go?"
                    className="w-full px-4 py-2 border dark:text-gray-300  dark:border-gray-600   border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Package Type</label>
                  <select
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select package type</option>
                    <option value="luxury">Luxury</option>
                    <option value="adventure">Adventure</option>
                    <option value="budget">Budget</option>
                    <option value="cultural">Cultural</option>
                    <option value="beach">Beach</option>
                    <option value="wildlife">Wildlife</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium  dark:text-white text-gray-700 mb-2">Check-in Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-100 
             [&::-webkit-calendar-picker-indicator]:bg-transparent 
             [&::-webkit-calendar-picker-indicator]:cursor-pointer 
             [&::-webkit-calendar-picker-indicator]:invert-0 
             dark:[&::-webkit-calendar-picker-indicator]:invert"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Check-out Date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-100 
             [&::-webkit-calendar-picker-indicator]:bg-transparent 
             [&::-webkit-c alendar-picker-indicator]:cursor-pointer 
             [&::-webkit-calendar-picker-indicator]:invert-0 
             dark:[&::-webkit-calendar-picker-indicator]:invert"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special requirements or preferences..."
                  className="w-full px-4 py-2 border border-gray-300 dark:text-gray-300 dark:border-gray-600  rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
