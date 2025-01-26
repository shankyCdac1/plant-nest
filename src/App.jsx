import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/Auth/Login";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Carousel from "./components/Carousel";
import Card from "./components/Card/Card";
import RunningBanner from "./components/RunningBanner";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import DetailsComingSoon from "./components/DetailsComingSoon";
import ErrorPage from "./pages/Error/Error";


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

const Layout = () => {
  const currentRoutePath = useLocation(); // provides many details like current visited pathName
  const showComponents = [
    "/shop",
    "/ourcatalogs",
    "/aboutus",
    "/gallery",
    "/blog",
    "allCategories",
    "/plants",
    "/soil",
    "/pesticides",
    "/pots",
    "/gardening",
    "/gardner",
    "/gardenScape",
    "/seeds",
    "/shopNow",
    "/explore",
    "/login",
  ].includes(currentRoutePath.pathname);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
      {!showComponents && <Carousel />}
      {!showComponents && <Card />}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "shop", element: <DetailsComingSoon /> },
      { path: "ourcatalogs", element: <DetailsComingSoon /> },
      { path: "aboutus", element: <DetailsComingSoon /> },
      { path: "gallery", element: <DetailsComingSoon /> },
      { path: "blog", element: <DetailsComingSoon /> },
      { path: "plants", element: <DetailsComingSoon /> },
      { path: "soil", element: <DetailsComingSoon /> },
      { path: "pesticides", element: <DetailsComingSoon /> },
      { path: "pots", element: <DetailsComingSoon /> },
      { path: "gardening", element: <DetailsComingSoon /> },
      { path: "gardner", element: <DetailsComingSoon /> },
      { path: "gardenScape", element: <DetailsComingSoon /> },
      { path: "seeds", element: <DetailsComingSoon /> },
      { path: "shopNow", element: <DetailsComingSoon /> },
      { path: "explore", element: <DetailsComingSoon /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RunningBanner />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
