import React from 'react';
import img from "../assets/cloud-unscreen.gif";

const CloudAnimation = () => {
  return (
    <>
      <div className="animated-background"></div>
      
      <style>
        {`
          .animated-background {
            position: fixed;
            top: 30px;
            right: 10px;
            width: 10vw;
            height: 6vw;
            background: url(${img}) no-repeat center;
            background-size: contain;
            z-index: -1;
            animation: cloudMove 60s linear infinite;
          }

          @keyframes cloudMove {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-10vw); /* Moves left */
            }
          }

          /* Extra small devices (phones, 600px and down) */
          @media only screen and (max-width: 600px) {
            .animated-background {
              width: 20vw;
              top:0;
              right : 5;
              height: 26vw;
            }
          }

          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) and (max-width: 900px) {
            .animated-background {
              width: 15vw;
              height: 16vw;
              top:0;
              right : 5;
            }
          }

          /* Medium devices (landscape tablets, 900px and up) */
          @media only screen and (min-width: 900px) and (max-width: 1200px) {
            .animated-background {
              width: 12vw;
              height: 10vw;
            }
          }

          /* Large devices (laptops/desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            .animated-background {
              width: 10vw;
              height: 6vw;
            }
          }
        `}
      </style>
    </>
  );
};

export default CloudAnimation;