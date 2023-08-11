// TODO.닉네임 중복확인 작업 필요
import React, { useState } from "react";
import Image from "next/image";
import SignupEmailForm from "@/components/pages/signup/signup-email-form/SignupEmailForm";
import SignupSmsForm from "@/components/pages/signup/signup-sms-form/SignupSmsForm";
import { Font } from "/public/fonts/Font";

export default function SignupInputForm() {
  // 비밀번호 표시
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const togglePasswordInputVisibility = () => {
    setShowPasswordInput((prevShowPasswordInput) => !prevShowPasswordInput);
  };
  const togglePasswordConfirmationVisibility = () => {
    setShowPasswordConfirmation(
      (prevShowPasswordConfirmation) => !prevShowPasswordConfirmation,
    );
  };

  // 비밀번호 일치 불일치 확인
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
    if (event.target.value === password) {
      setPasswordMatchMessage("일치");
    } else {
      setPasswordMatchMessage("불일치");
    }
  };

  return (
    <div className="box">
      <div>
        <span>
          <input
            id="name"
            className="signup-input"
            type="text"
            placeholder="이름을 입력해주세요."
          />
        </span>
      </div>
      <div className="signup-input-wrapper">
        <span>
          <label>
            <input
              id="nickname"
              className="signup-input"
              type="text"
              placeholder="닉네임을 입력해주세요."
            />
            <button className="nickname-button">중복확인</button>
          </label>
        </span>
      </div>
      <div className="pw-wrapper">
        <span>
          <input
            id="pw"
            className="signup-input"
            type={showPasswordInput ? "text" : "password"}
            placeholder="비밀번호 입력"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="pw">
            <Image
              src={
                showPasswordInput
                  ? "/icon/PasswordVisibleIcon.svg"
                  : "/icon/PasswordInvisibleIcon.svg"
              }
              alt="password"
              loader={({}) =>
                showPasswordInput
                  ? `/icon/PasswordVisibleIcon.svg`
                  : `/icon/PasswordInvisibleIcon.svg`
              }
              width={14}
              height={14}
              onClick={togglePasswordInputVisibility}
            />
          </div>
        </span>
      </div>
      <div className="pw-wrapper">
        <span>
          <input
            id="pwConfirmation"
            className="signup-input"
            type={showPasswordConfirmation ? "text" : "password"}
            placeholder="비밀번호 확인"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />
          <div className="pw">
            <Image
              src={
                showPasswordConfirmation
                  ? "/icon/PasswordVisibleIcon.svg"
                  : "/icon/PasswordInvisibleIcon.svg"
              }
              alt="password"
              loader={({}) =>
                showPasswordConfirmation
                  ? `/icon/PasswordVisibleIcon.svg`
                  : `/icon/PasswordInvisibleIcon.svg`
              }
              width={14}
              height={14}
              onClick={togglePasswordConfirmationVisibility}
            />
            <div>
              {passwordConfirmation ? (
                passwordMatchMessage === "일치" ? (
                  <span className="message-o">비밀번호가 일치합니다.</span>
                ) : (
                  <span className="message-x">
                    비밀번호가 일치하지 않습니다.
                  </span>
                )
              ) : null}
            </div>
          </div>
        </span>
      </div>
      <SignupEmailForm />
      <SignupSmsForm />

      {/* CSS */}
      <style jsx>
        {`
          .box {
            position: relative;
            display: flex;
            flex-direction: column;
            text-align: left;
          }

          .signup-input {
            width: 18.375rem;
            height: 2.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            margin-left: 7.37rem;
            margin-bottom: 0.94rem;

            /* Placeholder 스타일 지정 */
            ::placeholder {
              color: #000;
              text-align: center;
              font-size: ${Font.Size.S};
              font-weight: 400;
              line-height: 129.8%;
            }
          }

          .signup-input-wrapper {
            position: relative;
          }

          .nickname-button {
            position: absolute;
            width: 2.3125rem;
            height: 0.875rem;
            left: 22.62rem;
            top: 0.69rem;

            color: #8c9499;
            text-align: center;
            font-size: ${Font.Size.XS};
            font-weight: 700;
          }

          .pw-wrapper {
            position: relative;
          }

          .pw {
            position: absolute;
            left: 24rem;
            right: 0.75rem;
            top: 0.63rem;
          }

          .message-o {
            position: absolute;
            color: #229eeb;
            text-align: right;
            font-size: ${Font.Size.XS};
            font-weight: 700;
            top: 0.1525rem;
            left: 2.19rem;
          }

          .message-x {
            position: absolute;
            color: #f88;
            text-align: right;
            font-size: ${Font.Size.XS};
            font-weight: 700;
            text-decoration-line: underline;
            top: 0.1525rem;
            left: 2.19rem;
          }
        `}
      </style>
    </div>
  );
}
