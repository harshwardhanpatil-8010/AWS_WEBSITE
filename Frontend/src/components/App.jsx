import React, { useState } from 'react';
import './App.css';
import CardComponent from './CardComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDelayed, setIsDelayed] = useState(false);

  const domains = [
    {
      text: "Technical Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:example1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Technical Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:example2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Technical info"
        }
      ]
    },
    {
      text: "Event Operations and Management",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Event Operations member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Event Operations info"
        }
      ]
    }
  ];

  const handleClick = () => {
    if (!isDelayed) {
      setIsDelayed(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % domains.length);
        setIsDelayed(false);
      }, 1000); // 1 second delay
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Domains</li>
          <li>Events</li>
          <li>Newsletters</li>
        </ul>
      </nav>
      
      <div className='top'>
        <p className='text'>Know Your Domain</p>
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
        <p>{domains[currentIndex].text}</p>
      </div>

      <FontAwesomeIcon className="next-icon" onClick={handleClick} icon={faArrowRight} />

      <div className="cards-container">
        <CardComponent cardsData={domains[currentIndex].cards} />
      </div>
    </div>
  );
}

export default App;
