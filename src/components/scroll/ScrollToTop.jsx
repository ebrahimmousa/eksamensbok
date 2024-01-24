import React from "react";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTop = () => {
  return (
    <div>
      <Fab
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />{" "}
      </Fab>
      ;
    </div>
  );
};

export default ScrollToTop;
