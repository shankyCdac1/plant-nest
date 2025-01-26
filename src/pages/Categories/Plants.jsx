import { Box, Typography, Container } from "@mui/material";

function Plants() {
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
        <Typography variant="h4" component="h1" gutterBottom>
          Plants Page
        </Typography>
      </Box>
    </Container>
  );
}
export default Plants;
