import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import * as style from "@/components/pages/notice/notice-swiper/NoticeSwiper.style";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NoticeCompetitionBox from "@/components/pages/notice/notice-competition-box/NoticeCompetitionBox";

export default function CompetitionSwiper() {
  const images = [
    "/assets/img/competition1.svg",
    "/assets/img/competition2.svg",
    "/assets/img/competition3.svg",
  ];

  return (
    <style.CustomSwiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      paginationType="bullets"
      modules={[Navigation, Pagination, A11y]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <style.SwiperSlide>
          <NoticeCompetitionBox image={images[0]} />
          <NoticeCompetitionBox image={images[1]} />
          <NoticeCompetitionBox image={images[2]} />
        </style.SwiperSlide>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </style.CustomSwiper>
  );
}
