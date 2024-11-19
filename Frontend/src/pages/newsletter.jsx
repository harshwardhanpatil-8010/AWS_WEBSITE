import React, { useState, useEffect } from 'react';

const Newsletters = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsletters() {
      try {
        const response = await fetch('http://localhost:8000/newsletters');
        if (!response.ok) throw new Error(`Failed to fetch newsletters: ${response.statusText}`);
        
        const data = await response.json();
        setNewsletters(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchNewsletters();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading newsletters...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading newsletters: {error}</div>;
  }

  return (
    <div className="relative min-h-screen inset-0 overflow-hidden h-full w-full justify-center items-center px-5 py-24 [background:linear-gradient(125deg,#005276,#38ef7d)]">
      
      <h2 className="text-2xl font-semibold mb-4">All Newsletters</h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsletters.map(newsletter => (
          <div
            className="border border-gray-300 rounded-lg p-4 shadow-md bg-white"
            key={newsletter.id}
          >
            <h3 className="text-xl font-bold mb-2">{newsletter.title}</h3>
            <p className="text-gray-800 mb-4">{newsletter.content}</p>
            {newsletter.imageUrl && (
              <img
                src={newsletter.imageUrl}
                className="w-full h-auto rounded-lg mb-4"
                alt="Newsletter"
              />
            )}
            <p className="text-gray-500 text-sm">
              Updated on: {new Date(newsletter.updatedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletters;
