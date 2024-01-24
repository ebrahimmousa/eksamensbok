import React from "react";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
const Main = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
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
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in an exclusive brand selection
          </Typography>
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
            value="left"
            aria-label="left aligned"
          >
            All Books{" "}
          </ToggleButton>
          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="center"
            aria-label="centered"
          >
            Books{" "}
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="right"
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
        {["as", "sd", "ff", "sss"].map((item) => {
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
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    tshirt{" "}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    1299
                  </Typography>
                </Stack>
                <Typography variant="body2" component="text.secondary">
                  dknskdnsaljdnsaljdnasjldn{" "}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button sx={{ textTransform: "capitalize" }} size="small">
                  Add to cart
                </Button>
                <Rating precision={0.5} name="read-only" value={4.5} readOnly />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Main;
