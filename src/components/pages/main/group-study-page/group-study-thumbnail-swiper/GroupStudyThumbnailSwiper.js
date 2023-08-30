import * as style from "@/components/pages/main/group-study-page/group-study-thumbnail-swiper/GroupStudyThumbnailSwiper.style";
import GroupStudyThumbnail from "@/components/pages/main/group-study-page/group-study-thumbnail/GroupStudyThumbnail";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function GroupStudyThumbnailSwiper() {
  return (
    <style.SwiperBox
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <GroupStudyThumbnail />
      </SwiperSlide>
      <SwiperSlide>
        <GroupStudyThumbnail />
      </SwiperSlide>
      <SwiperSlide>
        <GroupStudyThumbnail />
      </SwiperSlide>
    </style.SwiperBox>
  );
}
