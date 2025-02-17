import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Background from "../components/background";
import LowerSection from "../components/Footer_low";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('https://aws-backend-production-d3d5.up.railway.app/events');

        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.statusText}`);
        }

        const data = await response.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Background />
      <div className="wrapper min-h-screen bg-gray-900 text-white">
        <div className="bg-black/80 sticky top-0 z-50 backdrop-blur-md shadow-lg">
          <Navbar />
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event._id}
                className="relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20"
                onClick={() => navigate(`/events/${event._id}`)}
              >
                {event.coverImage && (
                  <div className="h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={event.coverImage}
                      alt={event.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {event.name}
                  </h3>
                  <span className="block text-sm text-gray-400 mt-2">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  
                  <p className="text-gray-300 mt-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      Learn more →
                    </button>
                    <span className="text-xs text-gray-500">Click to view details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <LowerSection />
      </div>
    </>
  );
};

export default Events;
