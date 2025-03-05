import React, { useState } from 'react';
import './contact.css';
import ChatbotIcon from '../chatbot/chatbot';
import Footer from '../Footer/footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'phone') {
      const phonePattern = /^[0-9]{10}$/;
      if (value && !phonePattern.test(value)) {
        setStatus('Please enter a valid phone number.');
      } else {
        setStatus('');
      }
    } else {
      setStatus('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const phonePattern = /^[0-9]{10}$/; 
    if (formData.phone && !phonePattern.test(formData.phone)) {
      setStatus('Please enter a valid phone number.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/add-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const result = await response.json();
        setStatus(result.message || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contactpage">
        <div className="contacthero">
          <h1>CONTACT US</h1>
          <h4>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a> / <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
          </h4>
        </div>
      </div>

      <div className="contact-content">
        <div className="text-section">
          <h2>Office Addresses</h2>
          <p>Don't hesitate to reach us</p>
          <p><strong>Email:</strong> contact@neoconferences.org</p>
          <p><strong>Contact us at:</strong> +7 996 829-21-05</p>
          <h3>United States Office Address</h3>
          <p>Prospekt Gagarina, Nizhny Novgorod, Nizhegorodskaya oblast', Russia, 603022</p>
        </div>

        <div className="form-section">
          <h2>Leave a Message</h2>
          <p>We're ready to help you</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Feedback:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'SEND A MESSAGE →'}
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div> 
      <Footer/>
      <ChatbotIcon/>

    </div>
  );
}

export default ContactUs;
