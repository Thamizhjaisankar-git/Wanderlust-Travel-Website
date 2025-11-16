"use client"

import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia",
    excerpt: "Discover breathtaking destinations off the beaten path that will leave you speechless.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/10 Hidden Gems in Southeast Asia.webp",
    category: "Destinations",
    tags: ["Asia", "Adventure", "Hidden Gems"],
  },
  {
    id: 2,
    title: "Budget Travel: How to See Europe for Under $50/Day",
    excerpt: "Practical tips and tricks to explore Europe without breaking the bank.",
    author: "Mike Chen",
    date: "March 12, 2024",
    readTime: "12 min read",
    image: "/Budget Travel to See Europe.jpg",
    category: "Tips",
    tags: ["Europe", "Budget", "Backpacking"],
  },
  {
    id: 3,
    title: "The Ultimate Safari Experience in Kenya",
    excerpt: "Everything you need to know about planning your first African safari adventure.",
    author: "Emma Wilson",
    date: "March 10, 2024",
    readTime: "15 min read",
    image: "/The Ultimate Safari Experience in Kenya.jpg",
    category: "Experiences",
    tags: ["Africa", "Safari", "Wildlife"],
  },
  {
    id: 4,
    title: "Digital Nomad Guide: Best Cities for Remote Work",
    excerpt: "Top destinations for digital nomads with great wifi, affordable living, and vibrant communities.",
    author: "Alex Rodriguez",
    date: "March 8, 2024",
    readTime: "10 min read",
    image: "/Digital Nomad Guide Best Cities for Remote Work.webp",
    category: "Lifestyle",
    tags: ["Digital Nomad", "Remote Work", "Cities"],
  },
  {
    id: 5,
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    excerpt: "Learn how to travel responsibly and minimize your environmental impact.",
    author: "Lisa Green",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "/Sustainable Travel to Reduce Your Carbon Footprint.webp",
    category: "Sustainability",
    tags: ["Eco Travel", "Sustainability", "Environment"],
  },
  {
    id: 6,
    title: "Food Adventures: Street Food Around the World",
    excerpt: "A culinary journey through the best street food destinations globally.",
    author: "David Kim",
    date: "March 3, 2024",
    readTime: "9 min read",
    image: "/Food Adventures Street Food Around the World.png",
    category: "Food",
    tags: ["Food", "Culture", "Street Food"],
  },
]

const categories = ["All", "Destinations", "Tips", "Experiences", "Lifestyle", "Sustainability", "Food"]

export default function TravelBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState(null)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const openPost = (post) => {
    setSelectedPost(post)
  }

  const closePost = () => {
    setSelectedPost(null)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif font-bold dark:text-white text-gray-800 mb-4">Travel Blog</h1>
        <p className="text-xl dark:text-gray-400 text-gray-600">Stories, tips and inspiration for your next adventure</p>
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

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => openPost(post)}
          >
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-sm dark:text-gray-400 text-gray-500">{post.readTime}</span>
              </div>

              <h2 className="text-xl font-bold dark:text-white text-gray-800 mb-3 line-clamp-2">{post.title}</h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-500 dark:bg-emerald-500  rounded-full flex items-center justify-center mr-3">
                    <span className="text-white  text-sm font-semibold">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium dark:text-gray-300 text-gray-800">{post.author}</p>
                    <p className="text-xs dark:text-gray-400 text-gray-500">{post.date}</p>
                  </div>
                </div>
                <button className="text-emerald-600 dark:text-emerald-400  hover:text-emerald-700 font-medium text-sm">Read More →</button>
              </div>

              <div className="flex flex-wrap gap-1 mt-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 dark:text-gray-300 rounded-xl max-w-4xl max-h-full overflow-y-auto">
            <div className="relative">
              <img
                src={selectedPost.image || "/placeholder.svg"}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closePost}
                className="absolute top-4 right-4 dark:bg-gray-800 dark:text-gray-300 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedPost.category}
                </span>
                <span className="text-sm dark:text-gray-300 text-gray-500">{selectedPost.readTime}</span>
              </div>

              <h1 className="text-3xl font-serif font-bold dark:text-white text-gray-800 mb-4">{selectedPost.title}</h1>

              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {selectedPost.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium dark:text-white text-gray-800">{selectedPost.author}</p>
                  <p className="text-sm dark:text-gray-200 text-gray-500">{selectedPost.date}</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg dark:text-white text-gray-700 mb-6">{selectedPost.excerpt}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
                <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-3">Key Highlights</h3>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-700 mb-4">
                  <li>Amazing destinations and experiences</li>
                  <li>Practical travel tips and advice</li>
                  <li>Budget-friendly recommendations</li>
                  <li>Cultural insights and local knowledge</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
