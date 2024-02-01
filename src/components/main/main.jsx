import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import WelcomeBanner from "./WelcomeBanner";

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
          "@media (max-width: 480px)": {
            borderRadius: 0,
          },
          "@media (min-width: 481px) and (max-width: 767px)": {
            p: 2,
          },
          "@media (min-width: 768px) and (max-width: 1023px)": {
            mt: 5,
            p: 4,
          },
          "@media (min-width: 1024px) and (max-width: 1279px)": {
            mt: 6,
            p: 5,
          },
          "@media (min-width: 1280px)": {
            mt: 7,
            p: 6,
          },
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          About Us - Dive into the World of Books with Us
        </Typography>
        <Typography
          sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}
        >
          Immerse yourself in the enchanting world of literature with our
          platform. We are passionate about bringing you the finest selection of
          books, providing a literary journey like no other.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          At our core, we believe in the power of stories to inspire, educate,
          and transform lives. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam eu justo in elit interdum tristique. Proin
          vitae congue urna. Sed ultricies tristique sapien, vitae dapibus nunc
          hendrerit vel.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Join us for our upcoming literary seminars and lectures:
          <ul>
            <li>
              <strong>Book Exploration Seminar:</strong> Discover the hidden
              gems in literature. Date: February 15, 2024.
            </li>
            <li>
              <strong>Guest Lecture by Renowned Author:</strong> An insightful
              talk on the art of storytelling. Date: March 10, 2024.
            </li>
            <li>
              <strong>Classics Revisited Workshop:</strong> Rekindle your love
              for timeless classics. Date: April 5, 2024.
            </li>
          </ul>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Our curated collection spans various genres, from timeless classics to
          contemporary masterpieces. Whether you're an avid reader or just
          starting your literary adventure, our platform is a haven for book
          enthusiasts. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed ac ex nec lacus accumsan pharetra vel eu lectus.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Join us in celebrating the magic of words, as we strive to foster a
          community that shares the joy of reading. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur vel mi nec augue interdum
          vehicula ac non enim. Fusce auctor, justo nec pellentesque imperdiet,
          ligula elit vestibulum lectus, eu bibendum nunc felis a neque.
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      ></Stack>
      <WelcomeBanner />
    </Container>
  );
};
export default Main;
