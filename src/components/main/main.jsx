import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { useGetproductByNameQuery } from "../Redux/product";

const Main = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setmyData(newValue);
  };
  const theme = useTheme();

  const allProductsAPI = "products?populate=*";
  const booksCatergoryAPI = "products?populate=*&filters[category][$eq]=books";
  const AudioCatergoryAPI = "products?populate=*&filters[category][$eq]=Audio";

  const [myData, setmyData] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          py: 11,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>

        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ mt: 5 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        ></Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        ></Stack>
      </Container>
    );
  }
};

export default Main;
