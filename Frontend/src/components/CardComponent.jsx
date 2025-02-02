import React, { useState } from 'react';
import { IoMailOutline } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Card = ({ id, imgSrc, githubLink, emailLink, linkedinLink, onHover }) => (
  <div 
    className={`absolute w-[320px] h-[385px] rounded-xl shadow-2xl transition-all duration-500 cursor-pointer 
    hover:scale-110 hover:shadow-[0_20px_50px_rgba(72,_85,_99,_0.7)] z-[1] bg-gradient-to-br from-gray-900 to-gray-800`}
    id={id}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    <img className="w-full h-[320px] rounded-t-xl object-cover" src={imgSrc} alt="Profile" />
    <div className="flex justify-evenly items-center py-4 bg-gradient-to-r from-gray-700 to-gray-500 rounded-b-xl">
      {githubLink && (
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
          className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-400"
        >
          <FaGithub className="w-12 h-12 text-white"/>
        </a>
      )}
      {emailLink && (
        <a 
          href={emailLink} 
          aria-label="Send Email"
          className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-400"
        >
          <BsLinkedin className="w-12 h-12 text-white"/>
        </a>
      )}
      {linkedinLink && (
        <a 
          href={linkedinLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
          className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-400"
        >
          <IoMailOutline className="w-12 h-12 text-white"/>
        </a>
      )}
    </div>
  </div>
);

const CardComponent = ({ cardsData }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const handleHover = (id) => setHoveredCard(id);
  
  const currentCardText = hoveredCard 
    ? cardsData.find(card => card.id === hoveredCard)?.text 
    : cardsData[0]?.text || "No cards available";

  return (
    <div className="container mx-auto px-4">
      <div className="w-full flex flex-col xl:flex-row xl:justify-center items-center gap-12 xl:gap-4">
        <div className="relative w-full max-w-[600px] md:max-w-[700px] h-[400px] flex justify-center items-center">
          {cardsData.length > 0 ? (
            cardsData.map((card) => (
              <Card
                key={card.id}
                {...card}
                onHover={handleHover}
              />
            ))
          ) : (
            <p className="text-white font-semibold text-xl">No cards to display</p>
          )}
        </div>
        <div className="w-full max-w-[600px] md:max-w-[700px] xl:max-w-[650px] h-[380px] xl:h-[450px] p-8 border-2 border-blue-400 rounded-2xl 
           text-white text-xl font-medium 
          flex items-center justify-center shadow-lg transform transition-all duration-500
          hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          {currentCardText}
        </div>
      </div>
      <style>
        {`
          #card1 {
            transform: translateX(0);
            z-index: 2;
          }
          
          #card2 {
            transform: translateX(-50px) translateY(15px);
            z-index: 1;
          }
          
          #card3 {
            transform: translateX(50px) translateY(15px);
            z-index: 1;
          }
          
          #card2:hover,
          #card3:hover {
            z-index: 3;
          }
          
          #card2:hover ~ #card1,
          #card3:hover ~ #card1 {
            z-index: 1;
          }
          
          .card {
            pointer-events: auto;
            backface-visibility: hidden;
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            #card1 {
              transform: translateX(0);
            }
            
            #card2 {
              transform: translateX(-60px) translateY(15px);
            }
            
            #card3 {
              transform: translateX(60px) translateY(15px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CardComponent;