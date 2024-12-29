
import React, { useState } from "react";
import UpperSection from "./Footer_up.jsx";
import LowerSection from "./Footer_low.jsx";

const Footer = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    // Send data to the backend (contact route)
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        setSuccess("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <footer
      className="relative bg-white/30 backdrop-blur-lg rounded-lg shadow-md"
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-10"></div>
      )}

      
      <div className="bg-transparent">
        <UpperSection toggleForm={toggleForm} />
      </div>

      
      <div className="bg-transparent">
        <LowerSection />
      </div>

      
      {isFormVisible && (
        <div
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-4 sm:p-6 shadow-lg rounded-lg w-[95%] sm:w-[90%] max-w-md z-20 max-h-[90vh] overflow-y-auto"
          style={{
            animation: "slideUp 0.5s ease-in-out",
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>

            
            {error && <p className="text-red-500 text-sm">{error}</p>}

            
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <div className="flex justify-between">
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600">
                Submit
              </button>
              <button
                type="button"
                className="text-gray-500 underline hover:text-black"
                onClick={toggleForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </footer>
  );
};

export default Footer;