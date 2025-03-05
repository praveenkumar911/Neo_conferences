import React, { useState, useEffect } from "react";
import './newevent.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
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
    // Create a temporary link element
    const link = document.createElement('a');
    link.href =file;
    link.download = '3rd-International-Congress-Womens-Leaders-Brochure.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="chnewevents">
        <div className="cheventsoverlay-text">
          <h1>3rd International Congress of Women Changemakers and Visionary Leaders  </h1> 
          <div className="chevent-details">
            <div className="chevent-date">
              <FaCalendarAlt className="icon" />
              <span>March 05-06, 2025</span>
            </div>
            <div className="chevent-location">
              <FaMapMarkerAlt className="icon" />
              <span>Prais,  France</span>
            </div>
          </div>
          <div className="chbutton-group">
          <button 
            className="chevent-button" 
            onClick={handleBrochureDownload}
          >
            Brochure
          </button>
            <button className="chevent-button">Abstract</button>
          </div>
        </div>

        <div className="chcountdown-container">
          <div className="chcountdown-timer">
            <div className="chtime-box">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="chtime-box">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="chtime-box">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="chtime-box">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>


      <div className="chconference-details">
        <div className="chimage-container">
          <img
            src={require('../images/conf.jpg')}
            alt="Conference"
          />
        </div>

        <div className="chtext-container">
          <h2>About the Conference</h2>
          <p>
            Join us for the 3rd International Congress of Women Changemakers and Visionary Leaders, hosted by Neo Conferences, on March 05-06, 2025, in Paris, France. This dynamic gathering brings together women from various backgrounds and cultures, fostering meaningful connections, collaboration, and networking opportunities to address critical global issues impacting women's lives.
            <strong> "Empowering Women for a Sustainable Future: Innovation, Leadership, and Change."</strong>.
          </p>
          <p>
            The congress serves as a pivotal platform for driving positive transformation, championing gender equality, economic empowerment, education, health, and political engagement for women worldwide. Whether you're passionate about leadership, advocating for women's rights, or striving to create impactful change, this event provides a unique opportunity to share your vision and be part of an inclusive, forward-thinking community.
          </p>
          <p>Don't miss this chance to amplify your voice on a global stage and connect with visionary women who share your dedication to a more equitable and empowered future for all. Join us in Paris to exchange success stories, inspire new ideas, and collectively shape a brighter tomorrow for women across the world.</p>
        </div>
      </div>


      <div className="chnews-sessions">
        <h1>Sessions/Topics</h1>
        <div className="chnews-card-container">
          <div className="chnews-card">
            <h2> Women's Representation in Leadership</h2>
            <ul>
              <li>Barriers to Women's Leadership and Strategies to Overcome Them</li>
              <li>Intersectionality in Women's Leadership</li>
              <li>The Role of Male Allies in Promoting Women's Leadership</li>
              <li>Leadership Styles and Their Impact</li>
              <li>The Importance of Mentorship and Sponsorship for Women in Leadership</li>
              <li>Mentorship and Sponsorship: Building Sustainable Leadership Pipelines</li>
              <li>The Impact of Women's Leadership on Organizational Performance and Culture</li>
              <li>Women's Leadership in Politics and Public Service</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Women in Innovation and Entrepreneurship</h2>
            <ul>
              <li>Women’s Entrepreneurship Ecosystems and Support Networks</li>
              <li> The Impact of Gender Bias on Women Entrepreneurs and How to Address It</li>
              <li>Women-Led Startups and Their Potential for Innovation and Growth </li>
              <li>The Role of Venture Capital and Angel Investors in Supporting Women Entrepreneurs</li>
              <li>Women’s Access to Capital, Markets, and Networks</li>
              <li>Women’s Leadership in Tech Startups and Emerging Industries</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Women Empowerment & Leadership</h2>
            <ul>
              <li>Women’s Empowerment Through Education and Training</li>
              <li>Women’s Leadership Development Programs and Initiatives </li>
              <li>Women’s Participation in Community and Civic Engagement </li>
              <li>Women’s Empowerment Through Sports and Physical Activity</li>
              <li>Women’s Role in Peacebuilding and Conflict Resolution</li>
              <li>Women’s Empowerment in Rural and Marginalized Communities</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Women in Safety & Health</h2>
            <ul>
              <li>Occupational Health and Safety for Women Workers</li>
              <li> Violence Against Women in the Workplace and Strategies for Prevention</li>
              <li>Women’s Health and Safety in Male-Dominated Industries </li>
              <li>Women’s Access to Healthcare and Reproductive Services</li>
              <li>Women’s Leadership in Healthcare and Public Health</li>
              <li>The Impact of Gender-Based Violence on Women’s Mental Health</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Women in Power and Decision-Making</h2>
            <ul>
              <li>The Gender Gap in Political Representation and Strategies for Closing It</li>
              <li> Women’s Participation in International Governance and Diplomacy</li>
              <li>Women’s Leadership in Corporate Governance and Boards </li>
              <li>The Impact of Women’s Leadership in Public Service and Policy-Making</li>
              <li>Women’s Representation in the Judiciary and Legal Professions</li>
              <li>Women’s Political and Social Activism</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Women in Business Management & Startups</h2>
            <ul>
              <li>Women’s Leadership in Corporate and Business Management</li>
              <li>Women’s Leadership in Supply Chain Management and Logistics </li>
              <li>Women’s Role in Social Entrepreneurship and Impact Investing </li>
              <li>Women’s Participation in Family Businesses and Succession Planning</li>
              <li>Women’s Access to Business Training and Development Programs</li>
              <li>Women’s Leadership in Franchising and Multi-Unit Ownership</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Women Economic Empowerment</h2>
            <ul>
              <li>Women’s Participation in the Informal Economy and Strategies for Formalization</li>
              <li>Women’s Access to Financial Services and Resources </li>
              <li>Women’s Leadership in Small and Medium-Sized Enterprises</li>
              <li>Women’s Role in Trade and Economic Policy-Making</li>
              <li>Women’s Empowerment Through Entrepreneurship and Business Ownership</li>
              <li>Women’s Leadership in Corporate Social Responsibility and Sustainable Business Practices</li>
              
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Gender Equality and Empowerment</h2>
            <ul>
              <li>The Impact of Gender Inequality on Economic Development and Growth</li>
              <li>Men’s Role in Promoting Gender Equality and Women’s Empowerment</li>
              <li>Women’s Leadership in Gender Mainstreaming and Equality Policy-Making</li>
              <li>The Intersectionality of Gender, Race, and Class in Promoting Equality</li>
              <li>Women’s Empowerment Through Legal and Policy Reforms</li>
              <li>Women’s Participation in Gender-Based Activism and Advocacy</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Women in Network and Sustainable Development</h2>
            <ul>
              <li> Women’s Leadership in Environmental Sustainability and Climate Change Adaptation</li>
              <li> Women’s Role in Community-Based Natural Resource Management and Conservation</li>
              <li>Women’s Participation in Social and Solidarity Economy Networks </li>
              <li>The Impact of Women’s Leadership in Public Service and Policy-Making</li>
              <li>Women’s Empowerment Through Access to Information and Communication Technologies</li>
              <li>Women’s Leadership in Disaster Risk Reduction and Management</li>
            </ul>
          </div>
          <div className="chnews-card">
            <h2>Work and the Future of Feminism</h2>
            <ul>
              <li>The Impact of New Technologies and the Changing Nature of Work on Gender Equality</li>
              <li>Women’s Role in the Gig Economy and Flexible Work Arrangements </li>
              <li>Women’s Leadership in Remote and Virtual Teams </li>
              <li>Women’s Participation in the Digital Economy and Emerging Industries</li>
            </ul>
          </div>
        </div>
        <div className="chvenue-section">
          <h2>Venue</h2>
          <p>Paris, France</p>
        </div>
      </div>

      <div className="chscientific-agenda">
        <h2>Scientific Agenda</h2>
        <div className="chday-buttons">
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

        <table className="chschedule-table">
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
      <div>
    </div>
    <Register />
    <Footer />
     <ChatbotIcon/> 
    </div>
  );
};

export default Events;