import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Backlinks = () => {
  const categories = [
    {
      title: "Premium Backlink Sites",
      color: "indigo",
      sheet:
        "https://docs.google.com/spreadsheets/d/1eKtQlgVylDfjmDA2xLzLbZ5bfhy0xyqDUeO4sNmk6Dc/edit?usp=sharing",
      sites: [
        {
          domain: "barchart.com",
          traffic: "1.5M",
          country: "USA, IND",
          tat: "24–48 hrs",
        },
        {
          domain: "khaleejtimes.com",
          traffic: "1.4M",
          country: "UAE, IND",
          tat: "1 week",
        },
        {
          domain: "imei.info",
          traffic: "1.4M",
          country: "IND, INDO",
          tat: "24–48 hrs",
        },
        {
          domain: "benzinga.com",
          traffic: "1.3M",
          country: "USA, IND",
          tat: "24–48 hrs",
        },
        {
          domain: "iplocation.net",
          traffic: "1.1M",
          country: "USA, UK",
          tat: "24–48 hrs",
        },
      ],
    },
    {
      title: "Press Release Sites",
      color: "blue",
      sheet:
        "https://docs.google.com/spreadsheets/d/1eKtQlgVylDfjmDA2xLzLbZ5bfhy0xyqDUeO4sNmk6Dc/edit?gid=818369960#gid=818369960",
      sites: [
        {
          domain: "finance.yahoo.com",
          traffic: "63.3M",
          country: "USA, CAN",
          tat: "24–48 hrs",
        },
        {
          domain: "msn.com",
          traffic: "38M",
          country: "USA, FRANCE",
          tat: "24–48 hrs",
        },
        {
          domain: "apnews.com",
          traffic: "20.5M",
          country: "USA, CAN",
          tat: "24–48 hrs",
        },
        {
          domain: "markets.businessinsider.com",
          traffic: "2.1M",
          country: "USA, IND",
          tat: "24–48 hrs",
        },
        {
          domain: "theglobeandmail.com",
          traffic: "2.1M",
          country: "CAN, USA",
          tat: "24–48 hrs",
        },
      ],
    },
    {
      title: "Collaborated Author Sites",
      color: "purple",
      sheet:
        "https://docs.google.com/spreadsheets/d/1eKtQlgVylDfjmDA2xLzLbZ5bfhy0xyqDUeO4sNmk6Dc/edit?gid=523936958#gid=523936958",
      sites: [
        {
          domain: "ranker.com",
          traffic: "2.5M",
          country: "USA, IND",
          tat: "24–48 hrs",
        },
        {
          domain: "nairaland.com",
          traffic: "2M",
          country: "NIGERIA, USA",
          tat: "24–48 hrs",
        },
        {
          domain: "ipsnews.net",
          traffic: "1.7M",
          country: "USA, CAN",
          tat: "24–48 hrs",
        },
        {
          domain: "guidetoiceland.is",
          traffic: "673K",
          country: "USA, ICELAND",
          tat: "Instant – 6 hrs",
        },
        {
          domain: "houzz.co.uk",
          traffic: "309K",
          country: "UK, USA",
          tat: "24–48 hrs",
        },
      ],
    },
  ];

  const getHeaderClass = (color) => {
    switch (color) {
      case "indigo":
        return "from-indigo-600 to-indigo-700";
      case "blue":
        return "from-blue-600 to-blue-700";
      case "purple":
        return "from-purple-600 to-purple-700";
      default:
        return "from-gray-600 to-gray-700";
    }
  };

  return (
    <>
      <hr className="border-t border-gray-300" />
      <section id="backlinks" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-indigo-600">Authority Network</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium sites across different categories for maximum digital
              presence
            </p>
          </div>

          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-20">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                {category.title}
              </h3>

              <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
                <div className="overflow-x-auto w-full">
                  <table className="min-w-[600px] w-full text-sm text-gray-800">
                    <thead
                      className={`text-white bg-gradient-to-r ${getHeaderClass(
                        category.color
                      )}`}
                    >
                      <tr>
                        <th className="px-6 py-3 text-left font-bold uppercase tracking-wider border-r border-white/20">
                          Domain
                        </th>
                        <th className="px-6 py-3 text-center font-bold uppercase tracking-wider border-r border-white/20">
                          Traffic
                        </th>
                        <th className="px-6 py-3 text-center font-bold uppercase tracking-wider border-r border-white/20">
                          Country
                        </th>
                        <th className="px-6 py-3 text-center font-bold uppercase tracking-wider">
                          TAT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {category.sites.map((site, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition duration-200"
                        >
                          <td className="px-6 py-3 font-semibold text-gray-900 border-r border-gray-200">
                            {site.domain}
                          </td>
                          <td className="px-6 py-3 text-center border-r border-gray-200 font-medium">
                            {site.traffic}
                          </td>
                          <td className="px-6 py-3 text-center border-r border-gray-200 font-medium">
                            {site.country}
                          </td>
                          <td className="px-6 py-3 text-center font-medium">
                            {site.tat}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Google Sheet Button */}
              <div className="mt-6 text-center">
                <a
                  href={category.sheet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
                >
                  View Google Sheet <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="border-t border-gray-300" />
    </>
  );
};

export default Backlinks;
