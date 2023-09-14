import * as style from "@/components/pages/notice/notice-question-container/NoticeQuestionPagination.style";
import {
  PaginationDiv,
  PaginationNextStyle,
  PaginationStyle,
} from "@/components/pages/notice/notice-question-container/NoticeQuestionPagination.style";
import Image from "next/image";
import NoticeWritingTab from "@/components/pages/notice/notice-writing-tab/NoticeWritingTab";
import React, { useState } from "react";

export default function NoticeQuestionPagination() {
  const [isWritingTabVisible, setWritingTabVisible] = useState(false);

  const handleWritingButtonClick = () => {
    setWritingTabVisible(true);
  };
  const handleCloseWritingTab = () => {
    setWritingTabVisible(false);
  };
  return (
    <style.PaginationContainer>
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

      <div className="button-and-popup-container">
        <style.WritingButton>
          <button onClick={handleWritingButtonClick}>
            <Image
              src="assets/img/writingButton.svg"
              alt="책갈피 아이콘"
              loader={() => "assets/img/writingButton.svg"}
              width={46}
              height={46}
            />
          </button>
        </style.WritingButton>
        {isWritingTabVisible && (
          <div className="popup-overlay">
            <NoticeWritingTab onClose={handleCloseWritingTab} />
          </div>
        )}
      </div>
    </style.PaginationContainer>
  );
}
