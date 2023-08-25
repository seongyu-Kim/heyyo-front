import * as style from "@/components/pages/login/pw-find-modal/PwFindModal.style";
import React, { useState } from "react";

export default function PwFindModal({ onClose }) {
  const [pwIssued, setPwIssued] = useState(false);

  const handlePwIssue = () => {
    // 임시 비밀번호 발급 성공 로직
    setPwIssued(true);
  };
  return (
    <style.PwFindModalDiv>
      <style.PwFindTitleDiv>비밀번호 찾기</style.PwFindTitleDiv>
      <style.PwInputWrapper>
        <style.PwFindInput
          id="name"
          type="text"
          placeholder="이름을 입력해주세요."
        />
      </style.PwInputWrapper>
      <style.PwInputWrapper>
        <style.PwFindInput
          id="email"
          type="text"
          placeholder="회원가입 시 입력하신 이메일 주소"
        />
      </style.PwInputWrapper>
      <style.PwFindTextDiv>
        <style.PwFindTextAtag>
          이메일로 임시 비밀번호가 발급됩니다.
          <style.PwFindBr />
          정확히 입력해주세요.
        </style.PwFindTextAtag>
      </style.PwFindTextDiv>
      {/* 임시 비밀번호 발급 성공 시 '로그인 하기' 버튼 보여지기 */}
      <style.PwFindButtonDiv>
        {pwIssued ? (
          <style.PwFindButton onClick={onClose}>로그인 하기</style.PwFindButton>
        ) : (
          <style.PwFindButton onClick={handlePwIssue}>
            임시 비밀번호 받기
          </style.PwFindButton>
        )}
      </style.PwFindButtonDiv>
      {/* 임시 비밀번호 발급 성공 시 보여질 TEXT */}
      {pwIssued && (
        <style.PwFindOn>
          <style.PwFindOnPtag>
            임시 비밀번호가 발급되었습니다.
            <style.PwFindBr />
            임시 비밀번호로 로그인 후 비밀번호를 변경해주세요.
          </style.PwFindOnPtag>
        </style.PwFindOn>
      )}
      {/* 임시 비밀번호 발급 전에만 보이기 */}
      {!pwIssued && (
        <style.LoginContainer>
          <style.LoginButton onClick={onClose}>로그인</style.LoginButton>
        </style.LoginContainer>
      )}
    </style.PwFindModalDiv>
  );
}
