import Logo from "./Logo";
import React, { useState } from "react";
{/* Navigation */}
const Navigation = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const navbarLink = "text-white decoration-[#00D47E] decoration-[3px] hover:underline hover:underline-offset-4 transition-all duration-300";
return(<nav className="py-4 absolute left-0 right-0 top-0 z-50">
<div className="container mx-auto px-4 pt-6 w-full max-w-[1200px]">
  <div className="flex items-center justify-between w-full">

    {/* Logo Section */}
    <div className="flex items-center flex-shrink-0">
      <a href="/" className="text-white text-2xl font-bold flex items-center space-x-2">
        <Logo />
      </a>
    </div>

    {/* Mobile Menu Button */}
    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
          d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
      </svg>
    </button>

    {/* Desktop Navigation (Centered) */}
    <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
      <a href="#" className={navbarLink}>Home</a>
      <a href="#" className={navbarLink}>Services</a>
      <a href="#" className={navbarLink}>Industries</a>
      <a href="#" className={navbarLink}>Resources</a>
      <a href="#" className={navbarLink}>Career</a>
      <a href="#" className={navbarLink}>About us</a>
      <a href="#" className={navbarLink}>Contact Us</a>
    </div>

    {/* "Get Started" Button (Right Aligned) */}
    <div className="hidden md:flex items-center flex-shrink-0">
      <button className="bg-transparent border-2 border-[#00FFB9] text-[#00FFB9] px-6 py-2 rounded-full hover:bg-[#00FFB9] hover:text-[#020B2D] transition duration-300">
        Get Started
      </button>
    </div>

  </div>

  {/* Mobile Navigation */}
  <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
    <div className="flex flex-col space-y-4 text-center">
      <a href="#" className="text-white hover:text-[#00FFB9]">Home</a>
      <a href="#" className="text-white hover:text-[#00FFB9]">Services</a>
      <a href="#" className="text-white hover:text-[#00FFB9]">Industries</a>
      <a href="#" className="text-white hover:text-[#00FFB9]">Resources</a>
      <a href="#" className="text-white hover:text-[#00FFB9]">Career</a>
      <a href="#" className="text-white hover:text-[#00FFB9]">About us</a>
      <a href="#" className="text-white hover:text-[#00FFB9]">Contact Us</a>
      <button className="bg-transparent border-2 border-[#00FFB9] text-[#00FFB9] px-6 py-2 rounded-full hover:bg-[#00FFB9] hover:text-[#020B2D] transition duration-300 w-full">
        Get Started
      </button>
    </div>
  </div>

</div>
</nav>)};

export default Navigation;