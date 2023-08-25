import * as style from "@/components/pages/signup/signup-recommender-form/SignupRecommenderForm.style";
import React, { useState } from "react";
import SignupTermsForm from "@/components/pages/signup/signup-terms-form/SignupTermsForm";
import { useRecoilState } from "recoil";
import {
  recommendNicknameState,
  nameState,
  nicknameState,
  passwordState,
  emailState,
  phoneNumberState,
} from "/src/recoil/atoms/Atoms";
import { signup } from "@/apis/auth/signup/signup";

export default function SignupRecommenderForm() {
  // Recoil
  const [recommendNickname, setRecommendNickname] = useRecoilState(
    recommendNicknameState,
  );
  const [name, setName] = useRecoilState(nameState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [email, setEmail] = useRecoilState(emailState);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);

  const [checkedTerms, setCheckedTerms] = useState([]);

  const handleCheckItemsChange = (items) => {
    setCheckedTerms(items);
  };
  const handleSignup = (e) => {
    e.preventDefault();

    // 필수 입력값 검사
    if (!name || !nickname || !password || !email || !phoneNumber) {
      alert("필수값을 입력해주세요.");
      return;
    }

    // 약관동의 필수 항목 체크 검사
    const requiredTerms = [0, 1, 2, 3];
    const missingRequiredTerms = requiredTerms.filter(
      (termId) => !checkedTerms.includes(termId),
    );

    if (missingRequiredTerms.length > 0) {
      alert("약관 동의 필수 항목을 체크해주세요.");
      return;
    }

    const inputName = name;
    const inputNickname = nickname;
    const inputPassword = password;
    const inputEmail = email;
    const inputPhoneNumber = phoneNumber;
    const inputRecommendNickname = recommendNickname;

    signup(
      inputName,
      inputNickname,
      inputPassword,
      inputEmail,
      inputPhoneNumber,
      inputRecommendNickname,
    );
  };

  return (
    <form onSubmit={handleSignup}>
      <style.BoxDiv>
        <style.NickNameContainer>
          <style.NickNameSpan>
            <style.NickNameInput
              id="nickname"
              value={recommendNickname}
              onChange={(e) => setRecommendNickname(e.target.value)}
              type="text"
              placeholder="추천인 닉네임을 입력해주세요."
            />
          </style.NickNameSpan>
          <SignupTermsForm onCheckItemsChange={handleCheckItemsChange} />
          <style.ButtonWrapper>
            <style.ButtonSpan>
              <style.NickNameButton type="submit">
                가입하기
              </style.NickNameButton>
            </style.ButtonSpan>
          </style.ButtonWrapper>
        </style.NickNameContainer>
      </style.BoxDiv>
    </form>
  );
}
