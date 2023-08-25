import * as style from "@/components/pages/signup/signup-sms-form/SignupSmsForm.style";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { phoneNumberState } from "/src/recoil/atoms/Atoms";
import { certificationPhoneNumber } from "@/apis/auth/signup/sms";

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
    <style.BoxDiv>
      <style.SmsContainer>
        <style.SmsSendInput
          id="phonenumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className={`${phoneNumberFormatError ? "error" : ""}`}
          type="text"
          maxLength="15"
          placeholder="' - ' 없이 숫자만 입력하세요."
        />
        <style.SmsSendButton
          className={`${verificationSent ? "sent" : ""}`}
          onClick={handleSendVerificationCode}
          disabled={verificationSent}
        >
          {verificationSent ? "재전송" : "인증번호 전송"}
        </style.SmsSendButton>
        {phoneNumberFormatError && (
          <style.ErrorMessagePtag>
            잘못된 전화번호 형식 입니다.
          </style.ErrorMessagePtag>
        )}
      </style.SmsContainer>

      <style.SmsContainer>
        <style.SmsInput
          id="sms"
          type="text"
          maxLength="15"
          placeholder="인증번호를 입력하세요."
          value={inputVerificationCode}
          onChange={(e) => setInputVerificationCode(e.target.value)}
        />
        <style.SmsButton onClick={handleVerifyCode}>
          인증번호 확인
        </style.SmsButton>
        {verificationSuccess && (
          <style.SuccessMessage>인증이 완료되었습니다.</style.SuccessMessage>
        )}
        {buttonClicked && !verificationSuccess && verificationCode && (
          <style.ErrorMessage>인증번호가 일치하지 않습니다.</style.ErrorMessage>
        )}
      </style.SmsContainer>
    </style.BoxDiv>
  );
}
