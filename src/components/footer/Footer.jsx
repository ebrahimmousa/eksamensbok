import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "200px",
        bgcolor: "#2B3445", // Corrected color format
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"} // Corrected value
        color={"HighlightText"} // Corrected value
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
            alignItems: "center", // Corrected value
          }}
          variant="text"
          color="primary"
        >
          Ebrahim Mousa
        </Button>
        2024
      </Typography>
    </Box>
  );
};

export default Footer;
