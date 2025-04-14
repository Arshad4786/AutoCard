import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "What is AutoCard?",
      answer:
        "AutoCard is a proposed system designed to simplify and automate fare payments for shared auto-rickshaws in India. It aims to ensure fair fare splitting among passengers and provide a reliable payment method, even in areas with poor network connectivity.",
    },
    {
      question: "How does AutoCard solve the unfair fare splitting problem?",
      answer:
        "AutoCard automates the fare calculation based on distance travelled or pre-defined rules for shared routes. It removes the need for manual calculation and negotiation, ensuring each passenger pays their fair share accurately.",
    },
    {
      question: "Does AutoCard work without an internet connection?",
      answer:
        "Yes, a key feature of AutoCard is its ability to function reliably even during network outages or in areas with poor connectivity. Payments and fare calculations can be processed offline, avoiding delays and disputes caused by failed mobile payment apps.",
    },
    {
      question: "How do passengers pay using the AutoCard system?",
      answer:
        "Passengers would likely use a dedicated AutoCard (like a prepaid transit card) or a mobile app with offline capabilities. They would tap in when boarding and potentially tap out when alighting, or the system would calculate fares based on shared ride segments.",
    },
     {
      question: "How does the system handle multiple passengers getting on/off at different points?",
      answer:
        "The AutoCard system is designed to track individual passenger journeys within a shared ride. It would calculate the fare for each passenger based on their specific boarding and alighting points, ensuring accurate charges for different travel distances.",
    },
    {
      question: "What are the main benefits for passengers?",
      answer:
        "Passengers benefit from fair and transparent pricing, convenience (no need for exact change or manual calculations), faster boarding/alighting, and a reliable payment option that works even without internet.",
    },
    {
      question: "What are the benefits for auto drivers?",
      answer:
        "Drivers benefit from automated fare collection, reduced time spent on calculating and collecting fares, elimination of payment disputes, and potentially faster turnaround times. It also builds trust with passengers.",
    },
     {
      question: "How does AutoCard prevent conflicts and discomfort?",
      answer:
        "By automating the fare calculation and payment process, AutoCard removes the ambiguity and potential for disagreement that often arises with manual fare splitting. This leads to a smoother, more comfortable, and conflict-free ride experience for everyone.",
    },
     {
      question: "Is this system currently available?",
      answer:
        "The problem statement describes the need for a system like AutoCard. This FAQ is based on the proposed solution to the identified challenges. Availability would depend on the development and implementation of such a system.",
    },
  ];

  return (
    // Main container: Centered, max-width, padding for overall spacing
    <div className="w-full max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      {/* Subtitle / TLDR - Adjusted for AutoCard */}
      <p className="text-sm sm:text-base text-center text-neutral-600 dark:text-neutral-400 mb-8 md:mb-12">
        TLDR: AutoCard aims for fair, automated auto fares, even offline.
      </p>

      {/* FAQ List Container */}
      <div className="space-y-3"> {/* Adds vertical space between each FAQ item */}
        {faqData.map((item, index) => (
          <details
            key={index}
            className="group border-b border-neutral-200 dark:border-neutral-800 last:border-b-0 overflow-hidden"
             // Optional: add border between items if desired, removing space-y-3 if used
             // Using rounded background approach instead based on image
             // className="group bg-neutral-100 dark:bg-neutral-800/50 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-700/60"
          >
            <summary
              className="flex cursor-pointer list-none items-center justify-between p-4 md:p-5 font-medium text-gray-800 dark:text-gray-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-colors duration-200"
              // Style the summary like the button in the image
              // Use padding here for the clickable area text
              // bg-neutral-100 dark:bg-neutral-800 rounded-lg font-medium text-gray-800 dark:text-gray-100
            >
              <span>{item.question}</span>
              <span className="transition-transform duration-300 group-open:rotate-180">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400" // Adjusted size and color slightly
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7"></path> {/* Chevron down */}
                </svg>
              </span>
            </summary>

            {/* Answer Panel: Padding applied only when open */}
             <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                 {/* Removed transition/animation classes - rely on default browser behavior or add JS if needed */}
                 {/* Add padding here */}
                 {item.answer}
             </div>
             {/* --- OR --- Use max-height transition (more complex but smoother) */}
            {/* <div
              className="overflow-hidden max-h-0 group-open:max-h-[500px] transition-[max-height] duration-500 ease-in-out" // Adjust max-h-[value] as needed
            >
              <p className="px-4 md:px-5 pb-4 md:pb-5 pt-2 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </p>
            </div> */}
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;