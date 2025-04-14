"use client";

// Keep existing imports
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from "../../components/navbar";
import { PlaceholdersAndVanishInput } from "../../components/placeholders-and-vanish-input";
import { TextHoverEffect } from "../../components/text-hover-effect";
// import { Features } from "../../components/features-section"; // Uncomment if needed
// import SectionStart from "../../components/section-start"; // Uncomment if needed
// import { Tabs } from "../../components/tabs";
import CreditCard from "../../components/CreditCard";
import LearnMoreSection from '../../components/LearnMoreSection'; // <-- Import LearnMoreSection
import FAQ from '../../components/faq';
import GetStartedSection from '../../components/getstarted';
import OrderModal from '../../components/OrderModal';
import './globals.css';

export default function HomePage() {
  // ... (keep placeholders, onSubmit, DummyContent, tabs, modal state, modal functions)
  const placeholders = [ /* ... keep placeholders ... */ ];
  const onSubmit = (value) => { console.log("Submitted:", value); };
  const DummyContent = () => ( <p className="text-inherit">hi</p> );
  const tabs = [ /* ... keep tabs data ... */ ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // ... keep dark mode logic ...
     const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
     document.documentElement.classList.toggle('dark', isDark);
  }, []);

   // Function to handle smooth scrolling
   const handleScrollTo = (id) => {
     const element = document.getElementById(id);
     if (element) {
       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
   };


  return (
    <>
      <Head>
        {/* ... keep head content ... */}
      </Head>

      {/* --- Outer Container --- */}
      <div className="relative flex flex-col min-h-screen w-full bg-white text-gray-800 dark:bg-black dark:text-neutral-200 overflow-x-hidden transition-colors duration-300">
        <Navbar />

        {/* --- Hero Section --- */}
        <main className="flex flex-grow flex-col items-center justify-center pt-28 sm:pt-32 pb-16 md:pb-24 text-center px-4 sm:px-6 lg:px-8">
          {/* ... TextHoverEffect ... */}
          <div className="mb-10 md:mb-12 w-[60vw] sm:w-[50vw] h-[25vh] sm:h-[30vh]">
            <TextHoverEffect text="AutoCard" duration={0.5} />
          </div>

          {/* ... PlaceholdersAndVanishInput ... */}
           <div className="w-full max-w-xl mb-10 md:mb-12">
             <PlaceholdersAndVanishInput
               placeholders={placeholders}
               onSubmit={onSubmit}
             />
           </div>


          {/* ... Tagline ... */}
           <p className="text-base sm:text-lg text-gray-700 dark:text-neutral-400 max-w-xl lg:max-w-2xl mb-10 md:mb-12">
            AutoCard simplifies shared auto-rickshaw travel with automated, fair fare splitting. Enjoy convenient and reliable payments, designed to work seamlessly even without network connectivity.
           </p>


          {/* --- Buttons --- */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* --- Order Now Button (Opens Modal) --- */}
            <button
              onClick={openModal}
              className="w-full sm:w-auto text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full px-6 py-2.5 sm:px-7 sm:py-3 transition-all duration-200
                                bg-gray-900 text-white hover:bg-gray-800 border border-gray-900 hover:border-gray-700
                                dark:bg-neutral-800 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-neutral-700 dark:border dark:border-neutral-700 dark:hover:border-neutral-500"
            >
              Order Now
            </button>
            {/* --- Learn More Button (Scrolls to Section) --- */}
            <button
              onClick={() => handleScrollTo('learn-more')} // <-- Updated onClick
              className="w-full sm:w-auto text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full px-6 py-2.5 sm:px-7 sm:py-3 transition-all duration-200
                                text-gray-800 hover:text-black border border-gray-400 hover:border-gray-600
                                dark:text-neutral-200 dark:hover:text-white dark:border dark:border-neutral-600 dark:hover:border-neutral-300"
            >
              Learn More
            </button>
          </div>
        </main>

        {/* --- Bouncing Arrow --- */}
        {/* ... arrow svg ... */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-gray-500 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>


        {/* --- Credit Card Section --- */}
         <div className="my-16 md:my-24 flex justify-center px-4">
           <CreditCard
             bankName="CSE-ICB"
             cardHolderName="Monish Shah"
             cardNumberFull="9876543210987654"
             cardNumberHidden="XXXX XXXX XXXX 7654"
             expiryDate="12/28"
             cvv="987"
             cardType="AUTOCARD"
             logoText="Visa" // Example
           />
         </div>

        {/* --- Learn More Section --- */}
        {/* This component provides its own padding and background */}
        <LearnMoreSection /> {/* <-- Added the new section component */}


        {/* --- Section Dividers and Content --- */}
        {/* ... (keep commented sections or uncomment as needed) ... */}

        {/* --- FAQ Section --- */}
         {/* Added top margin (use mt- or my- depending on LearnMoreSection's padding) */}
        <div className="mt-16 md:mt-24">
           <FAQ/>
        </div>

        {/* --- Get Started Section --- */}
        <GetStartedSection />

        {/* --- Footer --- */}
        {/* <Footer /> */}

      </div> {/* End of main outer container */}

      {/* --- Render the Modal --- */}
      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}