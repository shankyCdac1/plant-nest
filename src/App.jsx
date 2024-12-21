import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/Auth/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Carousel from "./components/Carousel";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50", // Custom primary color
    },
    secondary: {
      main: "#ff5722", // Custom secondary color
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
      <Carousel />
      <Login />
      <Footer />
    </>
  );
}

export default App;
