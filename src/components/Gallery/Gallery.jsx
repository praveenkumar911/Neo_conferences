import React from "react";
import { Box, Container, Typography, ImageList, ImageListItem } from "@mui/material";
import neologo from "../HomePage/neologo.png";
import image1 from "./neogallery.jpg";
import image2 from "./neogallery1.jpg";
import image3 from "./neogallery2.jpg";
import image4 from "./neogallery3.jpg";
import image5 from "./neogallery4.jpg";
import image6 from "./neogallery5.jpg";
import ChatbotIcon from "../chatbot/chatbot";
import Footer from "../Footer/footer";

const GalleryPage = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: `url(${require("../images/newimg.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "20vh", sm: "30vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom fontWeight={'bold'}>
            Gallery
          </Typography>
          <Typography variant="body1" fontWeight={'bold'}>
            <a href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </a>{" "}
            /{" "}
            <a href="/gallery" style={{ color: "white", textDecoration: "none" }}>
              Gallery
            </a>
          </Typography>
        </Box>
      </Box>

      {/* Spacer to Push Images Down */}
      <Box sx={{ height: { xs: "30px", sm: "60px", md: "30px" } }} />

      {/* Image Gallery Section */}
      <Container maxWidth="lg">
        <ImageList
          cols={2} // Two images per row
          gap={10} // Gap between images
          sx={{
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)", // 1 column on extra small screens
              sm: "repeat(2, 1fr)", // 2 columns on small and medium screens
              md: "repeat(3, 1fr)", // 3 columns on large screens
            },
          }}
        >
          {images.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%", // Fixed height for all images
                  objectFit: "cover", // Ensures images maintain aspect ratio
                  borderRadius: "10px",
                  transition: "transform 0.3s ease",
                }}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* Footer */}
      <Footer />
      <ChatbotIcon />
    </Box>
  );
};

export default GalleryPage;