import React from 'react'

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div>
        <div className="md:hidden p-4 flex justify-between items-center bg-gray-50 shadow-md">
      <h2 className="text-xl font-bold">Trackeet</h2>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="focus:outline-none">
        {/* Icon changes based on the sidebar's state */}
        {isSidebarOpen ? (
          <span className="text-xl">✖️</span>
        ) : (
          <span className="text-xl">☰</span>
        )}
      </button>
    </div>
    </div>
  )
}

export default Navbar