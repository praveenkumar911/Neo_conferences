import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import ChatbotIcon from "../chatbot/chatbot";
import Footer from "../Footer/footer";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      if (value && !phonePattern.test(value)) {
        setStatus("Please enter a valid phone number.");
      } else {
        setStatus("");
      }
    } else {
      setStatus("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const phonePattern = /^[0-9]{10}$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://neoconferences.org/api/add-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const result = await response.json();
        setStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: { xs: "2rem", sm: "4rem" },
          backgroundColor: "#0c2d50",
          color: "white",
          borderRadius: { xs: 0, sm: "10px 10px 0 0" },
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom fontWeight={'bold'}>
          CONTACT US
        </Typography>
        <Typography variant="body1" fontWeight={'bold'}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>{" "}
          /{" "}
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact Us
          </a>
        </Typography>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Office Addresses
              </Typography>
              <Typography variant="body1" gutterBottom>
                Don't hesitate to reach us
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> contact@neoconferences.org
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Contact us at:</strong> +7 996 829-21-05
              </Typography>
              <Typography variant="h5" gutterBottom>
                United States Office Address
              </Typography>
              <Typography variant="body1">
                Prospekt Gagarina, Nizhny Novgorod, Nizhegorodskaya oblast', Russia, 603022
              </Typography>
            </Box>
          </Grid>

          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Leave a Message
              </Typography>
              <Typography variant="body1" gutterBottom>
                We're ready to help you
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Enter Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  margin="normal"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  margin="normal"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  margin="normal"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Feedback"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  multiline
                  rows={5}
                  required
                  margin="normal"
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                  sx={{ py: 1.5, fontSize: "1rem" }}
                >
                  {loading ? "Sending..." : "SEND A MESSAGE →"}
                </Button>
                {status && (
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      color: status.includes("successfully") ? "green" : "red",
                    }}
                  >
                    {status}
                  </Typography>
                )}
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
      <ChatbotIcon />
    </Box>
  );
}

export default ContactUs;