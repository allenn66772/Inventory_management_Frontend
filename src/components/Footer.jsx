import React from 'react'

function Footer() {
  return (
    <>
    
    <footer className="bg-gray-900 text-gray-300 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      
      {/* Logo / Brand */}
      <div className="text-lg font-semibold mb-4 md:mb-0">
        <a href="/" className="text-white hover:text-gray-400">
          MyWebsite
        </a>
      </div>

      {/* Links */}
      <div className="flex space-x-6">
        <a href="/about" className="hover:text-white">About</a>
        <a href="/services" className="hover:text-white">Services</a>
        <a href="/contact" className="hover:text-white">Contact</a>
        <a href="/privacy" className="hover:text-white">Privacy</a>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-6 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
    </div>
  </div>
</footer>

    
    </>
  )
}

export default Footer