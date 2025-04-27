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
import Homeconference3 from './components/Newconference/newconference4/newconference4';
import StripePay from './components/payment/Stripe';
import Theosym from './components/NewEvents/theosym';
import ChatbotIcon from './components/chatbot/chatbot';
import Footer from './components/Footer/footer';
import Register from './components/Register/register';
import Events6 from './components/Events6/event6';
import Newconference7 from './components/Events7/conference7';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/4th-International-Conference-on-Gender-Diversity-and-Transgender-Health" element={< Newconference />} />
          <Route path="/4th-International-conference-on-Mental-Health-Well-Being-and-Spiritual-Healing" element={< Newconference1 />} />
          <Route path="/4th-International-Congress-on-Womens-Health-and-Midwifery-Excellence" element={< Newconference2 />} />
          <Route path="/6th-World-Congress-on-Mindfulness,-Psychology,-and-Spirituality" element={<Newconference7 />} />
          <Route path="/International-Congress-on-Womens-Health-and-Midwifery-Excellence" element={<Events />} />
          <Route path="/4th-Global-Congress-on-Womens-Leadership-Empowerment-and-Sustainable-Development" element={<Eventsa/>} />
          <Route path="/4th-International-Congress-of-Women-Changemakers-and-Visionary-Leaders" element={<Newevents />} />
          <Route path="/5th-Global-Women-Power-Summit-on-the-Dynamics-of-Leadership" element={<Homeconference />} />
          <Route path="/4th-Global-Women-Power-Summit-on-the-Dynamics-of-Leadership" element={<Homeconference1 />} />
          <Route path="/6th-Global-Women-Power-Summit-on-the-Dynamics-of-Leadership" element={<Homeconference2 />} />
          <Route path="/7th-Global-Women-Power-Summit-on-the-Dynamics-of-Leadership" element={<Homeconference3 />} />
          <Route path="/pay/:amount/:description" element={<StripePay />} />
          <Route path="/theosym" element={<Theosym />} />
          <Route path="/chatbot" element={<ChatbotIcon />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Global-Congress-on-Womens-Leadership-Empowerment-and-Sustainable-Development" element={<Events6 />} /> 
        </Routes>
    </Router>
  );
}

export default App;
