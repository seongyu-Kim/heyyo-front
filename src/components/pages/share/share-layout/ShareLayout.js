import React, { useState } from "react";
import ShareBox from "@/components/pages/share/share-box/ShareBox";
import ShareMiddleBar from "@/components/pages/share/share-middle-bar/ShareMiddleBar";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ShareBottomBox from "@/components/pages/share/share-bottom-box/ShareBottomBox";
import ShareBanner from "@/components/pages/share/share-banner/ShareBanner";
import ShareDiffBottomBox from "@/components/pages/share/share-diff-bottom-box/ShareDiffBottomBox";
import styled from "styled-components";

const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: gray;
  }
`;

export default function ShareLayout() {
  const [selectedTab, setSelectedTab] = useState("ShareDiffBottomBox"); // 초기 선택 탭 설정

  return (
    <CustomSwiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, A11y]}
    >
      <SwiperSlide>
        <ShareBanner />
        <ShareBox />
        <ShareMiddleBar setSelectedTab={setSelectedTab} />
        {selectedTab === "ShareDiffBottomBox" && <ShareDiffBottomBox />}
        {selectedTab === "ShareBottomBox" && <ShareBottomBox />}
      </SwiperSlide>
    </CustomSwiper>
  );
}
