import React from "react";
import {
  FaLink,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Guest Posting", href: "#guest-posting" },
    { name: "Link Insertions", href: "#link-insertions" },
    { name: "Content Writing", href: "#content-writing" },
    { name: "SEO Strategy", href: "#seo-strategy" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Case Studies", href: "#cases" },
    { name: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "#linkedin" },
    { icon: <FaTwitter />, href: "#twitter" },
    { icon: <FaFacebook />, href: "#facebook" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <FaLink className="text-indigo-500 text-3xl" />
              <span className="text-2xl font-bold text-white">
                WebLinker Team
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              The WebLinker Team specializes in premium link-building services,
              focusing on delivering high-quality backlinks and effective SEO
              strategies for businesses.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Contact us for tailored solutions that can help boost your search
              rankings and online presence.
            </p>

            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-indigo-400 text-xl transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-indigo-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:weblinkerr@proton.me"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  weblinkerr@proton.me
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-indigo-500 mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/923164230362"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  +923164230362
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-indigo-500 mt-1 flex-shrink-0" />
                <a
                  href="tel:+923275909402"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  +923275909402
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Copyright (Centered) */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} WebLinker Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
