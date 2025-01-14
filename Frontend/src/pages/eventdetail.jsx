import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
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
    return <div className="text-center text-gray-600">Loading Event...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading event: {error}</div>;
  }

  return (
    <>
      <Background />
      <div className="wrapper">
        
        <button 
          onClick={() => navigate(-1)}
          className=" text-white py-8 px-8 rounded-full border-white border-2"
        >
          <IoMdArrowRoundBack size={56}/>
        </button>
        
        <h2 className="text-2xl font-semibold mb-6">{event.name}</h2>
        <div className="event-details  text-white p-5">
          {event.coverImage && (
            <img
              src={event.coverImage}
              alt={event.name}
              className="event-image w-full h-60 object-cover rounded-lg mb-6"
            />
          )}
          <p className='text-lg text-white'>{event.description}</p>
          <p className='text-pink-700'><strong>Location:</strong> {event.location}</p>
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Start Time:</strong> {event.startTime}</p>
          <p><strong>End Time:</strong> {event.endTime}</p>
          <p><strong>Status:</strong> {event.status}</p>
          
          {event.speakers && event.speakers.length > 0 && (
            <div className="speakers mt-6">
              <h3 className="text-xl font-semibold">Speakers</h3>
              <ul>
                {event.speakers.map((speaker, index) => (
                  <li key={index} className="mb-4">
                    <p><strong>Name:</strong> {speaker.name}</p>
                    <p><strong>Designation:</strong> {speaker.designation}</p>
                    {speaker.image && (
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-16 h-16 object-cover rounded-full mt-2 px-2"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.eventImages && event.eventImages.length > 0 && (
            <div className="event-images mt-6">
              <h3 className="text-xl font-semibold">Event Images</h3>
              <div className="grid grid-cols-2 gap-4">
                {event.eventImages.map((image, index) => (
                    // eslint-disable-next-line
                  <img
                    key={index}
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          {event.topicsCovered && event.topicsCovered.length > 0 && (
            <div className="topics-covered mt-6">
              <h3 className="text-xl font-semibold">Topics Covered</h3>
              <ul>
                {event.topicsCovered.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {event.registrationLink && (
            <p><strong>Registration Link:</strong> <a href={event.registrationLink} className="text-blue-600">{event.registrationLink}</a></p>
          )}

        </div>
      </div>
    </>
  );
};

export default EventDetails;
