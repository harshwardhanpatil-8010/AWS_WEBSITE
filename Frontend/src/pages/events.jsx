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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Background />
      <div className="wrapper min-h-screen">
        <div className="bg-gradient-to-br from-black/70 to-black/90 sticky top-0 z-50 backdrop-blur-md shadow-lg">
          <Navbar />
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={event._id}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => navigate(`/events/${event._id}`)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  {event.coverImage && (
                    <img
                      src={event.coverImage}
                      alt={event.name}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {event.name}
                    </h3>
                    <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="mt-4 flex justify-end">
                    <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
