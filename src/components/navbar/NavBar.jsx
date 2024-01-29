import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            ExamensBok
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact Us
          </Button>
          <Button component={Link} to="/all-products" color="inherit">
            All Products{" "}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
