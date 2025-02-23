import React, { useState } from 'react';
import { BsLinkedin } from "react-icons/bs";


const Card = ({ id, imgSrc, linkedinLink, onHover, isActive }) => (
  <div 
    className={`absolute w-[220px] sm:w-[320px] h-[275px] sm:h-[385px] rounded-xl shadow-2xl transition-all duration-500 ease-in-out cursor-pointer 
    hover:shadow-[0_20px_50px_rgba(72,_85,_99,_0.7)] bg-gradient-to-br from-[#1a2332] to-[#0f1623]
    ${isActive ? 'z-[3]' : ''}`}
    id={id}
    onClick={() => onHover(id)}
    onMouseEnter={() => onHover(id)}
  >
    <img className="w-full h-[210px] sm:h-[320px] rounded-t-xl object-cover" src={imgSrc} alt="Profile" />
    <div className="flex justify-end items-center py-4 px-6 bg-gradient-to-r from-[#1a2332] to-[#0f1623] rounded-b-xl">
      {linkedinLink && (
        <a 
            href={linkedinLink} 
            target="_blank" 
            rel="noopener noreferrer"  
            aria-label="LinkedIn Profile"
            className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-400"
        >
          <BsLinkedin className="w-6 h-6 sm:w-12 sm:h-12 text-white"/>
        </a>
      )}
    </div>
  </div>
);

const CardComponent = ({ cardsData }) => {
  const [activeCard, setActiveCard] = useState('card1');
  
  const handleHover = (id) => {
    setActiveCard(id);
  };
  
  const currentCardText = activeCard 
    ? cardsData.find(card => card.id === activeCard)?.text 
    : cardsData[0]?.text || "";

  return (
    <div className="container mx-auto px-4">
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-32 xl:gap-64">
        <div className="relative w-[220px] sm:w-[320px] h-[290px] sm:h-[400px] flex justify-center items-center">
          {cardsData.length > 0 ? (
            cardsData.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                imgSrc={card.imgSrc}
                linkedinLink={card.linkedinLink}
                onHover={handleHover}
                isActive={activeCard === card.id}
              />
            ))
          ) : (
            <p className="text-white font-semibold text-xl">No cards to display</p>
          )}
        </div>
        <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px] xl:w-[650px] xl:-ml-16">
          <div className={`w-full min-h-[290px] sm:min-h-[380px] xl:min-h-[450px] p-4 sm:p-6 md:p-8 border-2 border-blue-400 rounded-2xl 
            text-white text-lg sm:text-xl font-medium flex items-center justify-center
            shadow-lg transform transition-all duration-500
            hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}>
            <div className="w-full break-words text-center py-4">
              {currentCardText}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #card1 {
          transform: ${activeCard === 'card1' ? 'translateX(0) translateY(0) scale(1.1)' : 'translateX(0) translateY(0)'};
          z-index: ${activeCard === 'card1' ? 3 : 2};
          transition: all 0.5s ease-in-out;
        }
        
        #card2 {
          transform: ${activeCard === 'card2' ? 'translateX(-20px) translateY(15px) scale(1.1)' : 'translateX(-20px) translateY(15px)'};
          z-index: ${activeCard === 'card2' ? 3 : 1};
          transition: all 0.5s ease-in-out;
        }
        
        #card3 {
          transform: ${activeCard === 'card3' ? 'translateX(20px) translateY(15px) scale(1.1)' : 'translateX(20px) translateY(15px)'};
          z-index: ${activeCard === 'card3' ? 3 : 1};
          transition: all 0.5s ease-in-out;
        }
        
        @media (min-width: 640px) {
          #card2 {
            transform: ${activeCard === 'card2' ? 'translateX(-30px) translateY(15px) scale(1.1)' : 'translateX(-30px) translateY(15px)'};
          }
          
          #card3 {
            transform: ${activeCard === 'card3' ? 'translateX(30px) translateY(15px) scale(1.1)' : 'translateX(30px) translateY(15px)'};
          }
        }
      `}</style>
    </div>
  );
};

export default CardComponent;