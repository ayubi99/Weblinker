import React from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "TechBuzz Magazine",
      da: "DA 85",
      category: "Technology",
      description:
        "Guest post about emerging AI technologies with a contextual backlink to a SaaS company.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Wellness Today",
      da: "DA 60",
      category: "Health & Wellness",
      description:
        "Expert article on holistic health approaches with a backlink to a supplement e-commerce site.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Finance Insights",
      da: "DA 75",
      category: "Finance",
      description:
        "In-depth analysis of cryptocurrency trends with a backlink to a financial advisory service.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Recent <span className="text-indigo-600">Placements</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Explore our guest post placements across high-authority domains in
            various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-600 font-semibold mb-3">
                  <span>{item.da}</span>
                  <span>{item.category}</span>
                </div>
                <p className="text-gray-700 mb-5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="mt-20 border-gray-300" />
      </div>
    </section>
  );
};

export default Portfolio;
