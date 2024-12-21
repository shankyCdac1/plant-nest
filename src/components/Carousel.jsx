import { useEffect, useState } from "react";
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
    showButton: true,
  },
  {
    id: 2,
    image: slider2,
    title: "Bring Greenery to Your Life",
    subtitle: "Limited Time Offer",
    buttonText: "Explore",
    showButton: true,
  },
  {
    id: 3,
    image: slider3,
    showButton: false,
  },
  {
    id: 4,
    image: slider4,
    showButton: false,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);

  //Show button on banner for only first 2 slides
  useEffect(() => {
    if (currentIndex == 0 || currentIndex == 1) {
        setShowButton(true);
    }
    else 
        setShowButton(false);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1;
    });
  };

  // Auto-play functionality -- can be used later if required
  /*
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);
  */

  return (
    <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
      {/* Carousel Content */}
      {carouselData.map((key, index) => (
        <Box
          key={key.id}
          sx={{
            display: currentIndex === index ? "flex" : "none",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundImage: `url(${key.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            padding: "20px",
            color: "#fff",
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              {key.title}
            </Typography>
            <Typography variant="h5" sx={{ marginTop: "10px" }}>
              {key.subtitle}
            </Typography>

            {showButton && (
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
