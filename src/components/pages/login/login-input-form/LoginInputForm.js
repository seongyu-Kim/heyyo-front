import React, { useState } from "react";
import Image from "next/image";

export default function LoginInputForm() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="box">
            <div>
                <span>
                    <input id="id" className="login-input-id" type="text" placeholder="dms3151@gmail.com" />
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
                                  ? "/icon/passwordVisibleIcon.svg"
                                  : "/icon/passwordInvisibleIcon.svg"
                          }
                          alt="password"
                          loader={({ }) =>
                              showPassword
                                  ? `/icon/passwordVisibleIcon.svg`
                                  : `/icon/passwordInvisibleIcon.svg`
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
        <style jsx>{`
          .box{
            position: relative;
            display: flex;
            flex-direction: column;
            text-align: center;
          }
          .login-input-id {
            width: 23.9375rem;
            height: 2.125rem;
            flex-shrink: 0;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #E9F7FF;
            left: 8.75rem;
            margin-bottom: 0.94rem;
            
            /* Placeholder 스타일 지정 */
            ::placeholder {
              color: #000;
              text-align: center;
              font-family: 'Noto Sans KR', sans-serif;
              font-size: 0.8125rem;
              font-style: normal;
              font-weight: 400;
              line-height: 129.8%;
            }
          }
          
          .login-input-pw {              
            width: 23.9375rem;
            height: 2.125rem;
            flex-shrink: 0;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #E9F7FF;
            left: 8.75rem;
            margin-bottom: 0.94rem;
          }
          
          .login-button {
            width: 23.9375rem;
            height: 2.125rem;
            flex-shrink: 0;
            border-radius: 0.5625rem;
            background: #229EEB;
            left: 8.75rem;
            margin-bottom: 0.56rem;
            color: #FFF;
            text-align: center;
            font-family: Noto Sans KR;
            font-size: 0.8125rem;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
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
