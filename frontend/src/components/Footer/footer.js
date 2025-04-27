
import React from 'react';
import './footer.css';
import neologo from './neologo.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Contact Us Section */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Prospekt Gagarina, Nizhny Novgorod,
              Nizhegorodskaya oblast', Russia, 603022
            </p>
            <p>
              <i className="fas fa-envelope"></i> Email:{" "}
              <a href="mailto:contact@neoconferences.org">contact@neoconferences.org</a>
            </p>
            <p>
              <i className="fas fa-phone"></i> Phone:{" "}
              <a href="tel:+79968292105">+7 996 829-21-05</a>
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li className="arrow"><a href="#about">About Us</a></li>
              <li className="arrow"><a href="#events">Events</a></li>
              <li className="arrow"><a href="#contact">Contact Us</a></li>
              <li className="arrow"><a href="#terms">Terms & Conditions</a></li>
              <li className="arrow"><a href="#privacy">Privacy Policy</a></li>
              <li className="arrow"><a href="#grants">Grants</a></li>
            </ul>
          </div>

          {/* Events Section */}
          <div className="footer-column">
            <h3>Events</h3>
            <ul>
              <li className="arrow">3rd International Congress on Women's Health and Midwifery Excellence</li>
              <li className="arrow">3rd Global Congress on Women’s Leadership, Empowerment, and Sustainable Development</li>
              <li className="arrow">3rd International Congress of Women Changemakers and Visionary Leaders</li>
              <li className="arrow">3rd World Congress on Mindfulness, Psychology, and Spirituality</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-left-right">
          <div className="footer-left">
            <img src={neologo} alt="Neo Conferences Logo" className="footer-logo" />
            <span className="footer-logo-text">NEO CONFERENCES</span>
          </div>
          <div className="footer-right">
            <p>
              Copyright © 2024{" "}
              <a href="#" aria-label="Neo Conferences">Neo Conferences</a> – All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
