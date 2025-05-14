import React from "react";

const AboutUs = () => {
  return (
    <section id="aboutus" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          About <span className="text-indigo-600">WebLinker Team</span>
        </h2>
        <p className="mt-6 text-lg text-gray-700 font-medium">
          WebLinker Team is a passionate group of SEO experts, outreach
          professionals, and content strategists committed to helping brands
          grow through powerful backlinks and smart digital visibility tactics.
        </p>

        <p className="mt-4 text-gray-700 font-medium">
          We specialize in premium guest posting, niche edits, and tailored SEO
          strategies that drive real results. Whether you're a startup or an
          established business, our transparent approach and proven techniques
          will elevate your online authority and search rankings.
        </p>

        <p className="mt-4 text-gray-700 font-medium">
          At WebLinker Team, we believe in long-term value, authentic
          partnerships, and measurable growth. Our curated network of
          high-authority websites and editorial relationships ensures your brand
          is placed where it truly matters.
        </p>

        <div className="mt-8">
          <a
            href="https://docs.google.com/spreadsheets/d/1eKtQlgVylDfjmDA2xLzLbZ5bfhy0xyqDUeO4sNmk6Dc/edit?gid=0#gid=0" // replace with your actual sheet link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            View Our Site List
          </a>
        </div>

        <hr className="mt-16 border-gray-300" />
      </div>
    </section>
  );
};

export default AboutUs;
