import React, { useState, useEffect } from "react";
import './event6.css'; 
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import StripePay from "../payment/Stripe";
import { useNavigate } from "react-router-dom";
import ChatbotIcon from "../chatbot/chatbot";
import Footer from "../Footer/footer";
import Register from "../Register/register";
import file from "../images/Neo Brochure.pdf"

const Events = () => {
  const navigate=useNavigate()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedDay, setSelectedDay] = useState('day1'); 
  const handleclick1 = (amount, description) => {
    navigate(`/pay/${amount}/${encodeURIComponent(description)}`);
  };

  useEffect(() => {
    const eventDate = new Date('2025-03-05T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day1Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    
  ];

  const day2Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
  ];

  const day3Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    
  ];

  const day4Schedule = [
    { time: '08:00 – 08:30', speaker: 'Opening Ceremony', title: 'Opening Ceremony' },
    { time: '08:30 – 09:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '09:00 – 09:30', speaker: 'Speaker', title: 'The New Wave of Female Leadership' },
    { time: '09:30 – 10:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '10:00 – 10:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '10:30 – 11:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '11:00 – 11:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '11:30 – 12:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '12:00 – 12:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '12:30 – 13:00', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '13:00 – 14:00', speaker: 'Lunch Hour' },
    { time: '14:00 – 14:30', speaker: 'Keynote Speaker', title: 'Keynote Speaker Slot Available' },
    { time: '14:30 – 15:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:00 – 15:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '15:30 – 16:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:00 – 16:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '16:30 – 17:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:00 – 17:30', speaker: 'Speaker', title: 'Speaker Slot Available' },
    { time: '17:30 – 18:00', speaker: 'Speaker', title: 'Speaker Slot Available' },
  ];

  const schedule = selectedDay === 'day1' 
  ? day1Schedule 
  : selectedDay === 'day2' 
  ? day2Schedule 
  : selectedDay === 'day3' 
  ? day3Schedule 
  : selectedDay === 'day4'
  ? day4Schedule 
  : null;


  const handleBrochureDownload = () => {
    const link = document.createElement('a');
    link.href =file;
    link.download = '3rd-Global-Congress-on-Womens-Leadership-Brochure.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="rdeventsover">
        <div className="rdeventsoverlay-text">
          <h1>3rd Global Congress on Women’s Leadership, Empowerment, and Sustainable Development </h1> 
          <div className="rdevent-details">
            <div className="rdevent-date">
              <FaCalendarAlt className="rdicon" />
              <span>March 05-06, 2025</span>
            </div>
            <div className="rdevent-location">
              <FaMapMarkerAlt className="rdicon" />
              <span>Paris, France</span>
            </div>
          </div>
          <div className="rdbutton-group">
          <button 
            className="rdevent-button" 
            onClick={handleBrochureDownload}
          >
            Brochure
          </button>
            <button className="rdevent-button">Abstract</button>
          </div>
        </div>

        <div className="rdcountdown-container">
          <div className="rdcountdown-timer">
            <div className="rdtime-box">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="rdtime-box">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="rdtime-box">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="rdtime-box">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rdconference-details">
        <div className="imagerd-container">
          <img
            src={require('../images/conf.jpg')}
            alt="Conference"
          />
        </div>

        <div className="newtextrd-container">
          <h2>About the Conference</h2>
          <p>
          Join us for the 3rd Global Congress on Women’s Leadership, Empowerment, and Sustainable Development, hosted by Neo Conferences, on March 05-06, 2025, in Paris, France. This dynamic event offers a transformative platform for women from all walks of life to engage, collaborate, and drive progress on issues impacting their personal and professional spheres.
            <strong> "Women’s Voices, Women’s Power: Advancing Leadership and Sustainable Development," </strong>.
          </p>
          <p>
          The Congress aims to spark meaningful conversations on gender equality, economic empowerment, education, health, and political participation. This global forum serves as a catalyst for actionable change, empowering women to lead the way in building a more sustainable, inclusive future.
          </p>
          <p>
          Take this opportunity to elevate your voice on the world stage, connect with visionary leaders, and share your insights and success stories. By coming together, we can ignite impactful change and build a brighter, more equitable future for women everywhere. Don't miss out on being a part of this inclusive, innovative congress!
          </p>
        </div>
      </div>

      <div className="rdnewscientific-sessions">
        <h1>Sessions/Topics</h1>
        <div className="rdnewscientific-card-container">
          <div className="rdnewscientific-card">
            <h2> Women’s Leadership and Empowerment</h2>
            <ul>
              <li>Advancing Women’s Leadership in a Sustainable World</li>
              <li>Barriers to Women’s Leadership: Breaking Through with Sustainable Solutions</li>
              <li>Intersectionality in Women’s Leadership: Bridging Gaps for Inclusive Growth</li>
              <li>Men as Allies: Collaborative Approaches for Promoting Sustainable Women’s Leadership</li>
              <li>Women’s Leadership Styles: Nurturing Sustainable Organizational Change</li>
              <li>Mentorship and Sponsorship: Building Sustainable Leadership Pipelines</li>
              <li>The Impact of Women’s Leadership on Organizational Sustainability and Culture</li>
              <li>Women in Politics and Public Service: Leading Sustainable Policy Reforms</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Women in Innovation and Entrepreneurship</h2>
            <ul>
              <li>Women Entrepreneurs Leading Sustainable Innovation and Growth</li>
              <li>Building Sustainable Women’s Entrepreneurship Ecosystems </li>
              <li>Addressing Gender Bias for a More Inclusive Entrepreneurial Landscape </li>
              <li>Women-Led Startups: Pioneering Innovation for Sustainable Futures</li>
              <li>The Role of Venture Capital and Impact Investors in Supporting Women Entrepreneurs</li>
              <li>Bridging the Capital Divide: Enhancing Women’s Access to Markets and Networks</li>
              <li>Women Leaders in Tech and Emerging Industries: Driving Sustainable Solutions</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Women Empowerment & Sustainable Leadership</h2>
            <ul>
              <li>Empowering Women through Education and Sustainable Skills Development</li>
              <li>Leadership Development Programs for Women: Pathways to Sustainable Change</li>
              <li>Women in Community Leadership: Fostering Civic Engagement and Social Sustainability</li>
              <li>Women’s Empowerment through Sports: Building Strength and Leadership for Sustainable Futures</li>
              <li>Women’s Role in Peacebuilding and Conflict Resolution for Global Sustainability</li>
              <li>Empowering Rural and Marginalized Women for Sustainable Development</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Women’s Safety, Health & Well-being</h2>
            <ul>
              <li>Occupational Health and Safety for Women: A Sustainable Approach</li>
              <li>Addressing Violence Against Women in the Workplace: Strategies for a Sustainable Future</li>
              <li>Health and Safety for Women in Male-Dominated Industries </li>
              <li>Women’s Access to Healthcare and Reproductive Services for Sustainable Well-being</li>
              <li>Women’s Leadership in Healthcare: Shaping Sustainable Public Health Strategies</li>
              <li>Tackling Gender-Based Violence: The Mental Health Impact and Sustainable Solutions</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Women in Power and Decision-Making</h2>
            <ul>
              <li>Closing the Gender Gap in Political Leadership: Strategies for Sustainable Change</li>
              <li>Women in International Governance: Driving Global Sustainable Development Goals</li>
              <li>Corporate Governance and Boards: The Impact of Women’s Leadership on Sustainability</li>
              <li>Women’s Leadership in Public Service: Shaping Sustainable Policy Reforms</li>
              <li>Women in the Judiciary: Legal Leadership for Sustainable Justice Systems</li> 
              <li>Women’s Political Activism and its Role in Sustainable Social Change</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Women in Business, Management & Sustainable Startups</h2>
            <ul>
              <li> Women’s Leadership in Business Management: Innovating for Sustainable Success</li>
              <li>Sustainable Supply Chain Management: Women’s Leadership in Ethical Practices</li>
              <li>Social Entrepreneurship and Impact Investing: Women Driving Sustainable Business Models </li>
              <li>Succession Planning in Family Businesses: A Sustainable Approach for Women Entrepreneurs</li>
              <li>Business Development Programs for Women: A Roadmap to Sustainable Growth</li>
              <li>Franchising and Multi-Unit Ownership: Women’s Path to Sustainable Business Expansion</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Women’s Economic Empowerment</h2>
            <ul>
              <li>Formalizing Women’s Participation in the Informal Economy: Pathways to Economic Empowerment</li>
              <li>Access to Financial Resources: Empowering Women for Sustainable Economic Development</li>
              <li>Women in Small and Medium Enterprises: Sustainable Leadership for Economic Growth</li>
              <li>Women’s Role in Trade and Economic Policy-Making for Sustainable Development</li>
              <li>Entrepreneurship as a Path to Women’s Economic Empowerment and Sustainability</li>
              <li>Women Leaders in Corporate Social Responsibility and Sustainable Business Practices</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Gender Equality and Empowerment for Sustainability</h2>
            <ul>
              <li>Gender Equality and Economic Growth: The Sustainable Future</li>
              <li>Engaging Men in Promoting Gender Equality for Sustainable Societies</li>
              <li>Women Leaders in Gender Mainstreaming and Equality Policy for Sustainable Change </li>
              <li>Intersectionality of Gender, Race, and Class: Fostering Sustainable Equality</li>
              <li>Empowerment through Legal Reforms: Women’s Role in Shaping a Sustainable Future</li>
              <li>Women’s Activism in Gender-Based Advocacy for a More Equitable and Sustainable World</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2>Women in Sustainability & Global Development</h2>
            <ul>
              <li>Women’s Leadership in Environmental Sustainability and Climate Action</li>
              <li>Women in Community-Based Natural Resource Management for Sustainable Development</li>
              <li>Women in the Social and Solidarity Economy: Sustainable Networks for Social Change</li>
              <li>Women’s Leadership in Public Policy: Shaping Sustainable Global Development Agendas</li>
              <li>Empowering Women through Access to Information and Communication Technologies for Sustainable Development</li>
              <li>Women’s Leadership in Disaster Risk Reduction and Sustainable Resilience Building</li>
            </ul>
          </div>
          <div className="rdnewscientific-card">
            <h2> The Future of Feminism and Sustainable Work</h2>
            <ul>
              <li>The Changing Nature of Work: The Impact on Gender Equality and Sustainable Futures</li>
              <li>Women in the Gig Economy: Redefining Work in a Sustainable World</li>
              <li> Women Leaders in Remote and Virtual Teams: Leading for Sustainability </li>
              <li>Women in the Digital Economy: Pioneering Innovation in Sustainable Industries</li>
            </ul>
          </div>
          
        </div>
        <div className="rdvenue-section">
          <h2>Venue</h2>
          <p>London, UK</p>
        </div>
      </div>
      
      <div className="rdscientific-agenda">
        <h2>Scientific Agenda</h2>
        <div className="rdday-buttons">
          <button onClick={() => setSelectedDay('day1')} className={selectedDay === 'day1' ? 'active' : ''}>
            Day 1 (Physical)
          </button>
          <button onClick={() => setSelectedDay('day2')} className={selectedDay === 'day2' ? 'active' : ''}>
            Day 2 (Physical)
          </button>
          <button onClick={() => setSelectedDay('day3')} className={selectedDay === 'day3' ? 'active' : ''}>
            Day 1 (Virtual)
          </button>
          <button onClick={() => setSelectedDay('day4')} className={selectedDay === 'day4' ? 'active' : ''}>
            Day 2 (Virtual)
          </button>
        </div>

        <table className="rdschedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Speaker</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((session, index) => (
              <tr key={index}>
                <td>{session.time}</td>
                <td>{session.speaker}</td>
                <td>{session.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    <Register />
    <Footer />
     <ChatbotIcon/>
    </div>
  );
};

export default Events;