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
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/NavBar";
import { red } from "@mui/material/colors";

const AllProductsPage = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newValue) => {
    setAlignment(newValue);
    setmyData(newValue);
  };

  const theme = useTheme();
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const allProductsAPI = "products?populate=*";
  const booksCategoryAPI = "products?populate=*&filters[category][$eq]=books";
  const audioCategoryAPI = "products?populate=*&filters[category][$eq]=Audio";

  const [myData, setmyData] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  const renderCart = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + item.attributes.productPrice * item.quantity,
      0
    );

    return (
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          maxHeight: "80vh",
          overflowY: "auto",
          color: "black",
          background: "beige",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Cart:
        </Typography>
        {cart.length === 0 ? (
          <h3>The Shopping Cart is empty</h3>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <React.Fragment key={item.id}>
                <li
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
                    <p>
                      {item.attributes.productName} (x{item.quantity})
                    </p>
                    <p>{item.attributes.productPrice * item.quantity} kr</p>
                    <Button
                      onClick={() => removeFromCart(item)}
                      style={{ cursor: "pointer", color: "red" }}
                    >
                      🗑️
                    </Button>
                  </div>
                </li>
                {index < cart.length - 1 && <hr style={{ margin: "8px 0" }} />}
              </React.Fragment>
            ))}
          </ul>
        )}
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          Total: {totalPrice} kr
        </Typography>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    );
  };

  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <Header />

        <Container sx={{ flex: 1, mt: 5 }}>
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
                value={booksCategoryAPI}
                aria-label="centered"
              >
                Books{" "}
              </ToggleButton>
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="myButton"
                value={audioCategoryAPI}
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
            sx={{ marginBottom: "60px" }}
          >
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
            {isCartOpen && renderCart()}
            {data.data.map((item) => {
              return (
                <Card
                  key={item.id}
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
                    <Button
                      sx={{ textTransform: "capitalize" }}
                      size="small"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
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
        <Footer />
      </Box>
    );
  }
};

export default AllProductsPage;
