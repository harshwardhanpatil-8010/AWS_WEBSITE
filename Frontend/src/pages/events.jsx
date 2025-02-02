import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Background from '../components/background';
import LowerSection from '../components/Footer_low';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        
      <div className="bg-gradient-to-br from-inherit to-black sticky top-0 z-50 backdrop-blur-sm mt-4">
          <Navbar />
        </div>
        <main className='w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20'>
        <h2 className="text-2xl font-semibold mb-6">All Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="event-card border border-gray-300 rounded-lg text-white p-5 mb-6 shadow-md cursor-pointer"
              onClick={() => navigate(`/events/${event._id}`)}
            >
              {event.coverImage && (
                <img
                  src={event.coverImage}
                  alt={event.name}
                  className="event-image w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="event-title text-lg md:text-2xl sm:text-xl xl:text-3xl font-bold">{event.name}</h3>
              <p className='text-white'> {new Date(event.date).toLocaleDateString()}</p>
              <p>{event.description}</p>
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
