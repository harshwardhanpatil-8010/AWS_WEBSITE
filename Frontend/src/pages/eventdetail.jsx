import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Background from '../components/background';

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();  
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(`http://localhost:8000/events/${eventId}`);
        const contentType = response.headers.get("content-type");
        console.log("Response Content-Type:", contentType);
        if (!response.ok) 
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Received non-JSON response:", text);
          throw new Error("Expected JSON, received HTML or another format.");
        }
        const data = await response.json();
        console.log("Fetched Event Data:", data);
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [eventId]);

  if (loading) return <div className="text-center text-gray-600 text-xl font-semibold">Loading Event...</div>;
  if (error) return <div className="text-center text-red-500 text-xl font-semibold">Error loading event: {error}</div>;

  return (
    <>
      <Background />
      <div className="wrapper min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <button 
          onClick={() => navigate(-1)}
          className="text-white m-4 py-2 px-6 rounded-full border-2 border-white shadow-lg hover:bg-white hover:text-blue-500 transition duration-300 flex items-center"
        >
          <IoMdArrowRoundBack size={20} className="mr-2" /> Back
        </button>
        
        <div className="bg-slate-600/20 backdrop-blur-sm rounded-lg shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto">
          {event.coverImage && (
            <img src={event.coverImage} alt={event.name} className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md mb-6" />
          )}
          
          <div className="text-gray-700 text-lg space-y-6 p-3">
            <p className="text-white text-sm sm:text-base md:text-lg">{event.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-gray-700 text-lg">
            <p className="text-white"><FaMapMarkerAlt className="inline mr-2" /> {event.location}</p>
            <p className="text-white"><FaCalendarAlt className="inline mr-2" /> {new Date(event.date).toLocaleDateString()}</p>
          </div>

          {event.speakers?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Speakers</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {event.speakers.map((speaker, index) => (
                  <li key={index} className="text-center">
                    {speaker.image && <img src={speaker.image} alt={speaker.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-3" />}
                    <p className="text-white">{speaker.name}</p>
                    <p className="text-gray-300 text-sm">{speaker.designation}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {event.eventImages?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {event.eventImages.map((image, index) => (
                  <img key={index} src={image} alt={`Event ${index + 1}`} className="w-full h-40 object-cover rounded-lg shadow-md" />
                ))}
              </div>
            </div>
          )}
          
          {event.topicsCovered?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Summary</h3>
              <ul className="list-disc list-inside text-gray-300">
                {event.topicsCovered.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {event.registrationLink && (
            <div className="flex justify-center mt-4">
              <button
                className="text-white py-2 px-6 rounded-full border-2 border-white shadow-lg hover:bg-white hover:text-blue-500 transition duration-300"
                onClick={() => window.open(event.registrationLink, "_blank", "noopener noreferrer")}
              >
                Claim Your Spot
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventDetails;                                                                                                                                 