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
      console.log("Fetching event with ID:", eventId);

      try {
        const response = await fetch(`http://localhost:8000/events/${eventId}`);                                                                                                                                    
        const contentType = response.headers.get("content-type");
        console.log("Response Content-Type:", contentType);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

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

  if (loading) {
    return <div className="text-center text-gray-600 text-xl font-semibold">Loading Event...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl font-semibold">Error loading event: {error}</div>;
  }

  return (
    <>
      <Background />
      <div className="wrapper min-h-screen p-6">
        <button 
          onClick={() => navigate(-1)}
          className="text-white m-4 py-2 px-6 rounded-full border-2 border-white shadow-lg hover:bg-white hover:text-blue-500 transition duration-300 flex items-center"
        >
          <IoMdArrowRoundBack size={20} className="mr-2" /> Back
        </button>
        
        <div className="bg-slate-600/20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-4xl mx-auto">
          

          {event.coverImage && (
            <img
              src={event.coverImage}
              alt={event.name}
              className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
            />
          )}
          
          <div className="text-gray-700 text-lg space-y-6 p-3">
          <p><strong className="text-white space-y-6"></strong> {event.description}</p>
          </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center text-gray-700 text-lg ">
          <div className="space-y-5">
          <p><strong className="text-white"><FaMapMarkerAlt className="inline mr-2" />Location:</strong> {event.location}</p>
          </div>
          <div className="space-y-5">
          <p><strong className="text-white"><FaCalendarAlt className="inline mr-2" />Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          </div>
        </div>

          {event.speakers && event.speakers.length > 0 && (
            <div className="speakers mt-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Speakers</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             
              {event.speakers.map((speaker, index) => (
                <li key={index} className="relative group">
                  <div className="relative w-60 h-60 perspective">
                    <div className="absolute inset-0 w-40 h-30 rounded-full border-4 border-white shadow-md text-white">
                      
                       <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-transparent rounded-full backface-hidden">
                        {speaker.image && (
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-20 h-20 object-cover rounded-full mx-auto mb-3"
                          />
                        )}
                        <p><strong className='text-grey-900'></strong> {speaker.name}</p>
                        <p><strong className="text-gray-900"></strong> {speaker.designation}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          )}

          {event.eventImages && event.eventImages.length > 0 && (
            <div className="event-images mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {event.eventImages.map((image, index) => (
                  // eslint-disable-next-line
                  <img
                    key={index}
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          )}
          
            {event.topicsCovered && event.topicsCovered.length > 0 && (
            <div className="topics-covered mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Summary</h3>
              <ul className="list-disc list-inside text-gray-700">
                {event.topicsCovered.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

            <div className="flex justify-center space-x-9 mt-4">
               {event.registrationLink && (
              <button
                className="text-white m-4 py-2 px-6 rounded-full border-2 border-white shadow-lg hover:bg-white hover:text-blue-500 transition duration-300 flex items-center"
                onClick={() => window.open(event.registrationLink, "_blank", "noopener noreferrer")}
              >
                Claim Your Spot
              </button>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;