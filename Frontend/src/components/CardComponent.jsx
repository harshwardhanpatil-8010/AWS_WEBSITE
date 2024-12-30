// CardComponent.js
import React, { useState } from 'react';
import { IoMailOutline } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub  } from "react-icons/fa";

const Card = ({ id, imgSrc, githubLink, emailLink, linkedinLink, onHover }) => (
  <div 
    className={`absolute w-[300px] h-[365px] rounded-lg bg-gray-800 shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 z-[1]`}
    id={id}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    <img className="w-full h-[300px] rounded-t-lg" src={imgSrc} alt="Profile" />
    <div className="flex justify-evenly items-center py-2 bg-white rounded-b-lg">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub src="./github.png" alt="GitHub" className="w-11 h-11"/>
        </a>
      )}
      {emailLink && (
        <a href={emailLink} aria-label="Send Email">
          <BsLinkedin src="./mail.png" alt="Email" className="w-11 h-11"/>
        </a>
      )}
      {linkedinLink && (
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <IoMailOutline  src="./linkedin.png" alt="LinkedIn" className="w-11 h-11"/>
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
    <div className="flex flex-wrap justify-between items-start gap-[450px] mt-12">
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
      <div className="w-[560px] h-[360px] p-5 border border-gray-300 bg-gradient-to-r text-white text-lg flex items-center justify-center">
        {currentCardText}
      </div>

        <style>
          {`/* Initial positions and overlapping */
              #card1 {
                top: 0;
                left: 75px;
                z-index: 2;
              }
              #card2:hover ~ #card1,
              #card3:hover ~ #card1 {
                z-index: 1; /* Center card moves below the hovered side card */
              }
              .icon {
                width: 44px;
                height: 44px;
              }

              #card2 {
                top: 10px;
                left: 30px;
                z-index: 1;
              }
              .card-icons {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                padding: 10px 0;
                border-radius: 0 0 10px 10px;
              }

              /* Hover effect for side cards */
              #card2:hover {
                z-index: 3; /* Left card moves to the top */
              }

              #card3:hover {
                z-index: 3; /* Right card moves to the top */
              }

              /* Lower the center card when a side card is hovered */
              #card2:hover ~ #card1,
              #card3:hover ~ #card1 {
                z-index: 1; /* Center card moves below the hovered side card */
              }

              #card3 {
                top: 10px;
                left: 120px;
                z-index: 1;
              }

              /* Hover effect only applies to the visible part of a card */
              .card:hover {
                z-index: 4; /* Bring the hovered card to the top */
                transform: scale(1.1); /* Slightly enlarge the card */
              }

              /* Enable hovering for all visible cards */
              .card {
                pointer-events: auto;
              }

              .card-photo {
                width: 100%;
                height: 300px;
              }`}
        </style>

    </div>
  );
};

export default CardComponent;
