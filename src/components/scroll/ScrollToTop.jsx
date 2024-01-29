import React from "react";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import "./scrollToTop.css";
const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({ threshold: 500 })}>
      <Fab
        onClick={() => window.scrollTo(0, 0)}
        variant="extended"
        size="small"
        className="scrollToTop"
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
