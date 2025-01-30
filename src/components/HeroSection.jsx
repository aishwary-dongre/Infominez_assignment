// src/components/HeroSection.jsx
const HeroSection = () => {
    return (
      <div className="hero-pattern relative flex items-center">
        <div className="container mx-auto px-4 md:px-16 py-32 relative z-10 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-4xl mb-8 text-white font-extralight leading-tight">
              Transform Your Business with Intelligent
              <br className="hidden md:block" />
              AI & ML Solutions
            </h1>
            <p className="text-xl mb-12 text-gray-300">
              Drive Innovation and Growth with AI-Powered Solutions
            </p>
            <button className="bg-transparent border-2 border-[#00FFB9] text-[#00FFB9] px-8 py-3 rounded-full hover:bg-[#00FFB9] hover:text-[#020B2D] transition duration-300 flex items-center space-x-2 md:ml-0">
              <span>Transform Your Business with AI & ML</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  