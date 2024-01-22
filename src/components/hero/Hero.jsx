import React from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./Slider.css";
const Hero = () => {
  return (
    <Container>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src=".\src\Images\image1.jpg" alt="img1"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src=".\src\Images\image2.jpg" alt="img2"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Hero;
