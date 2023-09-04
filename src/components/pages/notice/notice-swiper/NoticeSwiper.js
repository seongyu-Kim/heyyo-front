import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import NoticeCompetitionBox from "@/components/pages/notice/notice-competition-box/NoticeCompetitionBox";

const CustomSwiper = styled(Swiper)`
  .swiper-button-next, .swiper-button-prev {
    color: #000;
    font-weight: bold;
    position: absolute;
    top: 25.47rem;
  }
  .swiper-pagination-bullet {
    position: relative;
    bottom: 8.14rem;
    width: 10px; /* Adjust width of the bullet */
    height: 10px; /* Adjust height of the bullet */
    background-color: #565656;; /* Change bullet color */
    opacity: 0.7; /* Adjust opacity */
    transition: opacity 0.2s ease-in-out; /* Add transition effect */
  }
  .swiper-pagination-bullet-active {
    opacity: 1; /* Active bullet opacity */
  }
`;

export default function CompetitionSwiper() {
    const images = [
        "/assets/img/competition1.svg",
        "/assets/img/competition2.svg",
        "/assets/img/competition3.svg"
    ];

    return (
        <CustomSwiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            paginationType="bullets"
            modules={[Navigation, Pagination, A11y]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div style={{display: "flex", position:"relative", top:"16.5rem", justifyContent:"center", alignItems:"center", gap:"6rem"}}>
                    <NoticeCompetitionBox image={images[0]} />
                    <NoticeCompetitionBox image={images[1]} />
                    <NoticeCompetitionBox image={images[2]} />
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </CustomSwiper>
    );
}






