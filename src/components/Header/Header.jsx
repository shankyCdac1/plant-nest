import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  MenuItem,
  Select,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MyImage from "../../assets/images/logo.jpg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import ContactIcons from "./ContactIcons";

const Header = () => {
  //media query to dynamically know the size of the screen, based on that show the content
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        {["Shop", "Our Catalogs", "About Us", "Gallery", "Blog"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${text.toLowerCase().replace(" ", "")}`}
            >
              {" "}
              {/* when any opetion is selected this line will convert it into a proper URL /ourCatalogs */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", paddingX: 2 }}>
          {/* Left Section - Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={MyImage}
              alt="Logo"
              style={{
                height: isMobile ? 50 : 70,
                marginRight: 10,
              }}
              onClick={() => (window.location.href = "/")}
            />

            {!isMobile && (
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: isTablet ? "1.2rem" : "1.5rem",
                }}
              >
                Plant Nest
              </Typography>
            )}
          </Box>

          {/* Middle Section - Search Bar */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                marginX: 3,
              }}
            >
              <Select
                defaultValue="All categories"
                sx={{ width: 150, marginRight: 1 }}
              >
                <MenuItem value="All categories" component={Link} to={"/"}>
                  All categories
                </MenuItem>
                <MenuItem value="Plants" component={Link} to={"/plants"}>
                  Plants
                </MenuItem>
                <MenuItem
                  value="Soil and Fertilizers"
                  component={Link}
                  to={"/soil"}
                >
                  Soil and Fertilizers
                </MenuItem>
                <MenuItem
                  value="Pesticides"
                  component={Link}
                  to={"/pesticides"}
                >
                  Pesticides
                </MenuItem>
                <MenuItem
                  value="Pots and Planters"
                  component={Link}
                  to={"/pots"}
                >
                  Pots and Planters
                </MenuItem>
                <MenuItem
                  value="Gardening Tools and Equipments"
                  component={Link}
                  to={"/gardening"}
                >
                  Gardening Tools and Equipments
                </MenuItem>
                <MenuItem value="Mali" component={Link} to={"/gardner"}>
                  Mali
                </MenuItem>
                <MenuItem
                  value="Gardenscape Designs"
                  component={Link}
                  to={"/gardenScape"}
                >
                  Gardenscape Designs
                </MenuItem>
                <MenuItem value="Seeds" component={Link} to={"/seeds"}>
                  Seeds
                </MenuItem>
              </Select>

              {/* Search Component */}
              <SearchComponent />
            </Box>
          )}

          {/* Right Section - Contact and Icons */}
          <ContactIcons isMobile={isMobile} toggleDrawer={toggleDrawer} />
          
        </Toolbar>

        {/* Bottom Navigation - Links -- for Desktop and Tablets */}
        {!isMobile && (
          <Box sx={{ backgroundColor: "#f9f9f9", paddingY: 1 }}>
            <Toolbar sx={{ justifyContent: "center", gap: 3 }}>
              {["Shop", "Our Catalogs", "About Us", "Gallery", "Blog"].map(
                (text) => (
                  <Button
                    key={text}
                    component={Link}
                    to={`/${text.toLowerCase().replace(" ", "")}`}
                    sx={{ color: "#000", textTransform: "none" }}
                  >
                    {text}
                  </Button>
                )
              )}
            </Toolbar>
          </Box>
        )}
        {/* Drawer for Mobile Navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          {drawerContent}
        </Drawer>
      </AppBar>
      <Outlet /> {/* for showing child components from create browser router */}
    </>
  );
};
export default Header;