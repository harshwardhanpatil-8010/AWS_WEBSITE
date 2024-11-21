 import ContactUs from "../components/contact.jsx";
const Home = () => {
    
return(
    <div className=" min-h-screen inset-0 overflow-hidden h-full w-full items-center px-5 py-24 [background:linear-gradient(1500deg,#0B0047,#2274D5)]">  
       {/* dark:bg-slate-900 */}
       <h1 className="text-2xl text-center mb-6">Home Page</h1>
  <ContactUs/> 
    </div>
   
);
}        
export default Home;