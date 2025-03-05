import React, { useState, useEffect } from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import ChatbotIcon from '../chatbot/chatbot';
import Footer from '../Footer/footer';

const imagesPromise = [
  require('../images/abstract.png'),
];
const imagesJourney = [
  require('../images/brochure.png'),
];
const imagesGallery = [
  require('../images/gallery.png'),
];

const aboutUsImage = require('../images/about.png'); 

const expertImages = [
  {
    image: require('../images/speaker0.png'),
  },
  {
    image: require('../images/speaker2.png'),
  },
  {
    image: require('../images/speaker7.png'),
  },
  {
    image: require('../images/speaker1.png'),
  },
  {
    image: require('../images/speaker5.png'),
  },
  {
    image: require('../images/speaker10.png'),
  }
];


const AboutPage = () => {
  const [currentImagePromise, setCurrentImagePromise] = useState(imagesPromise[0]);
  const [currentImageJourney, setCurrentImageJourney] = useState(imagesJourney[0]);
  const [currentImageGallery, setCurrentImageGallery] = useState(imagesGallery[0]);

  useEffect(() => {
    const intervalPromise = setInterval(() => {
      setCurrentImagePromise((prevImage) => {
        const currentIndex = imagesPromise.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imagesPromise.length;
        return imagesPromise[nextIndex];
      });
    }, 2000);

    const intervalJourney = setInterval(() => {
      setCurrentImageJourney((prevImage) => {
        const currentIndex = imagesJourney.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imagesJourney.length;
        return imagesJourney[nextIndex];
      });
    }, 2000);

    const intervalGallery = setInterval(() => {
      setCurrentImageGallery((prevImage) => {
        const currentIndex = imagesGallery.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imagesGallery.length;
        return imagesGallery[nextIndex];
      });
    }, 2000);

    return () => {
      clearInterval(intervalPromise);
      clearInterval(intervalJourney);
      clearInterval(intervalGallery);
    };
  }, []);

  return (
    <div>
      <div className="aboutpage">
        <div className="hero">
          <h1>ABOUT US</h1>
          <h4>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a> / <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
          </h4>
        </div>
      </div>

      <div className="aboutcard-container">
        <div className="aboutcard">
          <div className="card-image" style={{ backgroundImage: `url(${currentImagePromise})` }}></div>
          <div className="card-content">
            <h2>Abstract</h2>
            <p>Summarize the main points of your paper for the academic conference.</p>
          </div>
        </div>

        <div className="aboutcard">
          <div className="card-image" style={{ backgroundImage: `url(${currentImageJourney})` }}></div>
          <div className="card-content">
            <h2>Brochure</h2>
            <p>A tool to circulate information about a product or service.</p>
          </div>
        </div>

        <div className="aboutcard">
          <div className="card-image" style={{ backgroundImage: `url(${currentImageGallery})` }}></div>
          <div className="card-content">
            <h2><Link to="/gallery">Gallery</Link></h2>
            <p>Event galleries will be featured soon.</p>
          </div>
        </div>
      </div>
      <div className="about-us-container">
        <h1>About Us</h1>
        <h2>V3’s: Vibrant Expression, Verified Influence, and Visionary Insight</h2>
        <div className="about-us-content">
          <div className="about-us-text">
            <p>NEO Conferences is committed to empowering individuals and fostering collaboration in research, leadership, and innovation.</p>
            <p>We strive to curate conferences that feature prominent researchers, speakers, authors, entrepreneurs, and coaches.</p>
            <p>Our vision is to bring high-profile figures together on one stage, physically or virtually.</p>
            <p>At NEO Conferences, we believe in the power of connections and aim to facilitate meaningful relationships.</p>
          </div>
          <div className="about-us-image-container">
            <img src={aboutUsImage} alt="About Us" className="about-us-image" />
          </div>
        </div>
      </div>

      <div className="expert-section">
        <h1>Meet Our Expert Speakers</h1>
        <div className="expert-card-container">
          {expertImages.map((speaker, index) => (
            <div key={index} className="expert-card">
              <div
                className="expert-image"
                style={{ backgroundImage: `url(${speaker.image})` }}
              ></div>
              <div className="expert-name">
                <h3>{speaker.name}</h3>
              </div>
              <div className="expert-bio">
                <p>{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

         <div className="contact-section">
          <div className="contact-image" style={{ backgroundImage: `url(${require('./aboutbg.jpg')})` }}>
            <div className="contact-overlay">
              <h1>WE ARE HERE TO ANSWER YOUR </h1>
              <h1>QUESTIONS 24/7</h1>
              <a href="/contact" className="contact-button">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ChatbotIcon/>
    </div>
  );
};

export default AboutPage;
