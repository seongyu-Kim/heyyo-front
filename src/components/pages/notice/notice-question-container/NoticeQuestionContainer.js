import * as style from "@/components/pages/notice/notice-question-container/NoticeQuestionContainer.style";
import Image from "next/image";
import React from "react";
import NoticeQuestionBox from "@/components/pages/notice/notice-question-box/NoticeQuestionBox";
import {
  PaginationDiv,
  PaginationNextStyle,
  PaginationStyle,
} from "@/components/pages/notice/notice-question-container/NoticeQuestionContainer.style";

export default function Question() {
  const questionBoxCount = 3;
  return (
    <style.QuestionContainer>
      <style.ContainerTitle>궁금증을 공유해요!</style.ContainerTitle>
      <style.SearchBox>
        <style.SearchIcon>
          <Image
            src="assets/img/Search.svg"
            alt="돋보기"
            loader={() => "assets/img/Search.svg"}
            width={28}
            height={28}
          />
        </style.SearchIcon>
      </style.SearchBox>

      <style.CategoryContainer>
        <style.QuestionListTitle>궁금해요</style.QuestionListTitle>
        <style.WorryListTitle>고민해요</style.WorryListTitle>
        <style.GrayBar />
        <style.BlueBar />
      </style.CategoryContainer>

      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "34.7rem",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {[...Array(questionBoxCount)].map((_, index) => (
          <NoticeQuestionBox key={index} />
        ))}
      </div>

      <PaginationDiv>
        <PaginationStyle>1</PaginationStyle>
        <PaginationStyle>2</PaginationStyle>
        <PaginationStyle>3</PaginationStyle>
        <PaginationStyle>4</PaginationStyle>
        <PaginationStyle>5</PaginationStyle>
        <PaginationStyle>6</PaginationStyle>
        <PaginationStyle>7</PaginationStyle>
        <PaginationStyle>8</PaginationStyle>
        <PaginationStyle>9</PaginationStyle>
        <PaginationStyle>10</PaginationStyle>
        <PaginationNextStyle>[다음 10개]</PaginationNextStyle>
      </PaginationDiv>

      <style.WritingButton>
        <Image
          src="assets/img/writingButton.svg"
          alt="책갈피 아이콘"
          loader={() => "assets/img/writingButton.svg"}
          width={46}
          height={46}
        />
      </style.WritingButton>
    </style.QuestionContainer>
  );
}
