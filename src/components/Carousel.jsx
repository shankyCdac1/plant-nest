import { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import slider4 from "../assets/images/slider4.jpg";

const carouselData = [
  {
    id: 1,
    image: slider1,
    title: "Happiness is turning your space into a garden...",
    subtitle: "Instant 30% Discount",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image: slider2,
    title: "Bring Greenery to Your Life",
    subtitle: "Limited Time Offer",
    buttonText: "Explore",
  },
  {
    id: 3,
    image: slider3,
  },
  {
    id: 4,
    image: slider4,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  //Auto-Play functionality -- can be used later if required

  /* useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Auto-play every 5 seconds
    return () => clearInterval(timer);
  }, []); */

  return (
    <Box sx={{ position: "relative", overflow: "hidden", width: "100%", height: "400px" }}>
      {/* Carousel Content */}
      {carouselData.map((key, index) => (
        <Box
          key={key.id}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${key.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out", // Smooth transition
            opacity: currentIndex === index ? 1 : 0, // Show/hide logic
          }}
        >
          <Box sx={{ padding: "20px", color: "#fff", marginTop: "200px" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {key.title}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "10px" }}>
              {key.subtitle}
            </Typography>
            
            {key.buttonText && (
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#ff5722",
                  color: "#fff",
                }}
              >
                {key.buttonText}
              </Button>
            )}
          </Box>
        </Box>
      ))}

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.5)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.5)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
