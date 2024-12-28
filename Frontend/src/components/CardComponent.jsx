
// CardComponent.js
import React, { useState } from 'react';
import './CardComponent.css';

const Card = ({ id, imgSrc, githubLink, emailLink, linkedinLink, onHover }) => {
  return (
    <div 
      className="card" 
      id={id}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        className="card-photo"
        src={imgSrc}
        alt="Profile"
      />
      <div className="card-icons">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="GitHub" className="icon"/>
        </a>
        <a href={emailLink}>
          <img src="./mail.png" alt="Gmail" className="icon"/>
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src="./linkedin.png" alt="LinkedIn" className="icon"/>
        </a>
      </div>
    </div>
  );
};

const CardComponent = ({ cardsData }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const currentCardText = hoveredCard ? cardsData.find(card => card.id === hoveredCard).text : cardsData[0].text;

  return (
    <div className="card-container">
      <div className="cards">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imgSrc={card.imgSrc}
            githubLink={card.githubLink}
            emailLink={card.emailLink}
            linkedinLink={card.linkedinLink}
            onHover={handleHover}
          />
        ))}
      </div>
      <div className="info-box">
        {currentCardText}
      </div>
    </div>
  );
};

export default CardComponent;
