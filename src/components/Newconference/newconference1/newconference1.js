import React, { useState, useEffect } from "react";
import './newconference1.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import ChatbotIcon from "../../chatbot/chatbot";
import Footer from "../../Footer/footer";
// import StripePay from "../payment/Stripe";
import file from "../../images/Neo Brochure.pdf"

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
    link.download = '3rd-International-Congress-Womens-Leadership-Brochure.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div>
      <div className="olddetailsover">
        <div className="olddetailsoverlay-text">
          <h1>3rd Global Women Power Summit on the Dynamics of Leadership </h1> 
          <div className="oldevent-details">
            <div className="oldevent-date">
              <FaCalendarAlt className="old-icon" />
              <span>March 05-06, 2025</span>
            </div>
            <div className="oldevent-location">
              <FaMapMarkerAlt className="old-icon" />
              <span>Paris, France</span>
            </div>
          </div>
          <div className="oldbutton-group">
          <button 
            className="event-button" 
            onClick={handleBrochureDownload}
          >
            Brochure
          </button>
            <button className="oldevent-button">Abstract</button>
          </div>
        </div>

        <div className="oldcountdown-container">
          <div className="oldcountdown-timer">
            <div className="old-time-box">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="old-time-box">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="old-time-box">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="old-time-box">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      <div className="newconferences-details">
            <div className="newconfimage-container">
                <img
                     src={require('../newconference1/conf.jpg')}
                    alt="newConference"
                 />
            </div>
            <div className="newconftext-container">
                <h2>About the Conference</h2>
                <p>
                3rd Global Women Power Summit on the Dynamics of Leadership Hosted by NEO Conferences
                Join us for the 3rd Global Women Power Summit on the Dynamics of Leadership, taking place on March 05-06, 2025, in Paris, France. This summit provides a unique opportunity for leaders, professionals, researchers, and advocates from various backgrounds and cultures to engage, collaborate, and explore vital topics in women’s leadership and empowerment.
                  <strong> Theme: "Women's Voices, Women's Power: Toward a Vision of Women Leadership"   </strong>.
                </p>
                <p>
                The summit serves as an inspiring platform to address key issues such as leadership development, economic empowerment, gender equality, and the role of women in shaping policy and driving innovation across sectors. It also aims to foster discussions around strategies for overcoming barriers to leadership, mentorship and sponsorship, and the importance of building inclusive leadership cultures globally.
                </p>
                <p>  By participating in this event, you’ll have the opportunity to share your expertise, success stories, and innovative ideas with a diverse community of change-makers committed to advancing women's leadership worldwide.
                </p>
                <p>
                We invite you to be part of this inclusive platform to contribute to dynamic discussions, spark collaborations, and make a significant impact on the future of women’s leadership. Join the movement toward a more equitable, empowered future for all!

                </p>
            </div>
      </div>


      <div className="scientific-newconferences">
            <h1>Sessions/Topics</h1>
            <div className="scientific-newconferences-card">
            <div className="scientific-newcard">
                <h2>Women’s Representation in Leadership: Global Perspectives and Emerging Trends   </h2>
                <ul>
                <li> Addressing the global gender gap in leadership roles </li>
                <li>Strategies to increase women's representation in senior positions   </li>
                <li> Emerging trends in women's leadership across different sectors </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2> Overcoming Barriers to Women's Leadership   </h2>
                <ul>
                <li>Identifying and addressing systemic obstacles</li>
                <li>The role of policies and initiatives in closing the leadership gap </li>
                <li>Strategies for navigating gender bias in leadership pathways </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Intersectionality in Women's Leadership </h2>
                <ul>
                <li> Exploring the impact of race, ethnicity, and socioeconomic status </li>
                <li>The role of intersectionality in shaping leadership experiences </li>
                <li> Inclusive leadership models that empower diverse groups of women</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>The Role of Male Allies in Promoting Women's Leadership  </h2>
                <ul>
                <li>How men can support gender equality in the workplace </li>
                <li> Strategies for engaging male allies in leadership initiatives </li>
                <li>The impact of male champions on advancing women's leadership </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Women's Leadership Styles and Their Impact                </h2>
                <ul>
                <li> Examining the unique qualities of women leaders</li>
                <li>The benefits of different leadership styles for organizational culture</li>
                <li> How women leaders drive innovation and positive change</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Mentorship and Sponsorship: Catalysts for Women's Leadership Growth</h2>
                <ul>
                <li>The importance of mentorship and sponsorship programs</li>
                <li>Creating networks to support women leaders across industries</li>
                <li> Best practices for building successful mentorship relationships  </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>The Impact of Women's Leadership on Organizational Performance and Culture </h2>
                <ul>
                <li>How women leaders influence business outcomes and employee engagement </li>
                <li>The connection between leadership diversity and organizational success </li>
                <li>Strategies for fostering an inclusive leadership culture</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Women’s Leadership in Politics and Public Service </h2>
                <ul>
                <li> Closing the gender gap in political representation </li>
                <li>Women’s influence on policy-making and social change </li>
                <li>The role of public service in advancing women’s leadership  </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Women in Innovation and Entrepreneurship: Pioneers of Change</h2>
                <ul>
                <li>Breaking barriers in entrepreneurship and tech startups </li>
                <li>Addressing gender bias in funding and venture capital  </li>
                <li> Promoting ecosystems that support women-led innovations </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Women’s Empowerment through Leadership Development Programs </h2>
                <ul>
                <li>The impact of leadership training on women’s career advancement </li>
                <li> Designing programs that nurture future women leaders </li>
                <li>Integrating leadership development into education and corporate initiatives</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Work-Life Balance and Women's Leadership </h2>
                <ul>
                <li>Strategies for maintaining balance while leading  </li>
                <li>The impact of work-life integration on leadership performance </li>
                <li>Redefining success for modern women leaders </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Women in Corporate Governance and Board Leadership                </h2>
                <ul>
                <li> Increasing female representation on corporate boards</li>
                <li> The impact of women’s leadership on corporate ethics and governance</li>
                <li> Best practices for advancing women in board leadership roles</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Women’s Leadership in Tech and Emerging Industries </h2>
                <ul>
                <li> Leading the way in AI, digital transformation, and tech startups  </li>
                <li>Overcoming barriers in male-dominated fields</li>
                <li>Promoting gender-inclusive practices in STEM industries </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>The Future of Feminism and Leadership: Evolving Roles and Challenges </h2>
                <ul>
                <li>The changing nature of work and its impact on women’s leadership  </li>
                <li> Women’s leadership in remote and flexible work environments</li>
                <li>Adapting feminist leadership strategies to new workplace dynamics</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>The Intersection of Women's Health and Leadership                </h2>
                <ul>
                <li>Addressing health issues that impact women's leadership potential </li>
                <li>Creating supportive workplace policies for women’s health and well-being </li>
                <li>The role of wellness programs in empowering women leaders</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Sustainable Development Goals and Women's Leadership </h2>
                <ul>
                <li>Women’s role in achieving the UN’s Sustainable Development Goals </li>
                <li>Leading sustainability initiatives and environmental policies </li>
                <li>The impact of women leaders on global development efforts </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Holistic Approaches to Leadership Development                </h2>
                <ul>
                <li>Integrating mindfulness, emotional intelligence, and well-being in leadership</li>
                <li>The benefits of holistic leadership for long-term success </li>
                <li>Cultivating resilient leaders who inspire and empower others</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Leadership and Social Entrepreneurship</h2>
                <ul>
                <li> Women’s impact on social innovation and community development </li>
                <li> Leading social enterprises to address global challenges </li>
                <li> The role of impact investing in supporting women-led ventures</li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Building a Pipeline of Future Women Leaders</h2>
                <ul>
                <li>Addressing the leadership gap in early career stages </li>
                <li> Strategies for developing young women’s leadership potential</li>
                <li>Creating mentorship and training opportunities for the next generation </li>
                </ul>
            </div>
            <div className="scientific-newcard">
                <h2>Gender Equality and Women’s Leadership: Advocacy and Activism  </h2>
                <ul>
                <li>The role of women leaders in promoting gender equality</li>
                <li> Activism and advocacy as pathways to leadership  </li>
                <li>Policy initiatives to support women’s empowerment in leadership</li>
                </ul>
            </div>
            </div>
            <div className="newvenue-confsection">
                <h2>Venue</h2>
                <p>Paris, France </p>
            </div>
      </div>
      
      <div className="newconfscientific-agenda">
            <h2>Scientific Agenda</h2>
            <div className="newconfday-buttons">
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

        <table className="newconferenceschedule">
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

      <section className="registration-sec">
        <div className="intro-sec">
          <h1>Register Now!</h1>
          <p>
            Register now to start your journey and join a community of passionate learners, ambitious professionals, and forward-thinkers ready to make a difference.
          </p>
          <p>The world is waiting for you - take the first step today!</p>
        </div>

        <div className="registration-card-new">
          <div className="registration-newsec">
            <h3>Speaker Registration</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
            </ul>
            <p>$599</p>
            <button onClick={() => handleclick1(599, 'Speaker Registration & Certificate & CPD Credits & Breakfast & Lunch')}>
              Register Now →
            </button>
          </div>

          <div className="registration-newsec">
            <h3>Package A</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
              <li>Speaker Slot + 2 Nights</li>
              <li>Accommodation</li>
            </ul>
            <p>$899</p>
            <button onClick={() => handleclick1(899, 'Package A: Certificate & CPD Credits & Breakfast & Lunch & Speaker Slot + 2 Nights & Accommodation')}>
              Register Now →
            </button>
          </div>

          <div className="registration-newsec">
            <h3>Package B</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
              <li>Speaker Slot + 3 Nights</li>
              <li>Accommodation</li>
            </ul>
            <p>$1,099</p>
            <button onClick={() => handleclick1(1099, 'Package B: Certificate & CPD Credits & Breakfast & Lunch & Speaker Slot + 3 Nights & Accommodation')}>
              Register Now →
            </button>
          </div>


          <div className="registration-newsec">
            <h3>Exhibitor Pass</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
              <li>Exhibitor Booth</li>
              <li>Speaker Slot</li>
            </ul>
            <p>$1,399</p>
            <button onClick={() => handleclick1(1399, 'Exhibitor Pass: Certificate & CPD Credits & Breakfast & Lunch & Exhibitor Booth & Speaker Slot')}>
              Register Now →
            </button>
          </div>

          <div className="registration-newsec">
            <h3>Delegate</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
              <li>Breakfast & Lunch</li>
            </ul>
            <p>$299</p>
            <button onClick={() => handleclick1(299, 'Delegate: Certificate & CPD Credits & Breakfast & Lunch')}>
              Register Now →
            </button>
          </div>

          <div className="registration-newsec">
            <h3>Virtual Speaker</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
            </ul>
            <p>$299</p>
            <button onClick={() => handleclick1(299, 'Virtual Speaker: Certificate & CPD Credits')}>
              Register Now →
            </button>
          </div>
        </div>
      </section>

      <Footer/>
      <ChatbotIcon/>
  </div>
  );
};

export default Events;