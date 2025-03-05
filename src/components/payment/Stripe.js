import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Checkout';

const stripePromise = loadStripe('pk_live_51NZAOXSHndIYc9QjsYvC1BF7dV0ZPqaSYxSZJOmMmIvm5ZukRFNOp1dOFPmKLw8eBgqjO35ot8L6x0mF1Ypbyahp00XKqIb6TM');

function StripePay() {
  const { amount, description } = useParams();

  const [billingDetails, setBillingDetails] = useState({
    name: '',
    address: {
      line1: '',
      city: '',
      postal_code: '',
      state: '',
      country: 'US',
    },
    email: ''
  });
  const [clientSecret, setClientSecret] = useState('');

  const handleBillingChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith('address')) {
      setBillingDetails({
        ...billingDetails,
        address: {
          ...billingDetails.address,
          [name.split('.')[1]]: value
        }
      });
    } else {
      setBillingDetails({
        ...billingDetails,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8080/create-payment-intent', {
    // const response = await fetch('http://neoconferences.org/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, billingDetails, description }),
    });

    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#007BFF',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Payment with Neo Conference Billing Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={billingDetails.name}
          onChange={handleBillingChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={billingDetails.email}
          onChange={handleBillingChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="address.line1"
          placeholder="Address Line 1"
          value={billingDetails.address.line1}
          onChange={handleBillingChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="address.city"
          placeholder="City"
          value={billingDetails.address.city}
          onChange={handleBillingChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="address.state"
          placeholder="State"
          value={billingDetails.address.state}
          onChange={handleBillingChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="address.postal_code"
          placeholder="Postal Code"
          value={billingDetails.address.postal_code}
          onChange={handleBillingChange}
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
        >
          Pay Now
        </button>
      </form>

      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}

export default StripePay;
