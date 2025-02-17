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
       const response = await fetch('http://localhost:8000/events');
 
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
   return <div className="text-center text-gray-600">Loading Events...</div>;
 }
 
 if (error) {
   return (
     <div className="text-center text-red-600">Error loading events: {error}</div>
   );
 }
 
 return (
   <>
     <Background />
     <div className="wrapper">
       {/* Navbar */}
       <div className="bg-gradient-to-br from-inherit to-black sticky top-0 z-50 backdrop-blur-sm mt-4">
         <Navbar />
       </div>
 
       <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
         <h2 className="text-2xl font-semibold mb-6">All Events</h2>
 
         {/* Bento Grid Layout */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {events.map((event, index) => (
             <div
               key={event._id}
               className={` overflow-hidden event-card border-slate-300 rounded-3xl border-2 text-white p-4 mb-6 shadow-md cursor-pointer text-center backdrop-blur-2xl  backdrop-brightness-50 hover:scale-110 hover:shadow-2xl hover:p-8 hover:backdrop-blur-sm max-h-200 min-h-50 h-140 max-w-120 w-80 min-w-20  "}`}
               onClick={() => navigate(`/events/${event._id}`)}
               style={{
                 backgroundColor: index % 2 === 0 ? "#f8f8f8" : "#eeeeee",
               }}
             >
               {event.coverImage && (
                 <img
                   src={event.coverImage}
                   alt={event.name}
                   className="event-image  w-4/5 h-40 object-cover rounded-3xl mb-4 border-black border-2"
                 />
               )}
 
               <h3 className="text-xl md:text-2xl font-bold">{event.name}</h3>
               <p className="text-gray-500 text-sm">
                 {new Date(event.date).toLocaleDateString()}
               </p>
               <p className="text-gray-700 mt-2">{event.description}</p>
 
               {/* Hover Effect */}
               <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
