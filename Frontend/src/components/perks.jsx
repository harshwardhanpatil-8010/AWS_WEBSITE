import React from 'react';


const perksData = [
  {
    image: "https://brandeps.com/logo-download/U/Udemy-logo-vector-02.svg", 
    perk: "Udemy License"
  },
  {
    image: "https://res.cloudinary.com/dcm2r44f3/image/upload/v1738424018/resume-review_hgh523.png", 
    perk: "Resume Review"
  },
  {
    image: "",  
    perk: ""
  },
  {
    image: "", 
    perk: ""
  }
];

function Perks() {
  return (
    <div className="mt-10 p-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Perks</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {perksData.map((perk, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-800 to-purple-800 p-4 shadow-lg rounded-lg text-center justify-between">
            <img
              src={perk.image} 
              alt={perk.perk}
              className="w-full h-54 rounded-xl object-cover"
            />
            <p className="text-2xl font-semibold text-[#dcdcec]">{perk.perk}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perks;
