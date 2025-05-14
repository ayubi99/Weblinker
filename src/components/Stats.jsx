import React from "react";

const Stats = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "95%", label: "Retention Rate" },
    { number: "2,000+", label: "Links Built" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <p className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
