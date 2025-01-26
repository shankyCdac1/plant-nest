import { Box, Typography, Button } from "@mui/material";
import { useRouteError } from "react-router-dom";
import ErrorImage from "../../assets/images/error.jpg";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          padding: 3,
        }}
      >
        <img
          src={ErrorImage}
          alt="Error"
          style={{ width: "300px", height: "auto", marginBottom: "20px" }}
        />
        <Typography variant="h3" color="error" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {message}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => (window.location.href = "/")}
          sx={{ marginTop: "20px" }}
        >
          Go to Home Page
        </Button>
      </Box>
    </>
  );
}

export default ErrorPage;
