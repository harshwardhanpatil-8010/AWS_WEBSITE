import { useParams } from "react-router-dom";
import newslettersData from "../data/newslettersData";

const NewsletterPage = () => {
  const { slug } = useParams();
  const newsletter = newslettersData[slug];

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-zinc-800 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold p-8 bg-red-500/10 rounded-lg border border-red-500/20">
          Newsletter Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-zinc-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <header className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {newsletter.title}
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        <div className="relative group">
          <img
            src={newsletter.image}
            alt={newsletter.title}
            rel="preload"
            className="w-full h-96 rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
        </div>

        <div className="grid gap-8">
          {newsletter.sections.map((section, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-zinc-800 hover:border-blue-500/30 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-blue-400 mb-6">
                {section.heading}
              </h2>

              {section.image && (
                <div className="my-6">
                  <img
                    src={section.image}
                    alt=""
                    className="w-full md:w-3/4 mx-auto rounded-xl shadow-lg "
                  />
                </div>
              )}

              <p className="text-gray-300 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
