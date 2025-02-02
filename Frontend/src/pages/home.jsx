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

      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 mt-20">
          {/* About Us Section with Image on Left */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-x-8">
            {/* Image - Aligned to Left */}
            <img
              src={img1}
              alt="Illustration of AWS Cloud Clubs"
              className="w-[200px] md:w-[250px] min-w-[200px] object-contain mt-6 md:mt-0"
            />

            {/* About Us Content */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300 flex-1">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                About Us
              </h2>
              <p className="text-lg leading-relaxed text-gray-200">
                We are part of the global AWS Cloud Clubs initiative by the Academic Advocacy team of Amazon Web Services (AWS), uniting students across disciplines at MIT-WPU, Pune. Our mission is to empower learners with AWS cloud skills, fostering innovation and holistic growth through technical learning, leadership, and creativity, shaping the future of cloud computing.
              </p>
            </div>
          </div>

          {/* What We Stand For Section - Below About Us */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              What We Stand For
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Established in February 2024, the AWS Cloud Clubs at MIT-WPU transcends departmental boundaries to bring together a diverse community of learners and innovators. We aim to empower students with technical expertise in AWS cloud technologies while fostering essential skills in areas like event management, sponsorship, marketing, and more.
            </p>
          </div>
        </div>

        <Perks />

        <div className="py-16 md:py-24 rounded-xl">
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
