import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is link-building and why is it important?",
      answer:
        "Link-building is the process of acquiring backlinks from authoritative websites to your own. It's a vital part of SEO, helping boost your website’s credibility, search engine rankings, and organic visibility.",
    },
    {
      question: "How long does it take to see results from link-building?",
      answer:
        "Results can vary depending on your industry, competition, and content quality. However, with the WebLinker Team, most clients begin to see measurable SEO improvements within 1 to 3 months.",
    },
    {
      question:
        "Can I do link-building myself or should I hire a professional?",
      answer:
        "While it’s possible to do link-building on your own, achieving high-quality results requires time, expertise, and access to premium websites. The WebLinker Team provides proven strategies and saves you valuable time by handling the process efficiently.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Here are some of the most common questions we get about our
            link-building services at{" "}
            <span className="font-semibold text-indigo-600">
              WebLinker Team
            </span>
            .
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <span className="text-indigo-600">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-base" />
                  ) : (
                    <FaChevronDown className="text-base" />
                  )}
                </span>
              </button>
              <div
                className={`px-5 pt-0 pb-4 text-gray-700 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
