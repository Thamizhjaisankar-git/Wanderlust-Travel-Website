"use client"

import { useState } from "react"

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    country: "France",
    region: "Europe",
    type: "Cultural",
    image: "/paris-eiffel-tower-romantic-city.png",
    rating: 4.8,
    bestTime: "April - October",
    activities: ["Museums", "Architecture", "Cuisine", "Shopping"],
    description: "The City of Light offers romance, art, and world-class cuisine.",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    country: "Japan",
    region: "Asia",
    type: "Cultural",
    image: "/Tokyo, Japan.jpg",
    rating: 4.9,
    bestTime: "March - May, September - November",
    activities: ["Technology", "Cuisine", "Temples", "Shopping"],
    description: "A perfect blend of traditional culture and cutting-edge technology.",
  },
  {
    id: 3,
    name: "Maldives",
    country: "Maldives",
    region: "Asia",
    type: "Beach",
    image: "/Maldivesalt.jpg",
    rating: 4.9,
    bestTime: "November - April",
    activities: ["Diving", "Snorkeling", "Spa", "Water Sports"],
    description: "Paradise on earth with crystal-clear waters and luxury resorts.",
  },
  {
    id: 4,
    name: "Patagonia",
    country: "Argentina/Chile",
    region: "South America",
    type: "Adventure",
    image: "/patagonia-mountains-glaciers.png",
    rating: 4.7,
    bestTime: "October - March",
    activities: ["Hiking", "Glaciers", "Wildlife", "Photography"],
    description: "Dramatic landscapes and pristine wilderness at the end of the world.",
  },
  {
    id: 5,
    name: "Serengeti, Tanzania",
    country: "Tanzania",
    region: "Africa",
    type: "Wildlife",
    image: "/serengeti-safari-lions-elephants-savanna.png",
    rating: 4.8,
    bestTime: "June - October",
    activities: ["Safari", "Wildlife", "Photography", "Cultural Tours"],
    description: "Witness the Great Migration and incredible African wildlife.",
  },
  {
    id: 6,
    name: "Iceland",
    country: "Iceland",
    region: "Europe",
    type: "Adventure",
    image: "/Iceland.jpeg",
    rating: 4.8,
    bestTime: "June - August, September - March",
    activities: ["Northern Lights", "Geysers", "Waterfalls", "Hot Springs"],
    description: "Land of fire and ice with stunning natural phenomena.",
  },
]

const filters = {
  regions: ["All", "Europe", "Asia", "Africa", "South America", "North America", "Oceania"],
  types: ["All", "Cultural", "Beach", "Adventure", "Wildlife", "Urban", "Nature"],
}

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDestinations = destinations.filter((destination) => {
    const matchesRegion = selectedRegion === "All" || destination.region === selectedRegion
    const matchesType = selectedType === "All" || destination.type === selectedType
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesRegion && matchesType && matchesSearch
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold dark:text-white  text-gray-800 mb-4">Explore Destinations</h1>
        <p className="text-xl dark:text-gray-300  text-gray-600">Discover amazing places around the world</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800  rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium dark:text-white  text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-500  rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Region</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 border dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-gray-300 dark:bg-gray-800"
            >
              {filters.regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium dark:text-white text-gray-700 mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border dark:border-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-gray-300 dark:bg-gray-800"
            >
              {filters.types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-gray-600 dark:text-white">Showing {filteredDestinations.length} destinations</div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 dark:bg-gray-800 bg-white rounded-full px-2 py-1 flex items-center">
                <svg className="w-4 h-4 text-yellow-400  mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold">{destination.rating}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold dark:text-white text-gray-800">{destination.name}</h3>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {destination.type}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-3">{destination.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm dark:text-gray-300 text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l-1 1m7-1l1 1m-1-1v4a2 2 0 01-2 2H9a2 2 0 01-2-2V8m0 0V7a2 2 0 012-2h4a2 2 0 012 2v1"
                    />
                  </svg>
                  Best time: {destination.bestTime}
                </div>
                <div className="flex flex-wrap gap-1">
                  {destination.activities.map((activity, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
