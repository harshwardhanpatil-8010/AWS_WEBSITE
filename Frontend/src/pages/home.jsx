import ContactUs from "../components/contact.jsx";
const Home = () => {
    
return(
    <div className="relative min-h-screen inset-0 overflow-hidden h-full w-full items-center px-5 py-24 [background:linear-gradient(125deg,#005276,#38ef7d)]">
       <h1 className="text-2xl text-center mb-6">Home Page</h1>
        <ContactUs/>
    </div>
   
);
}
export default Home;