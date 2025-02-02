
import Navbar from "../components/navbar.jsx";
import Background from "../components/background.jsx";
import FAQPage from "../components/faq.jsx";
import Landing from "../components/landing.jsx";
import Perks from "../components/perks.jsx";
import LowerSection from "../components/Footer_low.jsx";
import img1 from "../assets/5.png"
import img2 from "../assets/4.png"
import img3 from "../assets/cool dudes.png"
const Home = () => {
  return (
    <>
      <Background />
     
       
          <Navbar />
          <Landing />
         
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
          <br />
          
          <div className="text-white max-w-4xl mx-auto space-y-12 py-16">
          <img src={img1} alt="illustration1" className="h-[200px]"/>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300">
          
            
              <h2 className="text-3xl font-bold bg-gradient-to-r  from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
                About Us
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                We are part of the global AWS Cloud Clubs initiative by the Academic Advocacy team of Amazon Web Services (AWS), uniting students across disciplines at MIT-WPU,Pune. Our mission is to empower learners with AWS cloud skills, fostering innovation and holistic growth through technical learning, leadership, and creativity, shaping the future of cloud computing.
              </p>
            </div>
   
    <img src={img2} alt="" />
    <img src={img3} alt="" />
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 hover:bg-black/40 transition-all duration-300">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
                What We Stand For
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                Established in February 2024, the AWS Cloud Clubs, MIT-WPU, goes beyond departmental boundaries to bring together a diverse community of learners and innovators. We aim to empower students with technical expertise in AWS cloud technologies, while also offering opportunities to develop essential skills in areas like event management, sponsorship, marketing, and more.
              </p>
            </div>
          </div>
          <Perks/>
          <div className="py-16 md:py-24  rounded-xl">
            <FAQPage />
          </div>
        </main>

        <div className="mt-auto w-full">
        <LowerSection />
        </div>
      
    </>
  );
};

export default Home;
