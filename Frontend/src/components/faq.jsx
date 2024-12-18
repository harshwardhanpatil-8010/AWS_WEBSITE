import React, { useState } from "react";
//import myImage from '../assets/illus.png';


const FAQPage = () => {
  const faqs = [
    {
      question: "What is the full form of AWS?",
      answer: "Amazon Web Services",
    },
    {
      question: "What is AWS?",
      answer: "AWS is a comprehensive cloud computing platform...",
    },
    {
      question: "What does AWS do?",
      answer: "AWS provides scalable cloud computing solutions...",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative mt-4 bg-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[6.5px] rounded-lg border border-white/20 p-4">
      {/* FAQ box */}
      <main className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-start ">
        {/* FAQ title */}
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-center text-3xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-purple-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between py-2 text-lg font-semibold text-white focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        
      </main>
    </div>
  );
};

export default FAQPage;