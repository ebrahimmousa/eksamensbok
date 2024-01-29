import React from "react";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./Slider.css";

const Hero = () => {
  return (
    <Container>
      <div>
        <Swiper
          autoplay={{ delay: 2000 }}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="parent-slider">
            <Box
              sx={{
                display: "flex",
                overflow: "hidden",
                borderRadius: "15px",
                height: "400px",
              }}
            >
              <img src=".\src\Images\library.jpg" alt="img1"></img>
            </Box>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                overflow: "hidden",
                borderRadius: "15px",
                height: "400px",
              }}
            >
              <img src=".\src\Images\Library2.jpg" alt="img1"></img>
            </Box>{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Hero;
