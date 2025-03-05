import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Home';
import AboutPage from './components/AboutPage/about';
import ContactPage from './components/ContactPage/contact';
import GalleryPage from './components/Gallery/Gallery';
import Conference from './components/Conference/conference';
import Events from './components/Events/event';
import Eventsa from './components/Events1/eventsa';
import Newconference from './components/Events2/conference1';
import Newconference1 from './components/Events3/conference2';
import Newconference2 from './components/Events4/conference3';
import Newevents from './components/Events5/newevent';
import Homeconference from './components/Newconference/newconference1/newconference1';
import Homeconference1 from './components/Newconference/newconference2/newconference2';
import Homeconference2 from './components/Newconference/newconference3/newconference3';
import StripePay from './components/payment/Stripe';
import Theosym from './components/NewEvents/theosym';
import ChatbotIcon from './components/chatbot/chatbot';
import Footer from './components/Footer/footer';
import Register from './components/Register/register';
import Events6 from './components/Events6/event6';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/inside" element={< Newconference />} />
          <Route path="/inside1" element={< Newconference1 />} />
          <Route path="/inside2" element={< Newconference2 />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events1" element={<Eventsa/>} />
          <Route path="/newevents" element={<Newevents />} />
          <Route path="/newconference" element={<Homeconference />} />
          <Route path="/newconference1" element={<Homeconference1 />} />
          <Route path="/newconference2" element={<Homeconference2 />} />
          <Route path="/pay/:amount/:description" element={<StripePay />} />
          <Route path="/theosym" element={<Theosym />} />
          <Route path="/chatbot" element={<ChatbotIcon />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/3rd-event" element={<Events6 />} /> 
        </Routes>
    </Router>
  );
}

export default App;
