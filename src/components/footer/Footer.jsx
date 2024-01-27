import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        mt: "200px",
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          component={Link}
          to="/"
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
