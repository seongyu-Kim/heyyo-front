import React, { useState } from "react";
import Image from "next/image";
import { Font } from "/public/fonts/Font";
import { useRecoilState } from "recoil";
import { emailState, passwordState } from "@/recoil/atoms/Atoms";
import { login } from "@/apis/auth/login/login";

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
      <div className="box">
        <div>
          <span>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input-email"
              type="text"
              placeholder="dms3151@gmail.com"
            />
          </span>
        </div>
        <div className="password-wrapper">
          <span>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button className="login-button" type="submit">
              로그인하기
            </button>
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
            .login-input-email {
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

            .success-message {
              color: #229eeb;
              text-align: right;
              font-size: ${Font.Size.XS};
              font-weight: 700;
              height: 1.6875rem;
              margin-left: 0.5rem;
            }

            .error-message {
              color: #f88;
              text-align: right;
              font-size: ${Font.Size.XS};
              font-weight: 700;
              text-decoration-line: underline;
              height: 1.6875rem;
              margin-left: 0.5rem;
            }
          `}
        </style>
      </div>
    </form>
  );
}
