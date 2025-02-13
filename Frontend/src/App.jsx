import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Newsletters from "./pages/newsletter.jsx";
import Events from "./pages/events.jsx";
import Team from "./pages/domain.jsx";
import AdminPage from "./pages/Admin.jsx";
import EventDetails from './pages/eventdetail.jsx';
import NewsletterPage from "./components/Newsletter_page.jsx";

function App() {
  return (    
      <Router>
        <div class="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Newsletters />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route path="/domain" element={<Team />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/newsletter/:slug" element={<NewsletterPage/>} />
        </Routes>
        </div>

      </Router>
  );
}

export default App;
