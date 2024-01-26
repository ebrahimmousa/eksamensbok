import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementera logiken för att hantera kontaktformuläret här
  };

  return (
    <Box
      sx={{
        mt: "100px", // Justerat avståndet från toppen
        bgcolor: "beige", // Ändrad bakgrundsfärg
        p: 3, // Ökat padding
        borderRadius: "8px", // Rundade hörn
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="right">
          Contact US
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
            rows={4} // Ökad antal rader
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }} // Justerat avståndet från toppen
          >
            Skicka
          </Button>
        </Box>
      </form>
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"balck"}
        variant="h6"
        sx={{ fontSize: 18, mt: 2 }} // Justerat avståndet från toppen
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            alignItems: "center",
          }}
          variant="text"
          color="primary"
        >
          Ebrahim Mousa
        </Button>
        2024
      </Typography>
    </Box>
  );
};

export default Footer;
