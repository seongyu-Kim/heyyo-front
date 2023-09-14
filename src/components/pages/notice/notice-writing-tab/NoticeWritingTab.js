import * as style from "@/components/pages/notice/notice-writing-tab/NoticeWritingTab.style";
import Image from "next/image";
import React, { useState } from "react";
export default function NoticeWritingTab({ onClose }) {
  const [isInputBarActive, setInputBarActive] = useState(false);
  const [title, setTitle] = useState(
    "산업디자인학과 친구들.. 모여봐.. 여기 있어..?",
  );
  const [keywords, setKeywords] = useState("#산업디자인 #온라인인싸 #고도기");
  const [content, setContent] = useState(
    "저 산업디자인학과 재학중인데 고도기나왔어요.. 학과 사람들이랑 친해지고싶은데 방법 없을까요..? 근데 저 온라인에서는 말 진짜 많거든요 제가 고등학교 3학년때 입시학원에서 너무 많이 떠들어서 선생님한테 살짝 혼났거든요 그때이후로부터 절대 말을 안하고 열심히 공부했어요.",
  );
  const handleContentsClick = () => {
    setInputBarActive(true);
  };
  const handleSaveChanges = () => {
    setInputBarActive(false);
  };
  return (
    <style.WritingDiv>
      <style.DownArrow>
        <Image
          src="assets/img/DownArrow.svg"
          alt="아래 화살표"
          loader={() => "assets/img/DownArrow.svg"}
          width={19.89}
          height={12.66}
        />
      </style.DownArrow>
      <style.WritingTitle>글쓰기</style.WritingTitle>
      <style.ExpansionMark>
        <Image
          src="assets/img/SpeechBubble.svg"
          alt="말풍선 이미지"
          loader={() => "assets/img/SpeechBubble.svg"}
          width={51}
          height={24}
        />
        <style.ExpansionText>확대하기</style.ExpansionText>
      </style.ExpansionMark>
      <style.CautionText>
        우리 ‘해요’는 커뮤니티 규정을 준수합니다. <br />
        바르고 깨끗한 커뮤니티 문화를 만들어갑시다.
      </style.CautionText>
      <style.ExpansionIcon>
        <Image
          src="assets/img/ExpansionButton.svg"
          alt="확장아이콘"
          loader={() => "assets/img/ExpansionButton.svg"}
          width={32.5}
          height={32.2}
        />
      </style.ExpansionIcon>
      <style.Title>제목</style.Title>
      <style.TitleBox>
        <style.TitleContents onClick={handleContentsClick}>
          {isInputBarActive ? (
            <textarea
              style={{ border: "none" }}
              rows={2}
              cols={50}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleSaveChanges}
            />
          ) : (
            title
          )}
        </style.TitleContents>
      </style.TitleBox>
      <style.Keyword>키워드</style.Keyword>
      <style.KeywordBox>
        <style.KeywordContents onClick={handleContentsClick}>
          {isInputBarActive ? (
            <textarea
              style={{ border: "none" }}
              rows={1}
              cols={50}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              onBlur={handleSaveChanges}
            />
          ) : (
            keywords
          )}
        </style.KeywordContents>
      </style.KeywordBox>
      <style.Detail>내용</style.Detail>
      <style.DetailBox>
        <style.DetailContents onClick={handleContentsClick}>
          {isInputBarActive ? (
            <textarea
              style={{ border: "none" }}
              rows={11}
              cols={50}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onBlur={handleSaveChanges}
            />
          ) : (
            content
          )}
        </style.DetailContents>
      </style.DetailBox>
      <style.PostButtonBox>
        <style.PostButtonText>게시하기</style.PostButtonText>
      </style.PostButtonBox>
      <style.WritingButton>
        <button onClick={onClose}>
          <Image
            src="assets/img/writingButton.svg"
            alt="글쓰기 아이콘"
            loader={() => "assets/img/writingButton.svg"}
            width={46}
            height={46}
          />
        </button>
      </style.WritingButton>
    </style.WritingDiv>
  );
}
