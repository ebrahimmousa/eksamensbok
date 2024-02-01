import React from "react";
import { Typography, Container } from "@mui/material";

const WelcomeBanner = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 3 }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "primary.main",
          "@media (max-width: 480px)": { fontSize: "28px" },
          "@media (min-width: 481px) and (max-width: 768px)": {
            fontSize: "32px",
          },
          "@media (min-width: 769px) and (max-width: 1024px)": {
            fontSize: "36px",
          },
          "@media (min-width: 1025px) and (max-width: 1280px)": {
            fontSize: "40px",
          },
        }}
      >
        Welcome to Our Book Oasis
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "text.secondary",
          "@media (max-width: 480px)": { fontSize: "16px" },
          "@media (min-width: 481px) and (max-width: 768px)": {
            fontSize: "18px",
          },
          "@media (min-width: 769px) and (max-width: 1024px)": {
            fontSize: "20px",
          },
          "@media (min-width: 1025px) and (max-width: 1280px)": {
            fontSize: "22px",
          },
        }}
      >
        Embark on a literary journey with us. Explore, discover, and indulge in
        the magic of books.
      </Typography>
    </Container>
  );
};

export default WelcomeBanner;
