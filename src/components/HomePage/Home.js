import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import neologo from './neologo.png'; 
import conferenceImage from './image.png';
import newconferenceone from './newimageone.png';
import conferenceImageone from './imageone.png';
import newconferenceImage from './newimage.png';
import logo from './neo conference logo.jpg';
import ChatbotIcon from '../chatbot/chatbot';
import Footer from '../Footer/footer';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const searchableItems = [
    { keyword: 'home', path: '/' },
    { keyword: 'about', path: '/about' },
    { keyword: 'events', path: '/conference' },
    { keyword: 'gallery', path: '/gallery' },
    { keyword: 'contact', path: '/contact' },
  ];

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const match = searchableItems.find(item => item.keyword === lowerCaseSearchTerm);

    if (match) {
      navigate(match.path);
    } else {
      const fuzzyMatch = searchableItems.find(item => 
        item.keyword.includes(lowerCaseSearchTerm)
      );

      if (fuzzyMatch) {
        navigate(fuzzyMatch.path);
      } else {
        alert(`No results found for "${searchTerm}".`);
      }
    }
  };

  const scrollRef = useRef(null);

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" aria-label="Homepage">
            <img src={logo} alt="NEO Conferences Logo" className="logo-image" />
          </Link>
        </div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li><Link to="/" aria-label="Home">Home</Link></li>
          <li><Link to="/about" aria-label="About Us">About Us</Link></li>
          <li><Link to="/conference" aria-label="Events">Events</Link></li>
          <li><Link to="/gallery" aria-label="Gallery">Gallery</Link></li>
          <li><Link to="/contact" aria-label="Contact Us">Contact Us</Link></li>
        
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            aria-label="Search" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <button onClick={handleSearch} aria-label="Search Button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>

      {/* Video Section */}
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src={require('../images/NeoVideo.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-overlay">
          <h1>NEO CONFERENCES</h1>
          <h3>V3’s: Vibrant Expression, Verified Influence, and Visionary Insight</h3>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            NEO Global Conferences is dedicated to advancing knowledge, fostering collaboration, 
            and driving impactful innovation across various fields including research, leadership, and technology.  
            We champion the V3’s: Vibrant Expression, Verified Influence, and Visionary Insight, creating a dynamic platform where these principles can thrive.
            <br /><br />
            Our conferences are designed to feature leading experts, researchers, authors, entrepreneurs,  
            and thought leaders who share their cutting-edge insights and verified knowledge. Whether held virtually or in person,  
            our events offer a dynamic environment where professionals can explore new ideas, engage with breakthrough research, 
            and collaborate with peers to drive progress and innovation.
          </p>
          <Link to="/about" className="read-more-button">Read More</Link>
        </div>
      </div>


      {/* Conferences Section */}
      <h1 className="upcoming-conferences-heading">Our Upcoming Conferences</h1>
      <div className="conference-section">
        <div className="conference-container">
          <img src={conferenceImage} alt="Women Leaders Summit in Paris" className="conference-main-image" />
          <div className="conference-details">
            <h3>3rd Global Women Power Summit on the Dynamics of Leadership</h3>
            <p>Women's Voices, Women's Power: Toward a Vision of Women Leadership</p>
            <div className="conference-dates">
              {[
                { image: newconferenceImage, date: 'March 5-6, 2025 | Paris, France', link: '/newconference' },
                { image: newconferenceImage, date: 'May 7-8, 2025 | Toronto, Canada', link: '/newconference1' },
                { image: newconferenceImage, date: 'July 23-24, 2025 | London, UK', link: '/newconference2' }
              ].map((item, index) => (
                <div className="conference-date" key={index}>
                  <Link to={item.link}>
                    <img src={item.image} alt={item.date} />
                    <p>{item.date}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="conference-container">
          <img src={conferenceImageone} alt="Psychiatry Summit in Paris" className="conference-main-image" />
          <div className="conference-details">
            <h3>3rd Global Summit on Psychiatry, Mental Health, and Neuroscience</h3>
            <p>Unlocking the Power of Global Mental Health: From Awareness to Action</p>
            <div className="conference-dates">
              {[
                { image: newconferenceone, date: 'March 05-06, 2025 | Paris, France', link: '/inside2' },
                { image: newconferenceone, date: 'May 7-8, 2025 | Toronto, Canada ', link: '/inside1' },
                { image: newconferenceone, date: 'July 23-24, 2025 | London, UK', link: '/inside' }
              ].map((item, index) => (
                <div className="conference-date" key={index}>
                  <Link to={item.link}> 
                    <img src={item.image} alt={item.date} />
                    <p>{item.date}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experts Section */}
      <h1 className="experts-heading">Meet Our Experts</h1>
      <div className="experts-wrapper">
        <button className="scroll-btn left" onClick={scrollPrev}>&#8592;</button>
        <div className="experts-section" ref={scrollRef}>
          {[
            { src: require('../images/speaker7.png') },
            { src: require('../images/speaker1.png') },
            { src: require('../images/speaker0.png') },
            { src: require('../images/speaker2.png') },
            { src: require('../images/speaker5.png') },
            { src: require('../images/speaker10.png')}
          ].map((expert, index) => (
            <div className="expert-card" key={index}>
              <img src={expert.src} alt={expert.alt} className="expert-image" />
              <p className="expert-name">{expert.alt}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollNext}>&#8594;</button>
      </div>

      <div className="custom-container">
          <h1 className="custom-title">Join us to meet Inspiring Speakers & Experts across the Globe</h1>
          <div className="custom-stats">
              {["300+", "120+", "120+", "60+"].map((num, index) => (
                  <div className={`custom-stat custom-stat-${index + 1}`} key={index}>
                      <span className="custom-number">{num}</span>
                      {["Global Events", "Symposiums", "Workshops", "Conferences"][index]}
                  </div>
               ))}
          </div>
        </div>

         <Footer/>
         <ChatbotIcon/>      

    </div>
  );
};

export default HomePage;