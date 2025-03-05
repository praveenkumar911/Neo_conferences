import React, { useState, useEffect } from "react";
import './conference1.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import ChatbotIcon from "../chatbot/chatbot";
import Footer from "../Footer/footer";
import Register from "../Register/register";
import newfile from "../images/Neo Mental Health Brochure.pdf"

const OverlayPage = () => {
  const navigate=useNavigate()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedDay, setSelectedDay] = useState('day1'); 
  const handleclick1 = (amount, description) => {
    navigate(`/pay/${amount}/${encodeURIComponent(description)}`);
  };
  useEffect(() => {
    const eventDate = new Date('2025-07-23T00:00:00');
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
    link.href =newfile;
    link.download = '3rd-International-Congress-Womens-Health-Brochure.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div>
      <div className="troverlay-container">
        <div className="troverlay-text">
          <h1> 5th International Conference on Gender Diversity and Transgender Health </h1> 
          <div className="trevent-details">
            <div className="trevent-date">
              <FaCalendarAlt className="icon" />
              <span>July 23-24, 2025</span>
            </div>
            <div className="trevent-location">
              <FaMapMarkerAlt className="icon" />
              <span>London, UK</span>
            </div>
          </div>
          <div className="trbutton-group">
          <button 
            className="trevent-button" 
            onClick={handleBrochureDownload}
          >
            Brochure
          </button>
            <button className="trevent-button">Abstract</button>
          </div>
        </div>

        <div className="trcountdown-container">
          <div className="trcountdown-timer">
            <div className="trtime-box">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="trtime-box">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="trtime-box">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="trtime-box">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <div className="trconference-details">
        <div className="trimage-container">
          <img
            src={require('../images/conf.jpg')}
            alt="Conference"
          />
        </div>
        <div className="trtext-container">
          <h2>About the Conference</h2>
          <p>
            The Global Women’s Leadership Summit, hosted by NEO International conferences, offers an unparalleled opportunity for women of diverse backgrounds and cultures to connect, collaborate, and network on a variety of issues affecting their lives. The theme of the conference:
            <strong> Women’s Voices, Women’s Power: Toward a Vision of Women Leadership</strong>.
          </p>
          <p>
            Join us for the Global Women’s Leadership Summit to be held on July 23-24, 2025, in London, UK. This is an opportunity to show your passion on a global stage and connect with like-minded individuals who share your commitment to gender equality, economic empowerment, leadership, education, health, and political participation for women worldwide.
          </p>
        </div>
      </div>


      <div className="trscientific-sessions">
        <h1>Sessions/Topics</h1>
        <ul>
          <li>Women's Representation in Leadership</li>
          <li>Women in Innovation and Entrepreneurship</li>
          <li>Women Empowerment & Leadership</li>
          <li>Women in Safety & Health</li>
          <li>Women in Power and Decision-Making</li>
          <li>Women in Business Management & Startups</li>
          <li>Women Economic Empowerment</li>
          <li>Gender Equality and Empowerment</li>
          <li>Women in Network and Sustainable Development</li>
          <li>Work and the Future of Feminism</li>
        </ul>
        <div className="trvenue-section">
          <h2>Venue</h2>
          <p>Paris, France</p>
        </div>
      </div>


      <div className="trscientific-agenda">
        <h2>Scientific Agenda</h2>
        <div className="trday-buttons">
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
        <table className="trschedule-table">
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

export default OverlayPage;