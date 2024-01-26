// Footer.jsx

import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle the contact form here
  };

  return (
    <Box className="footer-container">
      <form onSubmit={handleSubmit} className="form-container">
        <Typography variant="h5" color="primary">
          Contact US
        </Typography>
        <TextField
          label="Namn"
          variant="outlined"
          size="small"
          margin="dense"
          required
        />
        <TextField
          label="E-post"
          variant="outlined"
          size="small"
          margin="dense"
          required
        />
        <TextField
          label="Meddelande"
          variant="outlined"
          size="small"
          margin="dense"
          multiline
          rows={4}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className="button-container"
        >
          Skicka
        </Button>
      </form>
      <Typography className="text-container">
        Designed and developed by
        <Button variant="text" color="primary">
          Ebrahim Mousa
        </Button>
        2024
      </Typography>
    </Box>
  );
};

export default Footer;
