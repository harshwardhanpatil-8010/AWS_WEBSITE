import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsletters from "./pages/newsletter.jsx";
import Home from "./pages/home.jsx";
import Events from "./pages/events.jsx";
function App() {
  return (
<div>
    {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#005276_40%,#38ef7d_100%)]"> */}
 <Router>
 <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/news" element={<Newsletters />} />
   <Route path="/events" element={<Events />} />
 </Routes>
</Router>

</div>
  );
}

export default App;
