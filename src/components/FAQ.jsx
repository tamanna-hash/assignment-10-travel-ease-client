import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a trip with TravelEase?",
      answer: "Simply choose your destination, select your travel dates, and complete the booking in a few clicks.",
    },
    {
      question: "Can I cancel or modify my bookings?",
      answer: "Yes, you can modify or cancel your bookings depending on the provider’s policy.",
    },
    {
      question: "Are there special deals or discounts?",
      answer: "We offer seasonal deals and promotions for flights, hotels, and travel packages.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-base-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-cyan-900 max-w-xl mx-auto">
          Answers to common questions about TravelEase.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-cyan-900 font-semibold">{faq.question}</h3>
              {activeIndex === index ? (
                <FaChevronUp className="text-amber-400 w-5 h-5" />
              ) : (
                <FaChevronDown className="text-amber-400 w-5 h-5" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
