import * as style from "@/components/pages/signup/signup-right-tab/SignupRightTab.style";
import React, { useRef, useState } from "react";
import SwiperCore, { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SignupPageContent from "@/components/pages/signup/signup-page-content/SignupPageContent";
import SignupRecommenderForm from "@/components/pages/signup/signup-recommender-form/SignupRecommenderForm";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function SignupRightTab() {
  const swiperRef = useRef();
  const [isSignupPageContent, setIsSignupPageContent] = useState(true);

  const handleSlideChange = () => {
    setIsSignupPageContent(!isSignupPageContent);
  };

  return (
    <style.SignRightTabContainer>
      {isSignupPageContent && (
        <style.ScrollDownButton>
          <Image
            src="/assets/icon/ScrollDownButton.svg"
            alt="scrollupbutton"
            loader={() => "/assets/icon/ScrollDownButton.svg"}
            width={24}
            height={24}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </style.ScrollDownButton>
      )}
      {!isSignupPageContent && (
        <style.ScrollUpButton>
          <Image
            src="/assets/icon/ScrollUpButton.svg"
            alt="scrollupbutton"
            loader={() => "/assets/icon/ScrollUpButton.svg"}
            width={24}
            height={24}
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </style.ScrollUpButton>
      )}
      <Swiper
        style={{ width: "100%", height: "100%" }}
        direction="vertical"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <SignupPageContent />
        </SwiperSlide>
        <SwiperSlide>
          <SignupRecommenderForm />
        </SwiperSlide>
      </Swiper>
    </style.SignRightTabContainer>
  );
}
