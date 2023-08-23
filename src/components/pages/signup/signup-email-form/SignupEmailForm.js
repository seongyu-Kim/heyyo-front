import { Font } from "/public/fonts/Font";
import { emailState } from "/src/recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import { checkEmailDuplicate } from "@/apis/auth/signup/duplicateCheck";
import React, { useState } from "react";

export default function SignupEmailForm() {
  // Recoil
  const [email, setEmail] = useRecoilState(emailState);

  const [duplicateEmailStatus, setDuplicateEmailStatus] = useState(null);
  const [emailFormatError, setEmailFormatError] = useState(false);

  // 이메일 정규식
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const handleEmailCheck = async () => {
    const inputEmail = email;

    if (!emailRegEx.test(inputEmail)) {
      setEmailFormatError(true);
      setDuplicateEmailStatus(null);
      return;
    }

    setEmailFormatError(false);

    try {
      const { isDuplicateEmail, message } = await checkEmailDuplicate(
        inputEmail,
      );
      setDuplicateEmailStatus({ isDuplicateEmail, message });
    } catch (error) {
      setDuplicateEmailStatus({
        isDuplicateEmail: true,
        message: "API 호출 오류",
      });
    }
  };

  return (
    <div className="box">
      <div className="email-container">
        <label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            type="text"
            maxLength="30"
            placeholder="이메일을 입력해주세요."
          />
          <button className="nickname-button" onClick={handleEmailCheck}>
            중복확인
          </button>
        </label>
        <p
          className={
            duplicateEmailStatus?.isDuplicateEmail
              ? "error-message"
              : emailFormatError
              ? "error-message"
              : "success-message"
          }
        >
          {duplicateEmailStatus?.message ||
            (emailFormatError && "잘못된 이메일 형식 입니다.")}
        </p>
      </div>

      {/* CSS */}
      <style jsx>
        {`
          .box {
            display: flex;
            align-items: center;
            margin-left: 7.37rem;
            margin-bottom: 0.94rem;
          }

          .email-container {
            position: relative;
            display: flex;
            align-items: center;
          }

          .nickname-button {
            position: absolute;
            width: 2.3125rem;
            height: 0.875rem;
            left: 15.25rem;
            top: 0.69rem;

            color: #8c9499;
            text-align: center;
            font-size: ${Font.Size.XS};
            font-weight: 700;
          }

          .email-input {
            width: 18.375rem;
            height: 2.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #e9f7ff;

            /* Placeholder 스타일 지정 */
            ::placeholder {
              color: #000;
              text-align: center;
              font-size: ${Font.Size.S};
              font-weight: 400;
              line-height: 129.8%;
            }
          }

          .success-message {
            color: #229eeb;
            text-align: right;
            font-size: ${Font.Size.XS};
            font-weight: 700;
            top: 0.1525rem;
            margin-left: 0.5rem;
          }

          .error-message {
            color: #f88;
            text-align: right;
            font-size: ${Font.Size.XS};
            font-weight: 700;
            text-decoration-line: underline;
            top: 0.56rem;
            margin-left: 0.5rem;
          }
        `}
      </style>
    </div>
  );
}
