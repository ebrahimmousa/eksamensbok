import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
  Button,
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
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
        <Button
          onClick={toggleCart}
          sx={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            position: "fixed",
            top: "10px",
            right: "10px",
          }}
        >
          🛒
        </Button>
        {isCartOpen && (
          <div
            style={{
              position: "fixed",
              top: "100px",
              right: "20px",
              transform: "translate(-50%, -50%)",
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              zIndex: 1,
            }}
          >
            <h3>The Shopping Cart is empty</h3>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${
                      item.attributes.productImage.data[0].attributes.url
                    }`}
                    alt={item.attributes.productName}
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  <div>
                    <p>{item.attributes.productName}</p>
                    <p>{item.attributes.productPrice} kr</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
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
  }
};

export default Main;
