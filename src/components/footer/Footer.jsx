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
        textAlign: "center",
        "@media (max-width: 480px)": {
          mt: "40px",
        },
        "@media (min-width: 481px) and (max-width: 768px)": {
          mt: "80px",
        },
        "@media (min-width: 769px) and (max-width: 1024px)": {
          mt: "120px",
        },
        "@media (min-width: 1025px) and (max-width: 1280px)": {
          mt: "160px",
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
