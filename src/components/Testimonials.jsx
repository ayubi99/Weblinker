import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      content:
        "The WebLinker Team helped us secure placements on several high-authority finance websites. Our organic traffic increased by 65% within 3 months, and we're now ranking on page 1 for several competitive keywords.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Sarah Johnson",
      position: "Marketing Director, FinancePro",
    },
    {
      content:
        "As a small business, we were skeptical about guest posting services, but the WebLinker Team delivered exceptional results. The content quality was outstanding, and the links have significantly boosted our domain authority.",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      name: "Michael Chen",
      position: "CEO, TechStart Solutions",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Don't just take our word for it, hear from businesses we've helped
            grow.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 relative"
            >
              <div className="absolute top-4 left-6 text-6xl text-gray-100 font-serif select-none z-0">
                “
              </div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="mt-20 border-gray-300" />
    </section>
  );
};

export default Testimonials;
