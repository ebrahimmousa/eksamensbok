import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import { useGetproductByNameQuery } from "../Redux/product";
import Cart from "../cart/Cart";
import { addToCart } from "../Redux/cartSlice";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/NavBar";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const cart = useSelector((state) => state.cart);
  const [myData, setmyData] = useState("products?populate=*");
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
            value={myData}
            exclusive
            onChange={(event, newValue) => setmyData(newValue)}
            aria-label="text alignment"
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="products?populate=*"
              aria-label="left aligned"
            >
              All Books
            </ToggleButton>

            <ToggleButton
              sx={{
                mx: "16px !important",

                color: theme.palette.text.primary,
              }}
              className="myButton"
              value="products?populate=*&filters[category][$eq]=books"
              aria-label="centered"
            >
              Books
            </ToggleButton>

            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myButton"
              value="products?populate=*&filters[category][$eq]=Audio"
              aria-label="right aligned"
            >
              Audio Books
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
            onClick={() => setIsCartOpen(!isCartOpen)}
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
            <Cart />
          </Button>

          {isLoading && (
            <Box sx={{ py: 11, textAlign: "center" }}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Container
              sx={{
                py: 11,

                textAlign: "center",
              }}
            >
              <Typography variant="h6">{error.error}</Typography>

              <Typography variant="h6">Please try again later</Typography>
            </Container>
          )}

          {data && (
            <>
              {data.data.map((item) => (
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
                    <Typography variant="body2" component="div">
                      {item.attributes.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      sx={{ textTransform: "capitalize" }}
                      size="small"
                      onClick={() =>
                        dispatch(addToCart({ ...item, quantity: 1 }))
                      }
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
              ))}
            </>
          )}
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
};

export default AllProductsPage;
