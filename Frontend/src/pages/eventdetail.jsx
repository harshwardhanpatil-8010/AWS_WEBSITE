import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Background from '../components/background';
import CloudAnimation from '../components/cloud-animation';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

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
        if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [eventId]);

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
      <CloudAnimation />

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="wrapper min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
      >
        <button 
          onClick={() => navigate(-1)}
          className="text-white m-4 py-2 px-6 rounded-full border-2 border-white shadow-lg hover:bg-white hover:text-blue-500 transition duration-300 flex items-center"
        >
          <IoMdArrowRoundBack size={20} className="mr-2" /> Back
        </button>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7 }}
          className="bg-slate-600/20 backdrop-blur-sm rounded-lg shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-5xl mx-auto"
        >
          {event.coverImage && (
            <motion.img 
              src={event.coverImage} 
              alt={event.name} 
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
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
                  <motion.li 
                    key={index} 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {speaker.image && <img src={speaker.image} alt={speaker.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-3" />}
                    <p className="text-white">{speaker.name}</p>
                    <p className="text-gray-300 text-sm">{speaker.designation}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {event.eventImages?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{ delay: 2000 }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full max-w-4xl"
              >
                {event.eventImages.map((image, index) => (
                  <SwiperSlide key={index} className="w-64">
                    <img src={image} alt={`Event ${index + 1}`} className="w-full h-40 object-cover rounded-lg shadow-md" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {event.topicsCovered?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4" whileHover={{ scale: 1.05, color: "#fff" }}>Summary</h3>
              <ul className="list-disc list-inside text-gray-300">
                {event.topicsCovered.map((topic, index) => (
                  <motion.li 
                    key={index}
                    
                  >
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {event.registrationLink && (
            <div className="flex justify-center mt-4">
              <motion.button
                className="text-white py-2 px-6 rounded-full border-2 border-white shadow-lg hover:bg-white hover:text-blue-500 transition duration-300"
                onClick={() => window.open(event.registrationLink, "_blank", "noopener noreferrer")}
                whileHover={{ scale: 1.1 }}
              >
                Claim Your Spot
              </motion.button>
            </div>
          )}    

        </motion.div>
      </motion.div>
    </>
  );
};

export default EventDetails;