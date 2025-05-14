import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const contactCards = [
    {
      icon: <MdOutlineMailOutline className="text-2xl" />,
      title: "Gmail",
      info: "weblinkerr@proton.me",
      action: "Send Email",
      bgColor: "bg-gray-500", // Neutral & professional
      href: "mailto:weblinkerr@proton.me",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      info: "+92 3164230362",
      action: "Chat Now",
      bgColor: "bg-green-500",
      href: "https://wa.me/923164230362",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      info: "+92 3275909402",
      action: "Call Us",
      bgColor: "bg-blue-500",
      href: "tel:+923275909402",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-900 mb-4"
        >
          Get in Touch with <span className="text-indigo-600">WebLinker</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        >
          Ready to boost your online visibility with high-authority backlinks?
          Connect with our expert team at WebLinker and take the first step
          toward stronger SEO and more traffic.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div
                className={`flex justify-center items-center w-16 h-16 mx-auto ${card.bgColor} text-white rounded-full mb-4`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{card.info}</p>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-block px-4 py-2 rounded-lg ${
                  index === 0
                    ? "bg-gray-100 text-gray-800 hover:bg-gray-300"
                    : index === 1
                    ? "bg-green-100 text-green-600 hover:bg-green-200"
                    : index === 2
                    ? "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition-colors`}
              >
                {card.action}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
