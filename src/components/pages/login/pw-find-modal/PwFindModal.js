import * as style from "@/components/pages/login/pw-find-modal/PwFindModal.style";
import React, { useState } from "react";
import { emailState, nameState } from "@/recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import { findPassword } from "@/apis/auth/login/findPassword";
import { PwFindTextAtag2 } from "@/components/pages/login/pw-find-modal/PwFindModal.style";

export default function PwFindModal({ onClose }) {
  const [isPwIssued, setIsPwIssued] = useState(false);
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);

  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);

  const handlePwIssue = async () => {
    try {
      await findPassword(name, email);
      setIsPwIssued(true);
    } catch (error) {
      setIsErrorOccurred(true);
      console.error("임시 비밀번호 발급 실패:", error.response.data);
    }
  };
  return (
    <style.PwFindModalDiv>
      <style.PwFindTitleDiv>비밀번호 찾기</style.PwFindTitleDiv>
      <style.PwInputWrapper>
        <style.PwFindInput
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="이름을 입력해주세요."
        />
      </style.PwInputWrapper>
      <style.PwInputWrapper>
        <style.PwFindInput
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="이메일 주소를 입력해 주세요."
        />
      </style.PwInputWrapper>
      <style.PwFindTextDiv>
        {isErrorOccurred ? (
          <style.PwFindTextAtag2>
            입력하신 정보와 일치하는 회원이 없습니다.
            <style.PwFindBr />
            이메일 또는 비밀번호를 확인해주세요.
          </style.PwFindTextAtag2>
        ) : (
          <style.PwFindTextAtag>
            이메일로 임시 비밀번호가 발급됩니다.
            <style.PwFindBr />
            정확히 입력해주세요.
          </style.PwFindTextAtag>
        )}
      </style.PwFindTextDiv>
      {/* 임시 비밀번호 발급 성공 시 '로그인 하기' 버튼 보여지기 */}
      <style.PwFindButtonDiv>
        {isPwIssued ? (
          <style.PwFindButton onClick={onClose}>로그인 하기</style.PwFindButton>
        ) : (
          <style.PwFindButton onClick={handlePwIssue}>
            임시 비밀번호 받기
          </style.PwFindButton>
        )}
      </style.PwFindButtonDiv>
      {/* 임시 비밀번호 발급 성공 시 보여질 TEXT */}
      {isPwIssued && (
        <style.PwFindOn>
          <style.PwFindOnPtag>
            임시 비밀번호가 발급되었습니다.
            <style.PwFindBr />
            임시 비밀번호로 로그인 후 비밀번호를 변경해주세요.
          </style.PwFindOnPtag>
        </style.PwFindOn>
      )}
    </style.PwFindModalDiv>
  );
}
