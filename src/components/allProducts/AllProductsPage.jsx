// AllProductsPage.jsx
import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useGetproductByNameQuery } from "../Redux/product";

const AllProductsPage = () => {
  const [alignment, setAlignment] = useState("left");

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
        >
          <Box>
            <Typography variant="h4">Choose A Category</Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".mui-selected": {
                border: "1px solid rgba (233, 69, 96, 0.5) !important",
                color: "#e94560",
                bgcolor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Books{" "}
            </ToggleButton>
            <ToggleButton
              sx={{
                mx: "16px !important",
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={booksCatergoryAPI}
              aria-label="centered"
            >
              Books{" "}
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value={AudioCatergoryAPI}
              aria-label="right aligned"
            >
              Audio Books{" "}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    scale: "1.1",
                    transition: "1s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={`${import.meta.env.VITE_BASE_URL}${
                    item.attributes.productImage.data[0].attributes.url
                  }`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productName}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      {item.attributes.productPrice}kr
                    </Typography>
                  </Stack>
                  <Typography variant="body2" component="text.secondary">
                    {item.attributes.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button sx={{ textTransform: "capitalize" }} size="small">
                    Add to cart
                  </Button>
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
      </Container>
    );
  }
};

export default AllProductsPage;
