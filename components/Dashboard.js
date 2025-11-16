"use client"

import { useState } from "react"


const featuredDestinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "/santorini_greece.png",
    price: "$1,299",
    rating: 4.9,
    description: "Stunning sunsets and white-washed buildings",
    category: "Luxury",
    readTime: "5 min read",
    author: "Maria Georgiou",
    date: "Aug 20, 2025",
    excerpt: "Discover the beauty of Santorini with its white-washed houses, blue domes, and breathtaking sunsets.",
    tags: ["greece", "luxury", "romantic"],
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "/bali-rice-terraces-paradise.png",
    price: "$899",
    rating: 4.8,
    description: "Tropical paradise with rich culture",
    category: "Adventure",
    readTime: "4 min read",
    author: "I Made Sujana",
    date: "Aug 18, 2025",
    excerpt: "Experience Bali’s beaches, temples, and vibrant culture in this tropical paradise.",
    tags: ["bali", "adventure", "beach"],
  },
  {
    id: 3,
    name: "Swiss Alps",
    image: "/Swiss Alps.jpeg",
    price: "$1,599",
    rating: 4.9,
    description: "Majestic mountains and pristine nature",
    category: "Nature",
    readTime: "6 min read",
    author: "Hans Meier",
    date: "Aug 15, 2025",
    excerpt: "Explore the stunning Swiss Alps with skiing, hiking, and breathtaking alpine views.",
    tags: ["switzerland", "nature", "mountains"],
  },
]

const trendingPackages = [
  { id: 1, title: "7-Day European Adventure", price: "$2,499", duration: "7 days", type: "Adventure" },
  { id: 2, title: "Luxury Beach Getaway", price: "$1,899", duration: "5 days", type: "Luxury" },
  { id: 3, title: "Budget Backpacking Asia", price: "$799", duration: "10 days", type: "Budget" },
]

export default function Dashboard() {
  const [destination, setDestination] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [results, setResults] = useState([])
  const [selectedDestination, setSelectedDestination] = useState(null)


  const handleSearch = () => {
    const filtered = featuredDestinations.filter((d) =>
      d.name.toLowerCase().includes(destination.toLowerCase())
    )
    setResults(filtered)
  }

  const openModal = (dest) => setSelectedDestination(dest)
  const closeModal = () => setSelectedDestination(null)

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden h-96 bg-gradient-to-r from-emerald-700 to-teal-600">
        <img src="/home.png" alt="Hero" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold">Your Next Adventure Awaits</h1>
            <p className="text-xl md:text-2xl font-light">Discover amazing places at exclusive deals</p>
          </div>
        </div>
      </div>

     

      {/* Quick Search */}
      <div className="bg-white dark:bg-gray-800  rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-4">Quick Search</h2>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           <div>
             <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Destination</label>
             <input
               type="text"
               value={destination}
               onChange={(e) => setDestination(e.target.value)}
               placeholder="Where to?"
               className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
             />
          </div>
           <div>
             <label className="block text-sm font-medium dark:text-gray-200 text-gray-700 mb-2">Check-in</label>
             <input
              type="date"
               value={checkIn}
               onChange={(e) => setCheckIn(e.target.value)}
               className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-100 
             [&::-webkit-calendar-picker-indicator]:bg-transparent 
             [&::-webkit-calendar-picker-indicator]:cursor-pointer 
             [&::-webkit-calendar-picker-indicator]:invert-0 
             dark:[&::-webkit-calendar-picker-indicator]:invert"
             />
          </div>
           <div>
             <label className="block text-sm font-medium dark:text-gray-200 text-gray-700 mb-2">Check-out</label>
             <input
               type="date"
               value={checkOut}
               onChange={(e) => setCheckOut(e.target.value)}
               className="w-full px-4 py-2 border dark:text-gray-400 dark:border-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-100 
             [&::-webkit-calendar-picker-indicator]:bg-transparent 
             [&::-webkit-calendar-picker-indicator]:cursor-pointer 
             [&::-webkit-calendar-picker-indicator]:invert-0 
             dark:[&::-webkit-calendar-picker-indicator]:invert"
             />
           </div>
           <div className="flex items-end">
             <button
               onClick={handleSearch}
               className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
             >
               Search
             </button>
           </div>
         </div>
       </div>

       {/* Search Results */}
       {results.length > 0 && (
         <div>
          <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6">Search Results</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {results.map((destination) => (
               <div key={destination.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                 <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
                 <div className="p-6">
                   <h3 className="text-xl font-bold dark:text-white text-gray-800">{destination.name}</h3>
                   <p className="text-gray-600 mb-2 dark:text-gray-300">{destination.description}</p>
                   <p className="text-2xl font-bold text-emerald-500">{destination.price}</p>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Check-in: {checkIn} | Check-out: {checkOut}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       )}

      {/* Featured Destinations */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map((dest) => (
            <div key={dest.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={dest.image || "/placeholder.svg"} alt={dest.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold dark:text-white text-gray-800">{dest.name}</h3>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm dark:text-gray-200 text-gray-600">{dest.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 dark:text-gray-300">{dest.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-500">{dest.price}</span>
                  <button 
                    onClick={() => openModal(dest)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      
      {/* MODAL with full layout */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 h-screen ">
          <div className="bg-white dark:bg-gray-800 dark:text-gray-300 rounded-xl max-w-4xl max-h-full overflow-y-auto">
            <div className="relative">
              <img
                src={selectedDestination.image || "/placeholder.svg"}
                alt={selectedDestination.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 dark:text-gray-300 dark:bg-gray-800 bg-white rounded-full p-2 hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedDestination.category}
                </span>
                <span className="text-sm dark:text-gray-300 text-gray-500">{selectedDestination.readTime}</span>
              </div>

              <h1 className="text-3xl font-serif font-bold dark:text-white text-gray-800 mb-4">{selectedDestination.name}</h1>

              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white dark:text-white font-semibold">
                    {selectedDestination.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium dark:text-white text-gray-800">{selectedDestination.author}</p>
                  <p className="text-sm dark:text-white text-gray-500">{selectedDestination.date}</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">{selectedDestination.excerpt}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-3">Key Highlights</h3>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 mb-4">
                  <li>Amazing destinations and experiences</li>
                  <li>Practical travel tips and advice</li>
                  <li>Budget-friendly recommendations</li>
                  <li>Cultural insights and local knowledge</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {selectedDestination.tags?.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trending Packages */}
      <div>
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-6">Trending Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold dark:text-white text-gray-800">{pkg.title}</h3>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {pkg.type}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 dark:text-gray-300">Duration: {pkg.duration}</p>
                <p className="text-2xl font-bold text-emerald-500">{pkg.price}</p>
              </div>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Book Now
              </button>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
