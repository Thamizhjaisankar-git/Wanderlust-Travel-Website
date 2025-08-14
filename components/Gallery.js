"use client"

import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "/santorini-white-blue.png",
    alt: "Santorini Sunset",
    category: "Europe",
    location: "Santorini, Greece",
  },
  {
    id: 2,
    src: "/bali-rice-temple.png",
    alt: "Bali Rice Terraces",
    category: "Asia",
    location: "Bali, Indonesia",
  },
  {
    id: 3,
    src: "/African Safari Experience.webp",
    alt: "African Safari",
    category: "Africa",
    location: "Serengeti, Tanzania",
  },
  {
    id: 4,
    src: "/Maldives.webp",
    alt: "/Maldivesalt.jpg",
    category: "Asia",
    location: "Maldives",
  },
  {
    id: 5,
    src: "/patagonia-mountains-glaciers.png",
    alt: "Patagonia Wilderness",
    category: "South America",
    location: "Patagonia, Argentina",
  },
  {
    id: 6,
    src: "/Iceland.jpeg",
    alt: "Northern Lights",
    category: "Europe",
    location: "Iceland",
  },
  {
    id: 7,
    src: "/Tokyo, Japan.jpg",
    alt: "Tokyo Skyline",
    category: "Asia",
    location: "Tokyo, Japan",
  },
  {
    id: 8,
    src: "/Caribbean Island Hopping.webp",
    alt: "Caribbean Beach",
    category: "Caribbean",
    location: "Barbados",
  },
  {
    id: 9,
    src: "/Swiss Alps.jpeg",
    alt: "Swiss Alps",
    category: "Europe",
    location: "Swiss Alps",
  },
]

const categories = ["All", "Europe", "Asia", "Africa", "South America", "Caribbean"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (image) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setLightboxImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxImage(filteredImages[prevIndex])
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold dark:text-white text-gray-800 mb-4">Travel Gallery</h1>
        <p className="text-xl dark:text-gray-300 text-gray-600">Stunning destinations captured in high-quality images</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? "bg-emerald-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-semibold">{image.location}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage.src || "/placeholder.svg"}
              alt={lightboxImage.alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{lightboxImage.location}</h3>
              <p className="text-gray-300">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
