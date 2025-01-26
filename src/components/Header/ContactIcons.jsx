import { Box, IconButton, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ContactIcons(props) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", marginRight: "5px" }}>
        {!props.isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", marginRight: 3 }}>
            <PhoneIcon sx={{ color: "green", marginRight: 1 }} />
            <Typography variant="body2">
              Call Now
              <br />
              <b>+91 XXX-XXX-XXX-X</b>
            </Typography>
          </Box>
        )}
        <IconButton component={Link} to={`/login`} sx={{ marginRight: 2 }}>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        {props.isMobile && (
          <IconButton onClick={props.toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>
    </>
  );
}
export default ContactIcons;
