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

      <div className="min-h-screen flex flex-col ">
        {/* Navbar */}
        <div className="bg-black bg-opacity-70 backdrop-blur-md sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold text-center px-4 pt-12">
            Explore Our Newsletters
          </h1>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mt-4">
            Stay updated with the latest trends in technology, analytics, AI, and cloud computing.
          </p>

          {/* Newsletter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {Object.keys(newslettersData).map((slug) => {
              const newsletter = newslettersData[slug];
              return (
                <div
                  key={slug}
                  className="relative group bg-white border border-gray-700 rounded-xl shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  onClick={() => navigate(`/newsletter/${slug}`)}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <img
                      src={newsletter.image}
                      className="h-full w-full object-cover rounded-t-xl"
                      alt={newsletter.title}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {newsletter.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{newsletter.date}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {newsletter.sections[0]?.content || "Read more about this newsletter."}
                    </p>
                  </div>

                  {/* Overlay Read More Button */}
                  <div className="absolute bottom-0 left-0 w-full bg-blue-600 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all">
                    Read More →
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* Footer */}
        <LowerSection />
      </div>
    </>
  );
};

export default Newsletters;
