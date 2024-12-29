// CardComponent.js
import React, { useState } from 'react';

const Card = ({ id, imgSrc, githubLink, emailLink, linkedinLink, onHover }) => (
  <div 
    className={`absolute w-[300px] h-[365px] rounded-lg bg-gray-800 shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 z-[1]`}
    id={id}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    <img className="w-full h-[300px] rounded-t-lg" src={imgSrc} alt="Profile" />
    <div className="flex justify-evenly items-center py-2 bg-gray-900 rounded-b-lg">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <img src="./github.png" alt="GitHub" className="w-11 h-11"/>
        </a>
      )}
      {emailLink && (
        <a href={emailLink} aria-label="Send Email">
          <img src="./mail.png" alt="Email" className="w-11 h-11"/>
        </a>
      )}
      {linkedinLink && (
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <img src="./linkedin.png" alt="LinkedIn" className="w-11 h-11"/>
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
    <div className="flex flex-wrap justify-between items-start gap-[250px] mt-12">
      <div className="relative flex gap-5">
        {cardsData.length > 0 ? (
          cardsData.map((card) => (
            <Card
              key={card.id}
              {...card}
              onHover={handleHover}
            />
          ))
        ) : (
          <p className="text-white">No cards to display</p>
        )}
      </div>
      <div className="w-[550px] h-[350px] p-5 border border-gray-300 bg-purple-700 text-white text-lg flex items-center justify-center">
        {currentCardText}
      </div>
    </div>
  );
};

export default CardComponent;
