import React, { useState } from "react";
import Image from "next/image";
import { Font } from "/public/fonts/Font";

export default function LoginInputForm() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="box">
      <div>
        <span>
          <input
            id="id"
            className="login-input-id"
            type="text"
            placeholder="dms3151@gmail.com"
          />
        </span>
      </div>
      <div className="password-wrapper">
        <span>
          <input
            id="password"
            className="login-input-pw"
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호 입력"
          />
          <div className="password">
            <Image
              src={
                showPassword
                  ? "/icon/PasswordVisibleIcon.svg"
                  : "/icon/PasswordInvisibleIcon.svg"
              }
              alt="password"
              loader={({}) =>
                showPassword
                  ? `/icon/PasswordVisibleIcon.svg`
                  : `/icon/PasswordInvisibleIcon.svg`
              }
              width={14}
              height={14}
              onClick={togglePasswordVisibility}
            />
          </div>
        </span>
      </div>
      <div>
        <span>
          <button className="login-button">로그인하기</button>
        </span>
      </div>

      {/* CSS */}
      <style jsx>
        {`
          .box {
            position: relative;
            display: flex;
            flex-direction: column;
            text-align: center;
          }
          .login-input-id {
            width: 23.9375rem;
            height: 2.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            left: 8.75rem;
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

          .login-input-pw {
            width: 23.9375rem;
            height: 2.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            left: 8.75rem;
            margin-bottom: 0.94rem;
          }

          .login-button {
            width: 23.9375rem;
            height: 2.125rem;
            border-radius: 0.5625rem;
            background: #229eeb;
            left: 8.75rem;
            margin-bottom: 0.56rem;
            color: #fff;
            text-align: center;
            font-size: ${Font.Size.S};
            font-weight: 900;
          }

          .password-wrapper {
            position: relative;
          }

          .password {
            position: absolute;
            left: 22.19rem;
            right: 0.88rem;
            top: 0.63rem;
          }
        `}
      </style>
    </div>
  );
}
