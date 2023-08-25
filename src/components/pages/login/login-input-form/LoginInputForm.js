import * as style from "@/components/pages/login/login-input-form/LoginInputForm.style";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from "@/recoil/atoms/Atoms";
import { login } from "@/apis/auth/login/login";
import Image from "next/image";

export default function LoginInputForm() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const inputEmail = email;
    const inputPassword = password;

    login(inputEmail, inputPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form onSubmit={handleLogin}>
      <style.BoxDiv>
        <style.EmailWrapper>
          <style.LoginEmailInput
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="이메일을 입력해주세요."
          />
        </style.EmailWrapper>
        <style.PasswordContainerDiv>
          <style.LoginPwInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
          />
          <style.PasswordDiv>
            <Image
              src={
                showPassword
                  ? "/assets/icon/PasswordVisibleIcon.svg"
                  : "/assets/icon/PasswordInvisibleIcon.svg"
              }
              alt="password"
              loader={({}) =>
                showPassword
                  ? `/assets/icon/PasswordVisibleIcon.svg`
                  : `/assets/icon/PasswordInvisibleIcon.svg`
              }
              width={14}
              height={14}
              onClick={togglePasswordVisibility}
            />
          </style.PasswordDiv>
        </style.PasswordContainerDiv>
        <style.LoginButtonContainer>
          <style.LoginButton type="submit">로그인하기</style.LoginButton>
        </style.LoginButtonContainer>
      </style.BoxDiv>
    </form>
  );
}
