import { Box, Paper, Typography } from "@mui/material";

const Links = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover": { cursor: "pointer" },
      }}
    >
      <Typography variant="body1">{title}</Typography>

      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          transform: "translateX(-50%)",
          display: "none",
          left: "25%",
        }}
      ></Box>
    </Box>
  );
};

export default Links;
