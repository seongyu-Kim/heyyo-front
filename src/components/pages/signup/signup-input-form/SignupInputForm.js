import * as style from "@/components/pages/signup/signup-input-form/SignupInputForm.style";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { nameState, nicknameState, passwordState } from "@/recoil/atoms/Atoms";
import SignupEmailForm from "@/components/pages/signup/signup-email-form/SignupEmailForm";
import SignupSmsForm from "@/components/pages/signup/signup-sms-form/SignupSmsForm";
import { checkNicknameDuplicate } from "@/apis/auth/signup/duplicateCheck";
import Image from "next/image";

export default function SignupInputForm() {
  // Recoil
  const [name, setName] = useRecoilState(nameState);
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [password, setPassword] = useRecoilState(passwordState);

  const [duplicateNicknameStatus, setDuplicateNicknameStatus] = useState(null);

  // 닉네임 중복확인
  const handleNicknameCheck = async () => {
    const inputNickname = nickname;
    try {
      const { isDuplicateNickname, message } = await checkNicknameDuplicate(
        inputNickname,
      );
      setDuplicateNicknameStatus({ isDuplicateNickname, message });
    } catch (error) {
      setDuplicateNicknameStatus({
        isDuplicateNickname: true,
        message: "API 호출 오류",
      });
    }
  };

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
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    isPasswordCorrect(newPassword, passwordConfirmation);
  };

  const handlePasswordConfirmationChange = (event) => {
    const newConfirmation = event.target.value;
    setPasswordConfirmation(newConfirmation);
    isPasswordCorrect(password, newConfirmation);
  };

  const isPasswordCorrect = (newPassword, newConfirmation) => {
    if (newConfirmation === newPassword) {
      setPasswordMatchMessage("일치");
    } else {
      setPasswordMatchMessage("불일치");
    }
  };

  return (
    <style.BoxDiv>
      <style.NameDiv>
        <style.SignupInput
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="이름을 입력해주세요."
        />
      </style.NameDiv>
      <style.NickNameDiv>
        <style.NickNameLabel>
          <style.SignupInput
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            type="text"
            placeholder="닉네임을 입력해주세요."
          />
          <style.NickNameButton onClick={handleNicknameCheck}>
            중복확인
          </style.NickNameButton>
        </style.NickNameLabel>
        {duplicateNicknameStatus?.isDuplicateNickname ? (
          <style.ErrorMessage>
            {duplicateNicknameStatus?.message}
          </style.ErrorMessage>
        ) : (
          <style.SuccessMessage>
            {duplicateNicknameStatus?.message}
          </style.SuccessMessage>
        )}
      </style.NickNameDiv>

      <style.PasswordDiv>
        <style.SignupInput
          id="pw"
          value={password}
          type={showPasswordInput ? "text" : "password"}
          placeholder="비밀번호 입력"
          onChange={handlePasswordChange}
        />
        <style.PasswordImageDiv>
          <Image
            src={
              showPasswordInput
                ? "/assets/icon/PasswordVisibleIcon.svg"
                : "/assets/icon/PasswordInvisibleIcon.svg"
            }
            alt="password"
            loader={({}) =>
              showPasswordInput
                ? `/assets/icon/PasswordVisibleIcon.svg`
                : `/assets/icon/PasswordInvisibleIcon.svg`
            }
            width={14}
            height={14}
            onClick={togglePasswordInputVisibility}
          />
        </style.PasswordImageDiv>
      </style.PasswordDiv>
      <style.PasswordDiv>
        <style.SignupInput
          id="pwConfirmation"
          type={showPasswordConfirmation ? "text" : "password"}
          placeholder="비밀번호 확인"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
        />
        <style.PasswordImageDiv>
          <Image
            src={
              showPasswordConfirmation
                ? "/assets/icon/PasswordVisibleIcon.svg"
                : "/assets/icon/PasswordInvisibleIcon.svg"
            }
            alt="password"
            loader={({}) =>
              showPasswordConfirmation
                ? `/assets/icon/PasswordVisibleIcon.svg`
                : `/assets/icon/PasswordInvisibleIcon.svg`
            }
            width={14}
            height={14}
            onClick={togglePasswordConfirmationVisibility}
          />
          <div>
            {passwordConfirmation ? (
              passwordMatchMessage === "일치" ? (
                <style.PwMatchingMessage>
                  비밀번호가 일치합니다.
                </style.PwMatchingMessage>
              ) : (
                <style.PwMismatchMessage>
                  비밀번호가 일치하지 않습니다.
                </style.PwMismatchMessage>
              )
            ) : null}
          </div>
        </style.PasswordImageDiv>
      </style.PasswordDiv>
      <SignupEmailForm />
      <SignupSmsForm />
    </style.BoxDiv>
  );
}
