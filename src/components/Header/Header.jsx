import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import MyImage from '../../assets/images/logo.jpg';
import { useState } from 'react';

const Header = () => {
  //media query to dynamically know the size of the screen, based on that show the content
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));
  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        {['Shop', 'Our Catalogs', 'About Us', 'Landscaping', 'Gallery', 'Blog'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`/${text.toLowerCase().replace(' ', '')}`}> {/* when any opetion is selected this line will convert it into a proper URL /ourCatalogs */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #ddd',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', paddingX: 2 }}>
        {/* Left Section - Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={MyImage}
            alt="Logo"
            style={{
              height: isMobile ? 50 : 70,
              marginRight: 10,
            }}
          />
          {!isMobile && (
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', fontSize: isTablet ? '1.2rem' : '1.5rem' }}
            >
              Plant Nest
            </Typography>
          )}
        </Box>

        {/* Middle Section - Search Bar */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, marginX: 3 }}>
            <Select defaultValue="All categories" sx={{ width: 150, marginRight: 1 }}>
              <MenuItem value="All categories">All categories</MenuItem>
              <MenuItem value="Indoor Plants">Indoor Plants</MenuItem>
              <MenuItem value="Outdoor Plants">Outdoor Plants</MenuItem>
            </Select>
            <TextField
              placeholder="What are you looking for?"
              fullWidth
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}

        {/* Right Section - Contact and Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 3 }}>
              <PhoneIcon sx={{ color: 'green', marginRight: 1 }} />
              <Typography variant="body2">
                Call Now
                <br />
                <b>+91 XXX-XXX-XXX-X</b>
              </Typography>
            </Box>
          )}
          <IconButton href="/login" sx={{ marginRight: 2 }}>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          {isMobile && (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Bottom Navigation - Links -- for Desktop and Tablets */}
      {!isMobile && (
        <Box sx={{ backgroundColor: '#f9f9f9', paddingY: 1 }}>
          <Toolbar sx={{ justifyContent: 'center', gap: 3 }}>
            {['Shop', 'Our Catalogs', 'About Us', 'Landscaping', 'Gallery', 'Blog'].map((text) => (
              <Button key={text} href={`/${text.toLowerCase().replace(' ', '')}`} sx={{ color: '#000', textTransform: 'none' }}>
                {text}
              </Button>
            ))}
          </Toolbar>
        </Box>
      )}

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;
