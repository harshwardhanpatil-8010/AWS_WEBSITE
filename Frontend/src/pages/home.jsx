//import ContactUs from "../components/contact.jsx";
import Footer from "../components/contact.jsx";
//import Card from "../components/card.jsx";
import Navbar from "../components/navbar.jsx";
import Background from "../components/background.jsx";

import FAQPage from "../components/faq.jsx";
import Landing from "../components/landing.jsx";
const Home = () => {
  return (
      <>
      <Background />
      <div className="wrapper">
      <Navbar />
      <Landing />
     
       {/* <Card/>     */}
     {/* <ContactUs />  */}
     <FAQPage />
       <Footer /> 
     </div>
     </>
  );
};
export default Home;
