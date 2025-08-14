"use client"

import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import Dashboard from "../../components/Dashboard"
import Destinations from "../../components/Destinations"
import TravelPackages from "../../components/TravelPackages"
import Bookings from "../../components/Bookings"
import Gallery from "../../components/Gallery"
import TravelBlog from "../../components/TravelBlog"
import Contact from "../../components/Contact"
import About from "../../components/About"
import Profile from "../../components/Profile"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderContent = () => {
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
        return <TravelBlog />
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

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-serif font-bold text-emerald-600 dark:text-emerald-400">Wanderlust</h1>
          <div className="w-6"></div>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}
