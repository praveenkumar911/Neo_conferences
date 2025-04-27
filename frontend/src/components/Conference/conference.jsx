import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import img1 from "../images/conf3.jpg";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/newai.png";
import img8 from "../images/leadership.png";
import ChatbotIcon from "../chatbot/chatbot";

const events = [
  {
    title: "4th International Congress of Women Changemakers and Visionary Leaders",
    date: "May 07-08, 2025",
    location: "Toronto, Canada",
    image: img3,
    link: "/4th-International-Congress-of-Women-Changemakers-and-Visionary-Leaders",
  },
  {
    title: "4th World Congress on Mindfulness, Psychology, and Spirituality",
    date: "May 07-08, 2025",
    location: "Toronto, Canada",
    image: img4,
    link: "/4th-International-Congress-on-Women's-Health-and-Midwifery-Excellence",
  },
  {
    title: "4th Global Congress on Women’s Leadership, Empowerment, and Sustainable Development",
    date: "October 09-10, 2025",
    location: "Toronto, Canada",
    image: img8,
    link: "/Global-Congress-on-Womens-Leadership-Empowerment-and-Sustainable-Development",
  },
  {
    title: "4th International congress on Women's Health and Midwifery Excellence",
    date: "October 09-10, 2025",
    location: "Toronto, Canada",
    image: img1,
    link: "/International-Congress-on-Womens-Health-and-Midwifery-Excellence",
  },
  {
    title: "4th International conference on Mental Health, Well-Being, and Spiritual Healing",
    date: "October 09-10, 2025",
    location: "Toronto, Canada",
    image: img5,
    link: "/4th-International-conference-on-Mental-Health-Well-Being-and-Spiritual-Healing",
  },
  {
    title: "4th Global Congress on Womens Leadership, Empowerment, and Sustainable Development",
    date: "March 08-09, 2026",
    location: "Paris, France",
    image: img2,
    link: "/4th-Global-Congress-on-Womens-Leadership-Empowerment-and-Sustainable-Development",
  },
  {
    title: "4th International Conference on Gender Diversity and Transgender Health",
    date: "March 08-09, 2026",
    location: "Paris, France",
    image: img6,
    link: "/4th-International-Conference-on-Gender-Diversity-and-Transgender-Health",
  },
  {
    title: "From Novice to AI Pro: Career-Boosting Skills for the Digital Age",
    image: img7,
    link: "/theosym",
  },
];

const EventsPage = () => {
  const navigate = useNavigate();

  const handleDetailsClick = (link) => {
    navigate(link);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../images/home11.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: { xs: "1rem", sm: "2rem" },
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                maxWidth: 350,
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="text.primary"
                  sx={{
                    whiteSpace: "normal",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {event.title}
                </Typography>
                {event.date && (
                  <Typography variant="body2" color="text.secondary">
                    {event.date}
                  </Typography>
                )}
                {event.location && (
                  <Typography variant="body2" color="text.secondary">
                    {event.location}
                  </Typography>
                )}
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.5rem",
                  borderTop: "1px solid #ddd",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleDetailsClick(event.link)}
                  sx={{ textTransform: "none", flex: 1, marginRight: "0.5rem" }}
                >
                  Details
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ textTransform: "none", flex: 1 }}
                >
                  Register
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ChatbotIcon />
    </Box>
  );
};

export default EventsPage;