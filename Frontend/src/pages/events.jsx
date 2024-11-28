import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Background from '../components/background';
const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('http://localhost:8000/events');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.statusText}`);
        }

        const data = await response.json();  
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading Events...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading events: {error}</div>;
  }

  return (
    <>
    <Background />

    <div className="wrapper">
      <Navbar />
      <h2 className="text-2xl font-semibold mb-6">All Events</h2>
      
      {events.map((event, index) => (
        <div key={index} className="event border border-gray-300 rounded-lg p-5 mb-6 shadow-md">
          <h3 className="event-title text-xl font-bold mb-3">{event.name}</h3>
          <p className="mb-3">{event.description}</p>
          <p className="mb-3"><strong>Location:</strong> {event.location}</p>
          <p className="mb-3"><strong>Date:</strong> {event.date}</p>
          {event.image && (
            <img
              src={event.image}
              alt={event.name} 
              className="event-image w-full h-auto rounded-lg mt-3"
            />
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default Events;
