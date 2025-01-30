import React from "react";

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="flex flex-col items-center h-[90vh]">
        <h2 className="text-4xl font-extralight text-gray-900 mb-6 mx-auto">About Us</h2>

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Left Image Section */}
          <div className="absolute hidden lg:block left-0 w-[60%] h-[80%] flex-1">
            <img
              src={'/images/about.png'}
              alt="Team working"
              className="object-center object-cover h-full w-full"
            />
          </div>

          {/* Right Text Section */}
          <div className="static lg:absolute w-[80%] lg:w-[50%] right-0 h-fit bg-white rounded-lg shadow-xl p-8">
            <p className="text-sm md:text-lg lg:text-lg text-gray-700 mb-6 leading-relaxed">
              At Infominez, we are the driving force behind transforming technology into impactful business outcomes. Our team of visionary technologists specializes in AI and ML innovations, along with expertise in fintech, data analytics, and cloud services, to deliver solutions that redefine industry standards. With a deep understanding of AI-driven strategies and a commitment to customer success, we create transformative results that align with our clients' unique goals. By combining technical expertise with creative problem-solving, we enable businesses to unlock the power of data, innovate with confidence, and thrive in today's AI-driven world.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
