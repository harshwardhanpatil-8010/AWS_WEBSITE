import { useParams } from "react-router-dom";
import newslettersData from "../data/newslettersData";

const NewsletterPage = () => {
  const { slug } = useParams();
  const newsletter = newslettersData[slug];

  if (!newsletter) {
    return <h1 className="text-white text-center p-20">Newsletter Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-zinc-800 text-white flex flex-col items-center py-12 px-4">
      

      <div className="max-w-4xl w-full text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{newsletter.title}</h1>
     
      </div>


      <div className="max-w-4xl w-full overflow-hidden rounded-xl shadow-xl mb-10">
        <img
          src={newsletter.image}
          alt={newsletter.title}
          className="w-full h-80 object-cover rounded-xl"
        />
      </div>


      <div className="max-w-3xl w-full flex flex-col gap-8">
        {newsletter.sections.map((section, index) => (
          <div key={index} className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400">{section.heading}</h2>

            {section.image && (
              <div className="flex justify-center my-4">
                <img
                  src={section.image}
                  alt=""
                  className="w-full md:w-3/4 rounded-lg shadow-md"
                />
              </div>
            )}


            <p className="text-gray-300 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsletterPage;
