const QuotesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="57"
    height="47"
    fill="none"
    viewBox="0 0 57 47"
  >
    <path
      fill="#000"
      d="m49.128 0 2.836 4.207c-8.331 5.243-15.676 11.36-14.182 22.439 1.418-1.169 4.964-3.506 7.8-3.506 3.546 0 12.055 2.103 11.346 13.322-.567 8.976-8.746 10.752-12.764 10.518-4.018 0-12.338-3.646-13.473-18.23C29.557 14.163 42.51 3.505 49.128 0M18.507 0l2.836 4.207C13.011 9.45 5.667 15.567 7.161 26.646c1.418-1.169 4.964-3.506 7.8-3.506 3.546 0 12.055 2.103 11.346 13.322-.568 8.976-8.746 10.752-12.764 10.518-4.018 0-12.339-3.646-13.473-18.23C-1.065 14.163 11.888 3.505 18.507 0"
    ></path>
  </svg>
);


export default function ClientTestimonial() {
  return (
    <div className="bg-white py-20">
      <div className=" mx-auto client-testimonial px-16">
        <h1 className="text-5xl font-extralight text-left ml-6 mb-16">
          Client Testimonial
        </h1>

        <div className="p-8">
          <div className="w-full xl:w-[70%] mx-auto bg-white relative rounded-lg p-8 flex flex-col md:flex-row gap-8 items-start shadow-box-testimonial mb-8">
            <div className="absolute top-0 right-0 flex gap-2 translate-y-[-60px]">
              <button className="rounded-full">
                <img
                  src="/images/arrow/right.png"
                  alt="right"
                  className="w-12 h-12"
                />
              </button>
              <button className="rounded-full">
                <img
                  src="/images/arrow/left.png"
                  alt="left"
                  className="w-12 h-12"
                />
              </button>
            </div>
            <div className="hidden right-0 left-0 top-[100px] xl:flex w-full xl:w-1/3 pl-14 translate-y-[-70px] flex-col items-center gap-4 mr-12">
              <div>
                <img
                  src="/images/image.png"
                  alt="Director"
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>

              <div className="gap-4 items-center hidden lg:flex">
                <button className="flex gap-[6px]">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <p>LinkedIn</p>
                </button>
                <button className="flex gap-[6px]">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <p>Twitter</p>
                </button>
              </div>
            </div>

            <div className="w-full xl:w-2/3 flex flex-col z-50">
              <div className="flex gap-4">
                <div className="mb-8">
                  <QuotesIcon />
                </div>

                <div>
                  <p className="text-gray-700 text-sm mt-4 mb-4 leading-relaxed border-b border-gray-300 pb-4">
                    Infominez has been an invaluable strategic technology
                    partner for Paul Merchants, guiding us through the complex
                    landscape of digital financial services. Their expertise in
                    developing robust solutions for Prepaid Instruments,
                    Pre-Paid Cards, BBPS, and UPI, along with a deep
                    understanding of integration protocols and payment gateways,
                    has been crucial to our success. Their strong grasp of the
                    Indian fintech ecosystem has enabled them to deliver
                    innovative and compliant solutions tailored to our needs.
                    Moreover, &apos;s commitment to agile development
                    methodologies and their ability to adapt swiftly to evolving
                    regulatory requirements have been indispensable to our
                    business. We highly value our partnership and look forward
                    to continued collaboration.
                  </p>
                  <div>
                    <h3 className="text-2xl font-medium mb-1">
                      SHAIBU CHERIAN
                    </h3>
                    <p className="text-gray-600">
                      Whole Time Director at Paul Merchants Finance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
