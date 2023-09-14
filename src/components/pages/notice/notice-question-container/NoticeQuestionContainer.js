import { useState } from "react";
import * as style from "@/components/pages/notice/notice-question-container/NoticeQuestionContainer.style";
import Image from "next/image";
import React from "react";
import NoticeWorriedBox from "@/components/pages/notice/notice-question-box/NoticeWorriedBox";
import NoticeQuestionBox from "@/components/pages/notice/notice-question-box/NoticeQuestionBox";

export default function Question() {
  const [selectedTab, setSelectedTab] = useState("궁금해요");

  return (
    <style.QuestionContainer active={true}>
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
        <style.QuestionListTitle
          onClick={() => setSelectedTab("궁금해요")}
          active={selectedTab === "궁금해요"}
        >
          궁금해요
        </style.QuestionListTitle>
        <style.WorryListTitle
          onClick={() => setSelectedTab("고민해요")}
          active={selectedTab === "고민해요"}
        >
          고민해요
        </style.WorryListTitle>
        <style.TabImages>
          {selectedTab === "궁금해요" && (
            <Image
              src="/assets/img/NewTabButton.svg"
              alt="궁금해요TabButton"
              loader={() => "/assets/img/NewTabButton.svg"}
              width={1221}
              height={7}
            />
          )}
          {selectedTab === "고민해요" && (
            <Image
              src="/assets/img/BestTabButton.svg"
              alt="고민해요TabButton"
              loader={() => "/assets/img/BestTabButton.svg"}
              width={1221}
              height={7}
            />
          )}
        </style.TabImages>
      </style.CategoryContainer>
      <div
        style={{
          position: "absolute",
          top: "24.7rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {selectedTab === "궁금해요" && <NoticeQuestionBox />}
        {selectedTab === "고민해요" && <NoticeWorriedBox />}
      </div>
    </style.QuestionContainer>
  );
}
