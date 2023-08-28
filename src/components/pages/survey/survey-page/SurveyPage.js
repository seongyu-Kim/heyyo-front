import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  BoxContainer,
  BtnContainer,
  BtnContent,
  BtnDiv,
  CharContainer1,
  CharContainer2,
  TitleDiv,
} from "@/components/pages/survey/survey-page/SurveyPage.style";

export default function SurveyPage({
  handleNextPage,
  surveyData,
  currentPage,
  setSelectedButton,
  setCurrentPage,
}) {
  const [swiper, setSwiper] = useState(null);
  const [btnHover1, setBtnHover1] = useState("#e9f7ff");
  const [btnHover2, setBtnHover2] = useState("#e9f7ff");

  useEffect(() => {
    if (swiper && currentPage - 2 !== swiper.activeIndex) {
      swiper.slideTo(currentPage - 2, 500);
    }
  }, [currentPage, swiper]);

  const handleBtnHover1 = (btnColor1) => {
    setBtnHover1(btnColor1);
  };
  const handleBtnLeave1 = () => {
    setBtnHover1("#e9f7ff");
  };
  const handleBtnHover2 = (btnColor2) => {
    setBtnHover2(btnColor2);
  };
  const handleBtnLeave2 = () => {
    setBtnHover2("#e9f7ff");
  };
  const NextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const PrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleButtonSelect = (selectedButtonValue) => {
    const currentPageButtons = Object.keys(surveyData)
      .filter((key) => surveyData[key].id + 2 === currentPage)
      .map((key) => surveyData[key].selectedBtn1)
      .concat(
        Object.keys(surveyData)
          .filter((key) => surveyData[key].id + 2 === currentPage)
          .map((key) => surveyData[key].selectedBtn2),
      );
    setSelectedButton((prevSelected) => [
      ...prevSelected.filter((btn) => !currentPageButtons.includes(btn)),
      selectedButtonValue,
    ]);
    handleNextPage(selectedButtonValue);
  };

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, A11y]}
      onSwiper={setSwiper}
      onNavigationNext={NextPage}
      onNavigationPrev={PrevPage}
    >
      {Object.keys(surveyData).map((key) => (
        <SwiperSlide key={key}>
          <TitleDiv>{surveyData[key].title}</TitleDiv>
          <BtnContainer>
            <BoxContainer>
              <CharContainer1
                top={surveyData[key].top1}
                left={surveyData[key].left1}
                width={surveyData[key].width1}
                height={surveyData[key].height1}
                zIndex={surveyData[key].zIndex1}
              >
                <Image src={surveyData[key].img1} alt="CharImage" fill />
              </CharContainer1>
              <BtnDiv
                onClick={() => handleButtonSelect(surveyData[key].selectedBtn1)}
                background={btnHover1}
                onMouseEnter={() => handleBtnHover1(surveyData[key].btnColor1)}
                onMouseLeave={handleBtnLeave1}
              >
                <BtnContent
                  dangerouslySetInnerHTML={{ __html: surveyData[key].btn1 }}
                />
              </BtnDiv>
            </BoxContainer>
            <BoxContainer>
              <CharContainer2
                top={surveyData[key].top2}
                left={surveyData[key].left2}
                width={surveyData[key].width2}
                height={surveyData[key].height2}
                zIndex={surveyData[key].zIndex2}
              >
                <Image src={surveyData[key].img2} alt="CharImage" fill />
              </CharContainer2>

              <BtnDiv
                onClick={() => handleButtonSelect(surveyData[key].selectedBtn2)}
                background={btnHover2}
                onMouseEnter={() => handleBtnHover2(surveyData[key].btnColor2)}
                onMouseLeave={handleBtnLeave2}
              >
                <BtnContent
                  dangerouslySetInnerHTML={{ __html: surveyData[key].btn2 }}
                />
              </BtnDiv>
            </BoxContainer>
          </BtnContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
