import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        mt: "160px",
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        textAlign: "center", // Center text for smaller screens
        "@media (max-width: 480px)": {
          mt: "40px", // Adjust margin-top for screens up to 480px width
        },
        "@media (min-width: 481px) and (max-width: 768px)": {
          mt: "80px", // Adjust margin-top for screens from 481px to 768px width
        },
        "@media (min-width: 769px) and (max-width: 1024px)": {
          mt: "120px", // Adjust margin-top for screens from 769px to 1024px width
        },
        "@media (min-width: 1025px) and (max-width: 1280px)": {
          mt: "160px", // Adjust margin-top for screens from 1025px to 1280px width
        },
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
          to="https://github.com/ebrahimmousa"
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
