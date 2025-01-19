import React, { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Card = ({ id, imgSrc, githubLink, emailLink, linkedinLink, onHover }) => (
  <div
    className={`absolute lg:w-[320px] lg:h-[385px] md:h-[200px] md:w-[320px] sm:h-[100px] sm:w-[280px]
      w-18 h-8 bg-white
      rounded-xl shadow-2xl transition-all duration-500 cursor-pointer 
    hover:scale-110 hover:shadow-[0_20px_50px_rgba(72,_85,_99,_0.7)] z-[1] bg-gradient-to-br from-gray-900 to-gray-800`}
    id={id}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    <img
      className="w-full h-[320px] rounded-t-xl object-cover"
      src={imgSrc}
      alt="Profile"
    />
    <div className="flex justify-evenly items-center py-4 bg-gradient-to-r from-gray-700 to-gray-500 rounded-b-xl">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-400"
        >
          <FaGithub className="w-12 h-12 text-white" />
        </a>
      )}
      {emailLink && (
        <a
          href={emailLink}
          aria-label="Send Email"
          className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-400"
        >
          <BsLinkedin className="w-12 h-12 text-white" />
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
          <IoMailOutline className="w-12 h-12 text-white" />
        </a>
      )}
    </div>
  </div>
);

const CardComponent = ({ cardsData }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => setHoveredCard(id);

  const currentCardText = hoveredCard
    ? cardsData.find((card) => card.id === hoveredCard)?.text
    : cardsData[0]?.text || "No cards available";

  return (
    <div className="overflow-x-hidden flex items-center justify-center h-screen">
      <div className="flex flex-wrap mx-auto justify-center sm:justify-center  items-start gap-[500px]">
        <div className="relative flex justify-center items-center max-[1216px]:w-full">
          {cardsData.length > 0 ? (
            cardsData.map((card) => (
              <Card
                key={card.id}
                {...card}
                onHover={handleHover}
                className="w-full sm:w-[250px] sm:h-[350px] md:w-[300px] lg:w-3/5 xl:w-full flex items-center justify-center"
              />
            ))
          ) : (
            <p className="text-white font-semibold text-xl">
              No cards to display
            </p>
          )}
        </div>
        {/* max-[1000px]:w-2/3 */}
        {/* <div className="flex items-center justify-center min-h-screen w-full"> */}
          <div
            className="w-[400px] h-[380px] p-8 border-2 border-blue-400 rounded-2xl 
          text-white text-xl font-medium max-[1216px]:w-full  
            flex items-center justify-center shadow-lg 
          xl:w-[600px] xl:h-[320px]
            lg:w-[600px] lg:h-[320px] 
    md:w-[600px] md:h-[280px] 
    sm:w-[350px] sm:h-[240px] 
    max-sm:w-[50%] max-sm:h-auto max-sm:mx-auto 
    {/* max-[546]:ml-20 */}
          transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
          
          
          "
          >
            {currentCardText}
          </div>
        {/* </div> */}
        {/* sm:content-center max-[640px]:absolute max-[640px]:left-1/2 max-[640px]:translate-x-[-50%] */}
        <style>
          {`
          #card1 {
            top: 0;
            left: 85px;
            z-index: 2;
          }
          
          #card2 {
            top: 15px;
            left: 35px;
            z-index: 1;
          }
          
          #card3 {
            top: 15px;
            left: 135px;
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
        `}
        </style>
      </div>
    </div>
  );
};

export default CardComponent;