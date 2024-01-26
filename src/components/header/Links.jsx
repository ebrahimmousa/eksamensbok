import React from "react";
import { Box, Typography } from "@mui/material";
import "./Links.css";

const Links = ({ title }) => {
  return (
    <Box className="link-container">
      <Typography variant="body1">{title}</Typography>
      <Box className="show-when-hover"></Box>
    </Box>
  );
};

export default Links;
