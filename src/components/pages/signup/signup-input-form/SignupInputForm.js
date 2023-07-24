import React, { useState } from "react";
import Image from "next/image";
import SignupEmailForm from "@/components/pages/signup/signup-email-form/SignupEmailForm";
import SignupSmsForm from "@/components/pages/signup/signup-sms-form/SignupSmsForm";

export default function SignupInputForm() {
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const togglePasswordInputVisibility = () => {
        setShowPasswordInput((prevShowPasswordInput) => !prevShowPasswordInput);
    };
    const togglePasswordConfirmationVisibility = () => {
        setShowPasswordConfirmation((prevShowPasswordConfirmation) => !prevShowPasswordConfirmation);
    };

    return(
        <div className="box">
            <div>
                <span>
                    <input id="name" className="signup-input" type="text" placeholder="이름을 입력해주세요." />
                </span>
            </div>
            <div>
                <span>
                    <input id="id" className="signup-input" type="text" placeholder="dms3151@gmail.com" />
                </span>
            </div>
            <div className="pw-wrapper">
                <span>
                  <input
                      id="pw"
                      className="signup-input"
                      type={showPasswordInput ? "text" : "password"}
                      placeholder="비밀번호 입력"
                  />
                  <div className="pw">
                      <Image
                          src={
                              showPasswordInput
                                  ? "/icon/passwordVisibleIcon.svg"
                                  : "/icon/passwordInvisibleIcon.svg"
                          }
                          alt="password"
                          loader={({ }) =>
                              showPasswordInput
                                  ? `/icon/passwordVisibleIcon.svg`
                                  : `/icon/passwordInvisibleIcon.svg`
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
                      id="pw"
                      className="signup-input"
                      type={showPasswordConfirmation ? "text" : "password"}
                      placeholder="비밀번호 확인"
                  />
                  <div className="pw">
                      <Image
                          src={
                              showPasswordConfirmation
                                  ? "/icon/passwordVisibleIcon.svg"
                                  : "/icon/passwordInvisibleIcon.svg"
                          }
                          alt="password"
                          loader={({ }) =>
                              showPasswordConfirmation
                                  ? `/icon/passwordVisibleIcon.svg`
                                  : `/icon/passwordInvisibleIcon.svg`
                          }
                          width={14}
                          height={14}
                          onClick={togglePasswordConfirmationVisibility}
                      />
                  </div>
                </span>
            </div>
            <SignupEmailForm />
            <SignupSmsForm />

            {/* CSS */}
            <style jsx>{`
                .box{
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  text-align: left;
                }
                
                .signup-input {
                  width: 18.375rem;
                  height: 2.125rem;
                  flex-shrink: 0;
                  padding: 18px;
                  border: none;
                  border-radius: 0.5625rem;
                  background: #E9F7FF;
                  margin-left: 7.37rem;
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
                
                .pw-wrapper {
                  position: relative;
                }

                .pw {
                  position: absolute;
                  left: 24rem;
                  right: 0.75rem;
                  top: 0.63rem;
                }
                
            `}
            </style>
        </div>
    );
}