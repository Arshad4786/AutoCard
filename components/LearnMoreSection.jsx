// components/LearnMoreSection.jsx
import React from 'react';

// Example simple SVG icons (Replace with actual SVGs or an icon library)
const ScaleIcon = () => (
  <svg className="w-10 h-10 mb-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a2 2 0 002 2h10a2 2 0 002-2l-3-9m0 0l3-1m-6 0V4m0 2v14m0-6h.01M12 10h.01M12 14h.01M18 6l-3 1m0 0l3 9a2 2 0 01-2 2H8a2 2 0 01-2-2l3-9m0 0l-3-1m6 0V4" />
  </svg>
);
const WifiOffIcon = () => (
  <svg className="w-10 h-10 mb-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364M12 18h.01M4.929 4.929a12.034 12.034 0 0114.142 0m-14.142 0L19.07 19.07M12 14a2 2 0 100-4 2 2 0 000 4z" />
     {/* Simplified cross */}
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-10 h-10 mb-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const ShieldCheckIcon = () => (
  <svg className="w-10 h-10 mb-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zM9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> {/* Combination for shield + check effect */}
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.23-.3 2.39-.84 3.43l-3.16-3.16A5.23 5.23 0 0012 9c-2.84 0-5.17 2.3-5.17 5.17 0 1.23.3 2.39.84 3.43l-3.16 3.16A9 9 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
  </svg>
);


const features = [
  {
    icon: <ScaleIcon />,
    title: "Guaranteed Fair Fares",
    description: "Our system automatically calculates fares based on distance or route segments, eliminating guesswork and ensuring every passenger pays their accurate share. No more overpaying or awkward negotiations.",
  },
  {
    icon: <WifiOffIcon />,
    title: "Reliable Offline Payments",
    description: "Poor network connectivity? No problem. AutoCard is designed to process payments seamlessly even when offline, preventing delays and disputes caused by failing payment apps.",
  },
  {
    icon: <ClockIcon />,
    title: "Save Time & Reduce Hassle",
    description: "Forget manual calculations and searching for change. AutoCard streamlines the payment process for both passengers and drivers, leading to quicker journeys and less friction.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Build Trust & Transparency",
    description: "With automated, clear fare calculations and reliable payments, AutoCard fosters trust between passengers and drivers, making shared rides a more comfortable and dependable experience.",
  },
];

const LearnMoreSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-neutral-900/50" id="learn-more"> {/* Added background and ID */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose AutoCard?
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
            AutoCard tackles the common frustrations of shared auto rides, offering a modern solution for fair, reliable, and convenient travel.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md dark:shadow-neutral-700/50">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-neutral-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;