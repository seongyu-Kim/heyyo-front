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
    <div className="sign-right-tab">
      {isSignupPageContent && (
        <div className="scroll-down-button">
          <Image
            src="/icon/ScrollDownButton.svg"
            alt="scrollupbutton"
            loader={() => "/icon/ScrollDownButton.svg"}
            width={24}
            height={24}
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      )}
      {!isSignupPageContent && (
        <div className="scroll-up-button">
          <Image
            src="/icon/ScrollUpButton.svg"
            alt="scrollupbutton"
            loader={() => "/icon/ScrollUpButton.svg"}
            width={24}
            height={24}
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>
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

      {/* CSS */}
      <style jsx>
        {`
          .sign-right-tab {
            position: absolute;
            overflow: hidden;
            width: 41.5rem;
            height: 37.4375rem;
            background: #fff;
            box-shadow: 4px 4px 30px 2px rgba(0, 0, 0, 0.1);
            left: 48.63rem;
            right: 29.88rem;
            top: 17.81rem;
            bottom: 12.25rem;
          }

          .scroll-up-button {
            position: absolute;
            max-width: 100%;
            width: 62.5rem;
            height: 1.5rem;
            left: 50%;
            top: 2.52rem;
            z-index: 100;
          }
          .scroll-down-button {
            position: absolute;
            max-width: 100%;
            width: 62.5rem;
            height: 1.5rem;
            left: 50%;
            bottom: 1.02rem;
            z-index: 100;
          }
        `}
      </style>
    </div>
  );
}
