import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Card, CardContent, Button, Stack, useMediaQuery, useTheme } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleClick = (amount, description) => {
    navigate(`/pay/${amount}/${encodeURIComponent(description)}`);
  };

  const cardStyle = {
    backgroundColor: "#F7F9FC",
    color: "#0D3B66",
    borderRadius: 2,
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    width: 320, // Fixed width for all cards
    height: 400, // Fixed height for all cards
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "scale(1.08)",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
    },
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#0056b3",
      transform: "translateY(-2px)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        padding: isMobile ? "30px 10px" : "50px 20px",
        background: "linear-gradient(to bottom, #044a6b, #0a3c5d)",
      }}
    >
      {/* Intro Section */}
      <Box sx={{ mb: isMobile ? 2 : 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: isMobile ? "2em" : "2.8em",
            fontWeight: "bold",
            color: "#FFFFFF",
            mb: isMobile ? 1 : 2,
          }}
        >
          Register Now!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "1em" : "1.2em",
            color: "#E0E0E0",
            mb: isMobile ? 0.5 : 1,
          }}
        >
          Register now to start your journey and join a community of passionate learners, ambitious professionals, and
          forward-thinkers ready to make a difference.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "1em" : "1.2em",
            color: "#E0E0E0",
          }}
        >
          The world is waiting for you - take the first step today!
        </Typography>
      </Box>

      {/* Cards Section */}
      <Grid
        container
        spacing={isMobile ? 4 : isTablet ? 6 : 7}
        sx={{ maxWidth: 1200, mx: "auto", px: 2, justifyContent: "center" }}
      >
        {[
          {
            title: "Speaker Registration",
            features: ["Certificate", "CPD Credits", "Breakfast & Lunch"],
            price: "$699",
            description: "Speaker Registration & Certificate & CPD Credits & Breakfast & Lunch",
            amount: 699,
          },
          {
            title: "Package A",
            features: [
              "Certificate",
              "CPD Credits",
              "Breakfast & Lunch",
              "Speaker Slot + 2 Nights",
              "Accommodation",
            ],
            price: "$999",
            description:
              "Package A: Certificate & CPD Credits & Breakfast & Lunch & Speaker Slot + 2 Nights & Accommodation",
            amount: 999,
          },
          {
            title: "Package B",
            features: [
              "Certificate",
              "CPD Credits",
              "Breakfast & Lunch",
              "Speaker Slot + 3 Nights",
              "Accommodation",
            ],
            price: "$1,199",
            description:
              "Package B: Certificate & CPD Credits & Breakfast & Lunch & Speaker Slot + 3 Nights & Accommodation",
            amount: 1199,
          },
          {
            title: "Virtual Speaker",
            features: ["Certificate", "CPD Credits"],
            price: "$399",
            description: "Virtual Speaker: Certificate & CPD Credits",
            amount: 399,
          },
          {
            title: "Delegate",
            features: ["Certificate", "CPD Credits", "Breakfast & Lunch"],
            price: "$399",
            description: "Delegate: Certificate & CPD Credits & Breakfast & Lunch",
            amount: 399,
          },
          {
            title: "Exhibitor Pass",
            features: [
              "Certificate",
              "CPD Credits",
              "Breakfast & Lunch",
              "Exhibitor Booth",
              "Speaker Slot",
            ],
            price: "$1,499",
            description:
              "Exhibitor Pass: Certificate & CPD Credits & Breakfast & Lunch & Exhibitor Booth & Speaker Slot",
            amount: 1499,
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={cardStyle}>
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", padding: 2 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: isMobile ? "1.3em" : "1.6em",
                    color: "#0056b3",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>
                <Stack spacing={0.8} sx={{ mb: 1.5, flexGrow: 1, justifyContent: "flex-start" }}>
                  {item.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{ fontSize: isMobile ? "0.8em" : "0.9em", color: "#3C4858" }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Stack>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: isMobile ? "1.3em" : "1.5em",
                    color: "#FF5A5F",
                    fontWeight: "bold",
                    mb: 1.5,
                  }}
                >
                  {item.price}
                </Typography>
                <Button fullWidth sx={buttonStyle} onClick={() => handleClick(item.amount, item.description)}>
                  Register Now →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Register;