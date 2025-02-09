import { useNavigate } from "react-router-dom";
import newslettersData from "../data/newslettersData";
import Background from "../components/background";
import Navbar from "../components/navbar";
import LowerSection from "../components/Footer_low";

const Newsletters = () => {
  const navigate = useNavigate();

  return (
    <>
      <Background />

      <div className="min-h-screen flex flex-col">
        <div className="bg-gradient-to-br from-inherit to-black sticky top-0 z-50 backdrop-blur-sm ">
          <Navbar />
        </div>

        <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 pt-12">
            Newsletters
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {Object.keys(newslettersData).map((slug) => {
              const newsletter = newslettersData[slug];
              return (
                <div
                  key={slug}
                  className="border border-gray-300 rounded-lg shadow-lg bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => navigate(`/newsletter/${slug}`)}
                >
                  <div className="flex flex-col items-center p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{newsletter.title}</h3>
                    <img
                      src={newsletter.image}
                      className="w-full h-48 object-cover rounded-lg"
                      alt={newsletter.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <LowerSection />
    </>
  );
};

export default Newsletters;
