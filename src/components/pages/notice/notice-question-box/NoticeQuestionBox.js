import * as style from "@/components/pages/notice/notice-question-box/NoticeQuestionBox.style";
import Image from "next/image";
import { useState } from "react";

export default function NoticeQuestionBox() {
  const questionBoxCount = 3;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleBoxClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "5rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      {[...Array(questionBoxCount)].map((_, index) => (
        <style.BoxStyle
          key={index}
          onClick={() => handleBoxClick(index)}
          className={index === expandedIndex ? "expanded" : ""}
        >
          <style.QuestListTitle>
            문정과 취업 고민있는 사람 일단 모여봐🙏
          </style.QuestListTitle>
          <style.QuestListContents>
            사서로 취업하고 싶은데 파트너처럼 팀 꾸려서 스터디도 하고,
            공모전이나 대외활동도 지원하고 그런 운명 공동체를 만들어볼까
            하는데... <br />
            혹시 관심 있는 사람? 어떤 방법이 좋을까? 팁 좀 주셔요 선생님들..
          </style.QuestListContents>
          <style.HashTagDiv>
            <style.HashtagContainer>
              <style.HashtagBox>
                <style.HashtagContent>#공모전</style.HashtagContent>
              </style.HashtagBox>
              <style.HashtagBox>
                <style.HashtagContent>#스터디</style.HashtagContent>
              </style.HashtagBox>
              <style.HashtagBox>
                <style.HashtagContent>#취업</style.HashtagContent>
              </style.HashtagBox>
            </style.HashtagContainer>
          </style.HashTagDiv>
          <style.BottomBox>
            <style.HeyyoText>해요</style.HeyyoText>
            <style.TimeText>13분전</style.TimeText>
            <style.Icons>
              <style.ViewIcon>
                <Image
                  src="assets/img/views.svg"
                  alt="조회수 아이콘"
                  loader={() => "assets/img/views.svg"}
                  width={35.118}
                  height={26.936}
                />
              </style.ViewIcon>
              <style.ViewNum>462</style.ViewNum>
              <style.CommentIcon>
                <Image
                  src="assets/img/Comment.svg"
                  alt="댓글 아이콘"
                  loader={() => "assets/img/Comment.svg"}
                  width={28.004}
                  height={26.778}
                />
              </style.CommentIcon>
              <style.CommentNum>9</style.CommentNum>
              <style.BookmarkIcon>
                <Image
                  src="assets/img/bookmark.svg"
                  alt="책갈피 아이콘"
                  loader={() => "assets/img/bookmark.svg"}
                  width={22.99}
                  height={30}
                />
              </style.BookmarkIcon>
              <style.BookmarkNum>38</style.BookmarkNum>
            </style.Icons>
          </style.BottomBox>
        </style.BoxStyle>
      ))}
    </div>
  );
}
