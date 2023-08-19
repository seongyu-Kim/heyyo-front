import React, { useState } from "react";
import SignupTermsForm from "@/components/pages/signup/signup-terms-form/SignupTermsForm";
import { Font } from "/public/fonts/Font";
import {
  recommendNicknameState,
  nameState,
  nicknameState,
  passwordState,
  emailState,
  phoneNumberState,
} from "/src/recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import { signup } from "@/apis/auth/signup";

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
      <div>
        <div className="nickname-container">
          <span>
            <input
              id="nickname"
              value={recommendNickname}
              onChange={(e) => setRecommendNickname(e.target.value)}
              className="nickname-input"
              type="text"
              placeholder="추천인 닉네임을 입력해주세요."
            />
          </span>
          <SignupTermsForm onCheckItemsChange={handleCheckItemsChange} />
          <div className="button-container">
            <span>
              <button className="nickname-button" type="submit">
                가입하기
              </button>
            </span>
          </div>
        </div>

        {/* CSS */}
        <style jsx>{`
          .nickname-container {
            margin-top: 14.44rem;
            margin-bottom: 1.37rem;
            margin-left: 5.66rem;
          }

          .nickname-input {
            width: 18.375rem;
            height: 2.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            left: 6.25rem;
            top: 14.44rem;
            margin-bottom: 1.37rem;

            /* Placeholder 스타일 지정 */
            ::placeholder {
              color: #000;
              text-align: center;
              font-size: ${Font.Size.S};
              font-weight: 400;
              line-height: 129.8%;
            }
          }

          .nickname-button {
            width: 28.1875rem;
            height: 2.125rem;
            border-radius: 0.5625rem;
            background: #229eeb;

            color: #fff;
            text-align: center;
            font-size: ${Font.Size.S};
            font-weight: 900;
          }
        `}</style>
      </div>
    </form>
  );
}
