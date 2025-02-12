import Navbar from "../components/navbar.jsx";
import Background from "../components/background.jsx";
import FAQPage from "../components/faq.jsx";
import Landing from "../components/landing.jsx";
import Perks from "../components/perks.jsx";
import LowerSection from "../components/Footer_low.jsx";
import img1 from "../assets/5.png";

const Home = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Landing />

      <main className="w-full mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="space-y-20 mt-32">
    
          <div className="flex flex-col md:flex-row items-center md:items-start gap-x-16 hover:transform hover:scale-[1.02] transition-all duration-500">
   
            <img
              src={img1}
              alt="Illustration of AWS Cloud Clubs"
              className="w-[300px] md:w-[400px] min-w-[300px] object-contain mt-6 md:mt-32 drop-shadow-[0_0_35px_rgba(59,130,246,0.3)] leading-none"
            />

            {/* About Us Content */}
            <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl rounded-3xl p-10 hover:bg-black/60 transition-all duration-500 flex-1 shadow-2xl border border-gray-700/40 transform hover:-translate-y-2 ">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 animate-gradient">
                About Us
              </h2>
              <p className="text-2xl leading-relaxed text-gray-100 font-light tracking-wide">
                We are part of the global AWS Cloud Clubs initiative by the Academic Advocacy team of Amazon Web Services (AWS), uniting students across disciplines at MIT-WPU, Pune. Our mission is to empower learners with AWS cloud skills, fostering innovation and holistic growth through technical learning, leadership, and creativity, shaping the future of cloud computing.
              </p>
            </div>
          </div>

          {/* What We Stand For Section - Below About Us */}
          <div className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl rounded-3xl p-10 hover:bg-black/60 transition-all duration-500 shadow-2xl border border-gray-700/40 transform hover:-translate-y-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 animate-gradient">
              What We Stand For
            </h2>
            <p className="text-2xl leading-relaxed text-gray-100 font-light tracking-wide">
              Established in February 2024, the AWS Cloud Clubs at MIT-WPU transcends departmental boundaries to bring together a diverse community of learners and innovators. We aim to empower students with technical expertise in AWS cloud technologies while fostering essential skills in areas like event management, sponsorship, marketing, and more.
            </p>
          </div>
        </div>

        <div className="mt-32">
          <Perks />
        </div>

        <div className="py-24 md:py-32 rounded-3xl">
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
