import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: #000;
    font-weight: bold;
    position: absolute;
    top: 25.47rem;
  }
  .swiper-pagination-bullet {
    position: relative;
    bottom: 8.14rem;
    width: 10px;
    height: 10px;
    background-color: #565656;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

export const SwiperSlide = styled.div`
  position: relative;
  display: flex;
  top: 16.5rem;
  justify-content: center;
  align-items: center;
  gap: 6rem;
`;
