"use client"

import { useState } from "react"

const packages = [
  {
    id: 1,
    title: "European Grand Tour",
    type: "Luxury",
    duration: "14 days",
    price: 3499,
    originalPrice: 4299,
    image: "/European Grand Tour.jpg", 
    destinations: ["Paris", "Rome", "London", "Amsterdam"],
    inclusions: ["Flights", "Hotels", "Meals", "Tours", "Transport"],
    highlights: ["Eiffel Tower", "Colosseum", "Big Ben", "Canal Cruise"],
    rating: 4.9,
    reviews: 234,
  },
  {
    id: 2,
    title: "Southeast Asia Adventure",
    type: "Adventure",
    duration: "21 days",
    price: 1899,
    originalPrice: 2399,
    image: "/asia-backpacker-budget.jpg",
    destinations: ["Thailand", "Vietnam", "Cambodia", "Laos"],
    inclusions: ["Accommodation", "Local Transport", "Some Meals", "Activities"],
    highlights: ["Angkor Wat", "Ha Long Bay", "Thai Beaches", "Mekong Delta"],
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 3,
    title: "African Safari Experience",
    type: "Wildlife",
    duration: "10 days",
    price: 4299,
    originalPrice: 5199,
    image: "/African Safari Experience.webp",
    destinations: ["Kenya", "Tanzania"],
    inclusions: ["Flights", "Safari Lodges", "All Meals", "Game Drives", "Guide"],
    highlights: ["Serengeti", "Masai Mara", "Ngorongoro Crater", "Big Five"],
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 4,
    title: "Budget Backpacker Asia",
    type: "Budget",
    duration: "30 days",
    price: 899,
    originalPrice: 1199,
    image: "/asia budget.jpg",
    destinations: ["India", "Nepal", "Myanmar", "Bangladesh"],
    inclusions: ["Hostels", "Local Transport", "Some Activities"],
    highlights: ["Himalayas", "Taj Mahal", "Bagan Temples", "Local Culture"],
    rating: 4.5,
    reviews: 298,
  },
  {
    id: 5,
    title: "Caribbean Island Hopping",
    type: "Beach",
    duration: "12 days",
    price: 2799,
    originalPrice: 3299,
    image: "/Caribbean Island Hoppingalt.jpg",
    destinations: ["Barbados", "St. Lucia", "Martinique", "Dominica"],
    inclusions: ["Flights", "Resorts", "All Meals", "Water Sports", "Transfers"],
    highlights: ["White Sand Beaches", "Snorkeling", "Rum Tours", "Sunset Cruises"],
    rating: 4.6,
    reviews: 167,
  },
  {
    id: 6,
    title: "Japan Cultural Journey",
    type: "Cultural",
    duration: "16 days",
    price: 3899,
    originalPrice: 4599,
    image: "/Japan Cultural Journey.jpg",
    destinations: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
    inclusions: ["Flights", "Hotels", "JR Pass", "Some Meals", "Cultural Tours"],
    highlights: ["Cherry Blossoms", "Temples", "Sushi Making", "Mount Fuji"],
    rating: 4.9,
    reviews: 203,
  },
]

const packageTypes = ["All", "Luxury", "Adventure", "Budget", "Beach", "Cultural", "Wildlife"]

export default function TravelPackages() {
  const [selectedType, setSelectedType] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState("price-low")

  const filteredPackages = packages
    .filter((pkg) => selectedType === "All" || pkg.type === selectedType)
    .filter((pkg) => pkg.price >= priceRange[0] && pkg.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "duration":
          return Number.parseInt(a.duration) - Number.parseInt(b.duration)
        default:
          return 0
      }
    })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold dark:text-white text-gray-800 mb-4">Travel Packages</h1>
        <p className="text-xl dark:text-gray-300 text-gray-600">Curated experiences for every type of traveler</p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium  dark:text-white text-gray-700 mb-2">Package Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-gray-400 dark:bg-gray-800"
            >
              {packageTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Max Price</label>
            <select
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number.parseInt(e.target.value)])}
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-gray-400 dark:bg-gray-800"
            >
              <option value={1000}>Under $1,000</option>
              <option value={2000}>Under $2,000</option>
              <option value={3000}>Under $3,000</option>
              <option value={5000}>Under $5,000</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-gray-400 dark:bg-gray-800"
            >
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Duration</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="text-gray-600 dark:text-white">Showing {filteredPackages.length} packages</div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold dark:text-white text-gray-800">{pkg.title}</h3>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {pkg.type}
                  </span>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-4">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                    <span className="text-sm dark:text-gray-400 text-gray-600 ml-1">({pkg.reviews} reviews)</span>
                  </div>
                  <span className="text-sm dark:text-gray-400 text-gray-600">{pkg.duration}</span>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Destinations:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.destinations.map((dest, index) => (
                      <span key={index} className="bg-gray-100  text-gray-700 px-2 py-1 rounded text-xs">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm dark:text-gray-300 text-gray-600 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                      <span key={index} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs">
                        {inclusion}
                      </span>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <span className="text-xs dark:text-gray-400 text-gray-500">+{pkg.inclusions.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold  dark:text-emerald-500 text-emerald-600">${pkg.price.toLocaleString()}</span>
                    {pkg.originalPrice && (
                      <span className="text-sm dark:text-gray-400 text-gray-500 line-through ml-2">
                        ${pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
