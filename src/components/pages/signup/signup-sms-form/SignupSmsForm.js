import { Font } from "/public/fonts/Font";
import { phoneNumberState } from "/src/recoil/atoms/Atoms";
import { useRecoilState } from "recoil";
import React, { useState } from "react";
import { certificationPhoneNumber } from "@/apis/auth/sms";

export default function SignupSmsForm() {
  // Recoil
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);

  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [inputVerificationCode, setInputVerificationCode] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [phoneNumberFormatError, setPhoneNumberFormatError] = useState(false);

  // 전화번호 정규식
  const phoneNumberRegEx = /^[0-9]{11}$/;

  const handleSendVerificationCode = async () => {
    if (!phoneNumberRegEx.test(phoneNumber)) {
      setPhoneNumberFormatError(true);
      return;
    }

    const code = await certificationPhoneNumber(phoneNumber);
    setVerificationCode(code);
    setVerificationSent(true);
    setPhoneNumberFormatError(false);
  };

  const handleVerifyCode = () => {
    setButtonClicked(true);
    if (String(verificationCode) === inputVerificationCode) {
      setVerificationSuccess(true);
      setVerificationCode("");
    } else {
      setVerificationSuccess(false);
    }
  };

  return (
    <div className="box">
      <div className="sms-container">
        <input
          id="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={`sms-send-input ${phoneNumberFormatError ? "error" : ""}`}
          type="text"
          maxLength="15"
          placeholder="' - ' 없이 숫자만 입력하세요."
        />
        <button
          className={`sms-send-button ${verificationSent ? "sent" : ""}`}
          onClick={handleSendVerificationCode}
          disabled={verificationSent}
        >
          {verificationSent ? "재전송" : "인증번호 전송"}
        </button>
        {phoneNumberFormatError && (
          <p className="error-message">잘못된 전화번호 형식 입니다.</p>
        )}
      </div>

      <div className="sms-container">
        <input
          id="sms"
          className="sms-input"
          type="text"
          maxLength="15"
          placeholder="인증번호를 입력하세요."
          value={inputVerificationCode}
          onChange={(e) => setInputVerificationCode(e.target.value)}
        />
        <button className="sms-button" onClick={handleVerifyCode}>
          인증번호 확인
        </button>
        {verificationSuccess && (
          <div className="success-message">인증이 완료되었습니다.</div>
        )}
        {buttonClicked && !verificationSuccess && verificationCode && (
          <div className="error-message">인증번호가 일치하지 않습니다.</div>
        )}
      </div>

      <style jsx>
        {`
          .sms-container {
            display: flex;
            align-items: center;
            margin-left: 7.37rem;
            margin-bottom: 0.94rem;
          }

          .sms-send-input {
            width: 11.5625rem;
            height: 2.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            margin-right: 0.56rem;

            /* Placeholder 스타일 지정 */
            ::placeholder {
              color: #000;
              text-align: center;
              font-size: ${Font.Size.S};
              font-weight: 400;
              line-height: 129.8%;
            }
          }

          .sms-input {
            width: 11.5625rem;
            height: 2.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #d9d9d9;
            margin-right: 0.56rem;

            /* Placeholder 스타일 지정 */
            ::placeholder {
              color: #000;
              text-align: center;
              font-size: ${Font.Size.S};
              font-weight: 400;
              line-height: 129.8%;
            }
          }

          .sms-send-button {
            width: 6.25rem;
            height: 2.25rem;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            border: 0.5px solid #229eeb;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

            color: #000;
            text-align: center;
            font-size: ${Font.Size.S};
            font-weight: 400;
          }

          .sms-send-button.sent {
            width: 6.25rem;
            height: 2.25rem;
            border-radius: 0.5625rem;
            background: #229eeb;
            border: 0.5px solid #229eeb;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

            color: #fff;
            text-align: center;
            font-size: ${Font.Size.S};
            font-weight: 900;
          }

          .sms-button {
            width: 6.25rem;
            height: 2.25rem;
            border-radius: 0.5625rem;
            background: #229eeb;
            border: 0.5px solid #229eeb;
            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

            color: #fff;
            text-align: center;
            font-size: ${Font.Size.S};
            font-weight: 900;
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
