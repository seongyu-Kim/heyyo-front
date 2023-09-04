import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ShareLayout from "@/components/pages/share/share-layout/ShareLayout";
import ShareBanner from "@/components/pages/share/share-banner/ShareBanner";
import ShareBox from "@/components/pages/share/share-box/ShareBox";
import ShareMiddleBar from "@/components/pages/share/share-middle-bar/ShareMiddleBar";
import ShareBottomBox from "@/components/pages/share/share-bottom-box/ShareBottomBox";
import PaginationDiv from "@/components/pages/share/pagination/Pagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Navigation, Pagination, A11y } from "swiper/modules";

const CustomSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: gray;
  }
`;

export default function ReferenceRoom() {
  return (
      <ShareLayout>
        <CustomSwiper
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, A11y]}
        >
          <SwiperSlide>
            <ShareBanner />
            <ShareBox />
            <ShareMiddleBar />
            {/*<ShareTextBox/>*/}
            <ShareBottomBox />
            {/*<ShareDiffBottomBox/>*/}
            <PaginationDiv />
          </SwiperSlide>
        </CustomSwiper>
      </ShareLayout>
  );
}
