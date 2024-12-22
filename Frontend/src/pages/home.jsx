import Footer from "../components/contact.jsx";
import Navbar from "../components/navbar.jsx";
import Background from "../components/background.jsx";
import FAQPage from "../components/faq.jsx";
import Landing from "../components/landing.jsx";
import Separator from "../components/separator.jsx";

const Home = () => {
  return (
    <>
      <Background />
      <div className="min-h-screen wrapper relative">
        <div className="bg-gradient-to-br from-inherit to-black sticky top-0 z-50 backdrop-blur-sm">
          <Navbar />
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 md:py-12">
            <Landing />
          </div>
          <Separator className="bg-gradient-to-r from-transparent via-gray-800 to-transparent h-[1px] w-full opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out" />
          <div className="py-12 md:py-16">
            <FAQPage />
          </div>
        </main>

        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
