import { Box, Typography, Container } from "@mui/material";
//import weWillBeBack from "../assets/images/weWillBeBack.jpg";

const DetailsComingSoon = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
      >
        {/* <img
          src={weWillBeBack}
          alt="Placeholder"
          style={{ marginTop: "200px" ,marginBottom: "20px", borderRadius: "8px" }}
        /> */}
        <Typography variant="h4" component="h1" gutterBottom>
          All the details will be available soon
        </Typography>
      </Box>
    </Container>
  );
};

export default DetailsComingSoon;
