export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Contact Section */}
      <div className="container mx-auto lg:border-b border-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 lg:pt-0">
          {/* Call Us */}
          <div className="flex items-center gap-4 p-4 md:py-12 lg:border-r border-white">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-dashed flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm">Call Us 7/24</p>
              <p className="font-semibold">+91-987-987-0987</p>
            </div>
          </div>

          {/* Make a Quote */}
          <div className="flex items-center gap-4 p-4 md:py-12 lg:border-r border-white">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-dashed flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm">Make a Quote</p>
              <p className="font-semibold">hello@infominze.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 md:py-12">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 border-dashed flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm">Location</p>
              <p className="font-semibold">One Neil Road Indore</p>
              <p className="text-sm">Pin-0988804</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <img
              src="/images/infominez.png"
              alt="Infominez"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm mt-4">
              We are an agency specialising in web design & web automation since
              2013
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-green-500 font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-green-500">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-500">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-500">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-500">
                  CASESTUDY
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-500">
                  BLOG
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-green-500 font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-green-500">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-green-500">
                  PRIVACY POLICY
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-500 font-medium mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-500 flex items-center gap-3"
                >
                  <img
                    src="/images/socials/linkedin.png"
                    alt="Linkedin"
                    className="h-6 w-6"
                  />
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-500 flex items-center gap-3"
                >
                  <img
                    src="/images/socials/facebook.png"
                    alt="Facebook"
                    className="h-6 w-6"
                  />
                  FACEBOOK
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-500 flex items-center gap-3"
                >
                  <img
                    src="/images/socials/twitter.png"
                    alt="Twitter"
                    className="h-6 w-6"
                  />
                  TWITTER
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-green-500 flex items-center gap-3"
                >
                  <img
                    src="/images/socials/instagram.png"
                    alt="Instagram"
                    className="h-6 w-6"
                  />
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Area Section */}
          <div>
            <div>
              <h3 className="text-green-500 font-medium mb-4">Area we Serve</h3>
              <select className="w-full bg-gray-900 text-white p-2 rounded">
                <option>Select Area</option>
              </select>

              <h3 className="text-green-500 font-medium mb-4 mt-6">
                Our Service
              </h3>
              <select className="w-full bg-gray-900 text-white p-2 rounded">
                <option>Select Service</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-400">
            ©2025 INFOMINEZ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
