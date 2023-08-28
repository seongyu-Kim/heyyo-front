import React from "react";
import Image from "next/image";
import {
  BoxDiv,
  BtnContent,
  BtnDiv,
  SurveyImgDiv,
  TitleDiv,
} from "@/components/pages/survey/survey-start-page/SurveyStartPage.style";

export default function SurveyStartPage({ handleNextPage }) {
  return (
    <BoxDiv>
      <TitleDiv>해요와 발자국을 함께 하시게 된 걸 축하해요!</TitleDiv>
      <SurveyImgDiv>
        <Image
          src="/assets/img/Survey.svg"
          alt="surveyImg"
          width={400}
          height={350}
        />
      </SurveyImgDiv>
      <BtnDiv onClick={() => handleNextPage(1)}>
        <BtnContent>나의 공부 성향 알아보기</BtnContent>
      </BtnDiv>
    </BoxDiv>
  );
}
