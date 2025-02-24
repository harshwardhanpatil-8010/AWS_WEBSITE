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
    const fetchEvents = async () => {
      try {

        const response = await fetch(process.env.REACT_APP_API_URL + "/events");


        if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);

        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

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
      <div className="wrapper min-h-screen text-white">
        <div className="bg-black/80 sticky top-0 z-50 backdrop-blur-md shadow-lg">
          <Navbar />
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center">

            🌟 Event Timeline 🌟
          </h2>

          <ul className="relative grid gap-12 max-w-3xl w-full mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

            {events.map((event) => (
              <li
                key={event._id}
                className="relative flex flex-col items-center sm:items-start sm:flex-row sm:odd:flex-row-reverse cursor-pointer transition-all duration-300 hover:scale-105 -ml-20 odd:-mr-20 "
              >
                <div
                  className="w-80 h-96 bg-gray-800 p-6 shadow-lg rounded-md mt-4 sm:mt-0 sm:ml-4 sm:odd:mr-4 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                  onClick={() => navigate(`/events/${event._id}`)}
                >
                  {(
                    event.coverImage || "https://via.placeholder.com/300x200?text=No+Image"
                  ) && (
                      <div className="h-64 w-full overflow-hidden rounded-t-2xl">
                        <img
                          src={event.coverImage || "https://via.placeholder.com/300x200?text=No+Image"}
                          alt={event.name}
                         className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  <h3 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors -mt-12">
                    {event.name}
                  </h3>
                  <p className="block text-sm text-gray-400 mt-1">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  <p className="mt-3 text-gray-300 text-sm">
                    {event.description
                      ? event.description.slice(0, 100) + "..."
                      : "No description available."}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>


        {/* <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
            🌟 Upcoming Events

            🌟 Event Timeline

          </h2>

          <ul className="relative grid gap-8 max-w-3xl w-full mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

            {events.map((event) => (

              <div
                key={event._id}
                className="relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                onClick={() => navigate(/events/${event._id})}
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

              <li key={event._id} className="relative flex flex-col items-center sm:items-start sm:flex-row sm:odd:flex-row-reverse">
                <button
                  className="bg-gray-800 p-6 shadow-lg rounded-md border border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-2"
                  onClick={() => navigate(`/events/${event._id}`)}
                >
                  {event.coverImage && (
                    <div className="h-64 overflow-hidden rounded-t-2xl">
                      <img
                        src={event.coverImage}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">

                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}

                  </span>
                  <p className="mt-3 text-gray-300 text-sm">
                    {event.description
                      ? event.description.slice(0, 100) + "..."
                      : "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main> */}

                  </p>

                  <p className="mt-3 text-gray-300 text-sm">
                    {event.description ? `${event.description.slice(0, 100)}...` : "No description available."}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </main>


        <LowerSection />
      </div>
    </>
  );
};


export default Events;
