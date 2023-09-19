import { useState } from "react";
import * as style from "@/components/pages/notice/notice-question-container/NoticeQuestionContainer.style";
import Image from "next/image";
import React from "react";
import NoticeWorriedBox from "@/components/pages/notice/notice-question-box/NoticeWorriedBox";
import NoticeQuestionBox from "@/components/pages/notice/notice-question-box/NoticeQuestionBox";
import { QuestionTitleBox } from "@/components/pages/notice/notice-question-container/NoticeQuestionContainer.style";

export default function Question() {
  const [selectedTab, setSelectedTab] = useState("궁금해요");

  return (
    <style.QuestionContainer>
      {selectedTab === "궁금해요" && (
        <style.ContainerTitle>궁금증을 공유해요!</style.ContainerTitle>
      )}
      {selectedTab === "고민해요" && (
        <style.ContainerTitle>고민을 함께 나눠요!</style.ContainerTitle>
      )}
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
        <style.QuestionTitleBox>
          <style.QuestionCuriousBox
            active={selectedTab === "궁금해요"}
            onClick={() => setSelectedTab("궁금해요")}
          >
            <style.QuestionCuriousText>궁금해요</style.QuestionCuriousText>
          </style.QuestionCuriousBox>
          <style.QuestionCuriousBox
            active={selectedTab === "고민해요"}
            onClick={() => setSelectedTab("고민해요")}
          >
            <style.QuestionCuriousText>고민해요</style.QuestionCuriousText>
          </style.QuestionCuriousBox>
          <style.QuestionCuriousBox></style.QuestionCuriousBox>
        </style.QuestionTitleBox>
      </style.CategoryContainer>
      <div
        style={{
          position: "relative",
        }}
      >
        {selectedTab === "궁금해요" && <NoticeQuestionBox />}
        {selectedTab === "고민해요" && <NoticeWorriedBox />}
      </div>
    </style.QuestionContainer>
  );
}
