import React, { useState, useEffect } from "react";
import './event.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import StripePay from "../payment/Stripe";
import ChatbotIcon from "../chatbot/chatbot";
import Footer from '../Footer/footer';
import Register from "../Register/register";
import newfile from "../images/Neo Mental Health Brochure.pdf"
const Events = () => {
  const navigate=useNavigate()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedDay, setSelectedDay] = useState('day1'); 
  const handleclick1 = (amount, description) => {
    navigate(`/pay/${amount}/${encodeURIComponent(description)}`);
  };

  useEffect(() => {
    const eventDate = new Date('2025-05-07T00:00:00');
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
      <div className="exeventsoverlay">
        <div className="exeventsoverlay-text">
          <h1>3rd International congress on Women's Health and Midwifery Excellence </h1> 
          <div className="exevent-details">
            <div className="exevent-date">
              <FaCalendarAlt className="exicon" />
              <span>May 07-08, 2025</span>
            </div>
            <div className="exevent-location">
              <FaMapMarkerAlt className="exicon" />
              <span>Toronto, Canada</span>
            </div>
          </div>
          <div className="exbutton-group">
          <button 
            className="exevent-button" 
            onClick={handleBrochureDownload}
          >
            Brochure
          </button>
            <button className="exevent-button">Abstract</button>
          </div>
        </div>

        <div className="excountdown-container">
          <div className="excountdown-timer">
            <div className="extime-box">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="extime-box">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="extime-box">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="extime-box">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>





      <div className="exconference-details">
        <div className="eximage-container">
          <img
            src={require('../images/conf.jpg')}
            alt="Conference"
          />
        </div>
        <div className="extext-container">
          <h2>About the Conference</h2>
          <p>
            Join us for the 3rd International Conference on Women's Health and Midwifery, to be held on May 07-08, 2025, in Toronto, Canada. This conference offers an exceptional opportunity for healthcare professionals, researchers, midwives, and advocates from diverse backgrounds and cultures to engage, collaborate, and explore crucial topics in women’s health and midwifery.
            <strong> "Empowering Women's Health: Bridging Gaps in Midwifery and Holistic Care" </strong>.
          </p>
          <p>
            The forum serves as a dynamic platform for addressing key issues such as maternal and child health, reproductive rights, healthcare access, and the critical role of midwifery in empowering women globally. It also aims to promote advancements in medical education, policy development, and innovative healthcare solutions tailored to women’s unique needs.
          </p>
          <p>
            By participating in this conference, you’ll have the opportunity to showcase your expertise, share success stories, and exchange groundbreaking ideas with a global community of like-minded professionals committed to improving women’s health and well-being.
          </p>
          <p>
            We invite you to join this inclusive platform to contribute to meaningful discussions, foster collaboration, and make a tangible impact on the future of women's health and midwifery. Be part of the movement toward a healthier, more equitable future for women worldwide!
          </p>
        </div>
      </div>


      <div className="exscientific-sessions">
        <h1>Sessions/Topics</h1>
        <div className="exscientific-card-container">
          <div className="exscientific-card">
            <h2>Maternal and Child Health: Global Perspectives and Emerging Trends</h2>
            <ul>
              <li>Addressing disparities in maternal and infant mortality</li>
              <li>Innovations in prenatal and postnatal care</li>
              <li>Policies and strategies for improving maternal health outcomes globally</li>
              <li>Midwifery: Advancing Practice and Education</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>The evolving role of midwives in modern healthcare</h2>
            <ul>
              <li>Midwifery-led care models and their impact on women’s health</li>
              <li>Enhancing midwifery education and training for future healthcare professionals</li>
              <li>Reproductive Health and Rights </li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Access to reproductive healthcare: Challenges and solutions</h2>
            <ul>
              <li>Promoting sexual health education and family planning services</li>
              <li>Global policies on reproductive rights and gender equality</li>
              <li>Women’s Mental Health and Emotional Well-being</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Addressing mental health challenges in pregnancy and postpartum periods</h2>
            <ul>
              <li>The importance of mental health screening in women’s healthcare</li>
              <li>Holistic approaches to supporting emotional well-being in women</li>
              <li>Healthcare Technologies in Women’s Health </li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Innovations in telemedicine and digital health tools for women</h2>
            <ul>
              <li>Wearable technology for monitoring maternal and reproductive health</li>
              <li>The future of AI and machine learning in women’s healthcare</li>
              <li>Obstetric Care: Enhancing Safety and Outcomes</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Reducing cesarean sections and promoting safe vaginal deliveries</h2>
            <ul>
              <li> Advances in labor and delivery techniques</li>
              <li>Emergency obstetric care in low-resource settings</li>
              <li>Nutrition and Women’s Health: From Pregnancy to Postpartum </li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>The role of nutrition in prenatal and postnatal care</h2>
            <ul>
              <li>Addressing nutritional deficiencies in women of childbearing age</li>
              <li>Nutritional interventions for maternal and child health</li>
              <li>Perinatal and Neonatal Care: Innovations and Challenges</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Best practices in perinatal care to reduce complications</h2>
            <ul>
              <li>Neonatal intensive care advancements</li>
              <li>Supporting premature infants and their families</li>
              <li>Midwifery in Global Contexts: Cultural and Regional Approaches </li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Traditional midwifery practices across different cultures</h2>
            <ul>
              <li>Integrating modern and traditional practices in midwifery</li>
              <li>The role of midwifery in promoting women’s autonomy and empowerment</li>
              <li>Women’s Health Policy and Advocacy</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Shaping policies that promote women’s access to healthcare</h2>
            <ul>
              <li>Advocacy for midwifery and women’s health rights</li>
              <li>The intersection of women’s health and gender equality in global policy</li>
              <li>Chronic Diseases and Women’s Health </li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Managing chronic diseases (diabetes, cardiovascular disease) during pregnancy</h2>
            <ul>
              <li>The impact of chronic illnesses on reproductive health</li>
              <li>Preventive strategies and early interventions for women’s health</li>
              <li>Holistic Approaches to Women’s Health and Well-being</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>Integrating alternative therapies (acupuncture, herbal medicine) with traditional healthcare</h2>
            <ul>
              <li>The role of mindfulness, yoga, and meditation in maternal health</li>
              <li>Promoting holistic care models in women’s health services</li>
              <li> Addressing Gender-Based Violence in Women’s Health</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>The impact of violence and trauma on women’s reproductive health</h2>
            <ul>
              <li>Healthcare professionals’ role in identifying and supporting survivors</li>
              <li>Policy initiatives to combat gender-based violence in healthcare settings</li>
              <li>Sustainable Development Goals and Women’s Health</li>
            </ul>
          </div>
          <div className="exscientific-card">
            <h2>The role of midwifery in achieving SDG 3: Good Health and Well-being</h2>
            <ul>
              <li>Women’s health and its contribution to the broader sustainability agenda</li>
              <li>Global partnerships for improving healthcare systems for women and children</li>
              <li>Future Directions in Women’s Health and Midwifery Research</li>
            </ul>
          </div>
        </div>
        <div className="exvenue-section">
          <h2>Venue</h2>
          <p>Toronto, Canada</p>
        </div>
      </div>

      
      <div className="exscientific-agenda">
        <h2>Scientific Agenda</h2>
        <div className="exday-buttons">
          <button onClick={() => setSelectedDay('day1')} className={selectedDay === 'day1' ? 'active' : ''}>
            Day 1 (Physical )
          </button>
          <button onClick={() => setSelectedDay('day2')} className={selectedDay === 'day2' ? 'active' : ''}>
            Day 2 (Physical )
          </button>
          <button onClick={() => setSelectedDay('day3')} className={selectedDay === 'day3' ? 'active' : ''}>
            Day 1 (Virtual )
          </button>
          <button onClick={() => setSelectedDay('day4')} className={selectedDay === 'day4' ? 'active' : ''}>
            Day 2 (Virtual )
          </button>
        </div>

        <table className="exschedule-table">
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