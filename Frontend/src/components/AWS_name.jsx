import { Typewriter } from "react-simple-typewriter";

const TypingEffect = () => {
  

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white text-4xl font-bold">
      
        <Typewriter
          words={["Amazon Web Services Cloud Clubs"]}
          loop={1} 
          typeSpeed={50}
 
        />
      
    </div>
  );
};

export default TypingEffect;
