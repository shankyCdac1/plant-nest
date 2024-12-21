import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1b1b1b",
        color: "#fff",
        padding: { xs: 3, sm: 5 },
        marginTop: "auto",
      }}
    >
      {/* Footer Main Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: 3, sm: 5 }, // Space between sections
          marginBottom: 4,
        }}
      >
        {/* About Section */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Privacy Policy
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Shipping Policy
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">Terms of Service</Typography>
        </Box>

        {/* Follow Us */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Follow Us
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Social Media Links
          </Typography>
        </Box>

        {/* Contact Now */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Contact Now
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            (+91) XXX-XX-XXXX
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Address Line 1, City, State, Zip
          </Typography>
          <Typography variant="body2">Email: xxx@gmail.com</Typography>
        </Box>

        {/* Top Links */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Top Links
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Link A
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Link B
        </Typography>
      </Box>
      
      {/* Payment Options */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Payment Options
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Google Pay
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Phone Pay
        </Typography>
      </Box>
      </Box>
      
      {/* Footer Bottom */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Plant Nest. All rights reserved.
        </Typography>
        <Typography variant="body2">Developed by <a href="https://www.linkedin.com/in/shashank-chaturvedi-1ba601150/" style={{ color: "#4caf50" }}>Shashank Chaturvedi</a></Typography>
      </Box>
    </Box>
  );
}

export default Footer;
