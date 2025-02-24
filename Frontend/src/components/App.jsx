import React, { useState } from 'react';
import CardComponent from './CardComponent';
import { RiArrowRightSLine } from 'react-icons/ri';



function HeadsCard() {
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
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Event Operations3 info"
        }
      ]
    },
    {
      text: "Graphic Arts and Design",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Graphic Arts and Design member details"
        }
      ]
    },
    {
      text: "Social Media and Promotions",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Social Media and Promotions member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Social Media and Promotions info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Social Media and Promotions3 info"
        }
      ]
    },
    {
      text: "Editorial Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Editorial Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Editorial Team info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Editorial Team3 info"
        }
      ]
    },
    {
      text: "Finance Team Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Finance Team Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Finance Team Team info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Finance Team Team3 info"
        }
      ]
    },
    {
      text: "Sponsorship Team Team",
      cards: [
        {
          id: "card1",
          imgSrc: "./1.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event1@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "Sponsorship Team Team member details"
        },
        {
          id: "card2",
          imgSrc: "./2.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Sponsorship Team Team info"
        },
        {
          id: "card3",
          imgSrc: "./3.jpg",
          githubLink: "https://github.com",
          emailLink: "mailto:event2@gmail.com",
          linkedinLink: "https://linkedin.com",
          text: "More Sponsorship Team Team3 info"
        }
      ]
    }
  ];

  const handleClick1 = () => {
    if (!isDelayed) {
      setIsDelayed(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % domains.length);
        setIsDelayed(false);
      }, 1000);
    }
  };

  const handleClick2 = () => {
    if (!isDelayed) {
      setIsDelayed(true);
      setTimeout(() => {
        const newIndex = (currentIndex - 1 + domains.length) % domains.length;
        setCurrentIndex(newIndex);
        setIsDelayed(false);
      }, 1000);
    }
  };

  return (
   <div className="min-h-[600px] py-8 sm:py-12 md:py-16 flex flex-col items-center">
      <div className="w-full px-4 sm:px-6 md:px-0">
        <div className="flex flex-col items-center gap-4 text-white text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
          <p className="text-center break-words max-w-[250px] sm:max-w-[300px] md:max-w-none">
            {domains[currentIndex].text}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center relative">
        <button
          onClick={handleClick2}
          className="hidden sm:block absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition-transform p-2 z-10"
        >
          <RiArrowRightSLine size={35} className="rotate-180" />
        </button>
        <button
  onClick={handleClick1}
  className="hidden sm:block absolute right-24 sm:right-28 md:right-20 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition-transform p-2 z-10"
>
  <RiArrowRightSLine size={35} />
</button>
        <div className={`transition-all duration-500 ${isDelayed ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} w-full`}>
          <CardComponent cardsData={domains[currentIndex].cards} />
        </div>
        <div className="flex sm:hidden justify-center items-center gap-8 mt-8">
          <button
            onClick={handleClick2}
            className="text-white hover:scale-110 transition-transform p-2"
          >
            <RiArrowRightSLine size={35} className="rotate-180" />
          </button>
          <button
            onClick={handleClick1}
            className="text-white hover:scale-110 transition-transform p-2"
          >
            <RiArrowRightSLine size={35} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadsCard;