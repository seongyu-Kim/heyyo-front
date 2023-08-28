import React from "react";
import Image from "next/image";
import {
  BgContent,
  BgDiv,
  BoxDiv,
  BtnContent,
  BtnDiv,
  BtnDiv2,
  TitleDiv,
  TitleTypeDiv,
} from "@/components/pages/survey/survey-result-page/SurveyResultPage.style";
export default function SurveyResult({
  restartSurvey,
  selectedData,
  titleColor,
  bgColor,
  contentColor,
}) {
  const imageStyle = {
    position: "absolute",
    top: selectedData.imgPosition?.top || 0,
    left: selectedData.imgPosition?.left || 0,
  };
  return (
    <>
      <BoxDiv>
        <TitleDiv>
          해요님은{" "}
          <TitleTypeDiv color={titleColor}>
            &apos;{selectedData.title}&apos;
          </TitleTypeDiv>{" "}
          타입이시군요!
        </TitleDiv>

        <BgDiv bgColor={bgColor}>
          <Image
            alt="characterImage"
            src={selectedData.img}
            width={selectedData.width}
            height={selectedData.height}
            style={imageStyle}
          />
          <BgContent color={contentColor}>{selectedData.hashtag}</BgContent>
        </BgDiv>

        <BtnDiv>
          <BtnContent>내 타입 그룹방 바로가기 </BtnContent>
        </BtnDiv>

        <BtnDiv2 onClick={restartSurvey}>테스트 다시하기</BtnDiv2>
      </BoxDiv>
    </>
  );
}
