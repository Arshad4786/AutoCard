// components/OrderModal.jsx
import React, { useState } from 'react';

const OrderModal = ({ isOpen, onClose }) => {
  // State to hold form data (optional, can also use FormData on submit)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: 1,
  });

  if (!isOpen) return null; // Don't render anything if the modal is closed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission which reloads the page
    console.log("Order Details:", formData);
    // --- TODO: Add logic here to actually send the data (e.g., API call) ---
    alert(`Thank you, ${formData.name}! Your order request for ${formData.quantity} AutoCard(s) has been received (check console for details).`);
    onClose(); // Close the modal after submission
  };

  return (
    // Overlay / Backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose} // Optional: Close modal on overlay click
    >
      {/* Modal Content Box */}
      {/* Stop propagation prevents closing when clicking inside the modal content */}
      <div
        className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl p-6 md:p-8 w-full max-w-md mx-4 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Pre-order AutoCard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            {/* Simple X icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body - Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-700 dark:text-white"
                placeholder="Jane Doe"
              />
            </div>



            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-700 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                Address
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-700 dark:text-white"
                placeholder="Street Address, City, State, Zip"
              />
            </div>

            {/* Quantity Field */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-neutral-300 mb-1">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                required
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-neutral-700 dark:text-white"
              />
            </div>

            {/* Add more fields as needed (e.g., address, company) */}

          </div>

          {/* Modal Footer - Submit Button */}
          <div className="mt-8 text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            >
              Submit Order Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;