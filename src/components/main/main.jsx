import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Main = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setmyData(newValue);
  };
  const theme = useTheme();

  return (
    <Container sx={{ mt: 5 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      ></Stack>
      <Box
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 8,
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          About Us
        </Typography>
        <Typography>
          Welcome to our platform! We are dedicated to providing high-quality
          products and services to our customers. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. ...
        </Typography>
        <Typography>
          Welcome to our platform! We are dedicated to providing high-quality
          products and services to our customers. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. ...
        </Typography>
        <Typography>
          Welcome to our platform! We are dedicated to providing high-quality
          products and services to our customers. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. ...
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      ></Stack>
    </Container>
  );
};
// };

export default Main;
