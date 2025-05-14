import React from "react";
import { FaPenAlt, FaNewspaper, FaLink } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaPenAlt className="text-indigo-600" size={24} />,
      title: "Guest Posting",
      benefits: [
        "Get featured on top-tier websites",
        "Boost brand visibility & trust",
        "Drive targeted niche traffic",
      ],
    },
    {
      icon: <FaNewspaper className="text-indigo-600" size={24} />,
      title: "Press Release Distribution",
      benefits: [
        "Professionally written press content",
        "Announce your news to the media",
        "Widespread online publication",
      ],
    },
    {
      icon: <FaPenAlt className="text-indigo-600" size={24} />,
      title: "SEO Content Writing",
      benefits: [
        "Engaging, keyword-rich articles",
        "Establish authority in your field",
        "Enhance on-page SEO performance",
      ],
    },
    {
      icon: <FaLink className="text-indigo-600" size={24} />,
      title: "Link Insertions",
      benefits: [
        "Add contextual backlinks to existing content",
        "Improve domain authority & rankings",
        "Leverage established content authority",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Backlink and content strategies crafted to boost your visibility,
            build trust, and grow your search engine rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-50 rounded-full shadow-sm mr-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-3 mt-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
