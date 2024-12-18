import React from 'react';

const Landing = () => {
  return (
    <div className="bg-gradient-to-b mt-6 from-gray-100 to-gray-200">
  
    
        <div className="relative h-[400px] mb-0 overflow-hidden w-full">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1667984390527-850f63192709?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cloud Background"
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            <div className="absolute"></div>
          </div>
          
  
          <div className="relative z-10 flex items-center justify-center h-full select-none">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
                Amazon Web Services
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-800">
                Cloud Clubs
              </h2>
            </div>
          </div>
        </div>
        

        

          
        
      </div>
    
  );
};

export default Landing;