import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Online Presence?
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
          Take the leap towards boosting your search rankings with our
          high-quality backlinks and premium guest posting services.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
        >
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
};

export default CTA;
