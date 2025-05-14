import React from "react";

const Hero = () => {
  const trustItems = [
    {
      text: "White Hat Only",
      icon: (
        <svg
          className="w-5 h-5 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      text: "High DA Links",
      icon: (
        <svg
          className="w-5 h-5 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative bg-gray-50 overflow-hidden border-b border-gray-100"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 animate-gradient-shift opacity-70"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,...')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Boost Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                SEO
              </span>{" "}
              with WebLinker's Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Backlink Services
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              At <strong>WebLinker</strong>, our team focuses on building
              powerful, white-hat backlinks from trusted, high-authority
              websites. We help improve your SEO performance, grow organic
              traffic, and strengthen your online presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3.5 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
              >
                <span className="relative z-10">Get Backlinks Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center bg-white text-gray-800 font-medium py-3.5 px-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:bg-indigo-50/50"
              >
                How It Works →
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow transition-all duration-300 border border-gray-100 hover:border-indigo-100"
                >
                  <div className="w-9 h-9 bg-indigo-100 rounded-full flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Updated Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="WebLinker backlink services"
                className="w-full h-auto object-cover"
                loading="eager"
              />

              {/* DA Score Bubble */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-44 transform rotate-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-700">
                    DA 85+ Sites
                  </span>
                </div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 w-[85%]"></div>
                </div>
              </div>

              {/* Trustpilot Bubble */}
              <div className="absolute -top-5 -left-5 bg-white p-3 rounded-lg shadow-lg border border-gray-100 w-36 transform -rotate-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-500 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-bold text-gray-700">
                    4.9/5 Trustpilot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
