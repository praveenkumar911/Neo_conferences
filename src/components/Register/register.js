import React from "react";
import './register.css';
import { useNavigate } from "react-router-dom";
import StripePay from "../payment/Stripe";

const Register = () => {
    const navigate=useNavigate()
    const handleclick1 = (amount, description) => {
      navigate(`/pay/${amount}/${encodeURIComponent(description)}`);
    };

    return ( 
        <div>
            <section className="register-ai">
        <div className="intro-new">
          <h1>Register Now!</h1>
          <p>
            Register now to start your journey and join a community of passionate learners, ambitious professionals, and forward-thinkers ready to make a difference.
          </p>
          <p>The world is waiting for you - take the first step today!</p>
        </div>

        <div className="register-cards-ai">
          <div className="register-newaicard">
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

          <div className="register-newaicard">
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

          <div className="register-newaicard">
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

          <div className="register-newaicard">
            <h3>Virtual Keynote Speaker</h3>
            <ul>
              <li>Certificate</li>
              <li>CPD Credits</li>
            </ul>
            <p>$399</p>
            <button onClick={() => handleclick1(399, 'Virtual Keynote Speaker: Certificate & CPD Credits')}>
              Register Now →
            </button>
          </div>

          <div className="register-newaicard">
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

        <div className="register-newaicard">
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

        <div className="register-newaicard">
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
          </div>
      </section>

        </div>
  );
};

export default Register;