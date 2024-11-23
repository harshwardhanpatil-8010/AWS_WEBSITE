import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Newsletters from "./pages/newsletter.jsx";
import Events from "./pages/events.jsx";
import Team from "./pages/domain.jsx";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Newsletters />} />
          <Route path="/events" element={<Events />} />
          <Route path="/domain" element={<Team />} />
        </Routes>
      </Router>
  
  );
}

export default App;
