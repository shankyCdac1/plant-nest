import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import styles from "./Card.module.css";
import { experimentalStyled as style } from "@mui/material";
import CardDetails from "./CardDetails.js";
import { Link } from "react-router-dom";

const Item = style(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: "20px",
  textAlign: "center",
  color: "#fff",
  borderRadius: "10px",
  height: "250px",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "200px",
    padding: "10px",
  },
}));

function Card() {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: { xs: "10px", sm: "140px" } }}>
        <Box className={styles.heading} >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              margin: "20px 0",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Categories
          </Typography>
        </Box>
        <Grid
          container
          spacing={1}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {CardDetails.map((item) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              key={item.id}
               sx={{
                width: { xs: "100%", sm: "50%", md: "33%" },
                margin: { xs: "0", sm: "auto" },
              }} 
            >
              <Item
                style={{
                  backgroundImage: `url(${
                    item.image
                  })`,
                }}
              >
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <Button
                  variant="contained"
                  component={Link}
                  to={`/${item.to}`}
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "#ff5722", // #4caf50
                    color: "#fff",
                  }}
                >
                  {item.buttonText}
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Card;
