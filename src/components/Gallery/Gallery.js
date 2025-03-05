import React from 'react';
import './Gallery.css';
import neologo from '../HomePage/neologo.png'; 
// Add image imports (replace with your actual image paths)
import image1 from './neogallery.jpg';
import image2 from './neogallery1.jpg';
import image3 from './neogallery2.jpg';
import image4 from './neogallery3.jpg';
import image5 from './neogallery4.jpg';
import image6 from './neogallery5.jpg';
import ChatbotIcon from '../chatbot/chatbot';
import Footer from '../Footer/footer';

const GalleryPage = () => {
  return (
    <div className="gallery-container">
      {/* Header Section */}
      <div className="background-image">
        <div className="galleryoverlay">
          <h1>Gallery</h1>
          <h2>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a> / 
            <a href="/gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</a>
          </h2>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="image-gallery">
        <img src={image1} alt="Gallery Image 1" className="gallery-image" />
        <img src={image2} alt="Gallery Image 2" className="gallery-image" />
        <img src={image3} alt="Gallery Image 3" className="gallery-image" />
        <img src={image4} alt="Gallery Image 4" className="gallery-image" />
        <img src={image5} alt="Gallery Image 5" className="gallery-image" />
        <img src={image6} alt="Gallery Image 6" className="gallery-image" />
      </div>
        <Footer/>
        <ChatbotIcon/>
    </div>
  );
};

export default GalleryPage;
