import { useParams } from "react-router-dom";
import newslettersData from "../data/newslettersData";


const NewsletterPage = () => {
  const { slug } = useParams(); 
  const newsletter = newslettersData[slug]; 

  if (!newsletter) {
    return <h1 className="text-white text-center p-20">Newsletter Not Found</h1>;
  }

  return (
    <>
    
    <div className="bg-zinc-800 flex flex-col items-center p-20">
      <div className="text-white flex flex-col gap-7 w-3/4">
        
        <img src={newsletter.image} alt={newsletter.title} className="h-116 rounded-xl w-full" />

       
        <div className="px-2 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">{newsletter.title}</h1>
          <p className="text-sm text-gray-400">{newsletter.date}</p>
        </div>


        {newsletter.sections.map((section, index) => (
          <div key={index} className="px-2 flex flex-col gap-2 py-4 bg-zinc-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            {section.image && (
              <img src={section.image} alt="" className="w-3/5 p-7 rounded-lg mx-auto" />
            )}
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NewsletterPage;
