import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Card, CardContent, CardActions, Button, Typography, CircularProgress, Box } from '@mui/material';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      setPaymentStatus('Payment failed: ' + error.message);
    } else if (paymentIntent.status === 'succeeded') {
      setPaymentStatus('Payment succeeded!');
      await axios.post('http://localhost:8080/save-transaction', {
        amount: paymentIntent.amount / 100, // amount in dollars
        paymentStatus: 'succeeded',
        transactionId: paymentIntent.id,
      });
    }

    setIsLoading(false);
  };

  const cardStyles = {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const cardContentStyles = {
    paddingBottom: '1.5rem',
  };

  const buttonStyles = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const paymentStatusStyles = {
    textAlign: 'center',
    marginTop: '10px',
  };

  const errorTextStyles = {
    color: '#9e2146',
  };

  const successTextStyles = {
    color: 'green',
  };

  return (
    <Card sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <Typography variant="h5" component="div" gutterBottom>
          Checkout
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enter your card details below to complete the payment.
        </Typography>

        <Box mt={2} mb={2}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!stripe || isLoading}
          sx={buttonStyles}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Pay Now'}
        </Button>
      </CardActions>

      {paymentStatus && (
        <Box sx={paymentStatusStyles}>
          <Typography variant="body1" sx={paymentStatus.includes('succeeded') ? successTextStyles : errorTextStyles}>
            {paymentStatus}
          </Typography>
        </Box>
      )}
    </Card>
  );
};

export default CheckoutForm;
