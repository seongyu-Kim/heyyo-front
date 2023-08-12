import React, { useState } from "react";
import { Font } from "/public/fonts/Font";

export default function PwFindModal({ onClose }) {
  const [pwIssued, setPwIssued] = useState(false);

  const handlePwIssue = () => {
    // 임시 비밀번호 발급 성공 로직
    setPwIssued(true);
  };
  return (
    <div className="pw-find-modal">
      <div className="pw-find-title">비밀번호 찾기</div>
      <div>
        <input
          id="name"
          className="pw-find-input"
          type="text"
          placeholder="이름을 입력해주세요."
        />
      </div>
      <div>
        <input
          id="email"
          className="pw-find-input"
          type="text"
          placeholder="회원가입 시 입력하신 이메일 주소"
        />
      </div>
      <div className="pw-find-text">
        <a>
          가입하셨을 때 기입하신 이메일로 임시 비밀번호 발급해드립니다.
          <br />
          정확히 입력해주세요.
        </a>
      </div>
      {/* 임시 비밀번호 발급 성공 시 '로그인 하기' 버튼 보여지기 */}
      <div>
        {pwIssued ? (
          <button className="pw-find-button" onClick={onClose}>
            로그인 하기
          </button>
        ) : (
          <button className="pw-find-button" onClick={handlePwIssue}>
            임시 비밀번호 받기
          </button>
        )}
      </div>
      {/* 임시 비밀번호 발급 성공 시 보여질 TEXT */}
      {pwIssued && (
        <div className="pw-find-on">
          <p>
            임시 비밀번호가 발급되었습니다.
            <br />
            임시 비밀번호로 로그인 후 비밀번호를 변경해주세요.
          </p>
        </div>
      )}
      {/* 임시 비밀번호 발급 전에만 보이기 */}
      {!pwIssued && (
        <div>
          <button className="login" onClick={onClose}>
            로그인
          </button>
        </div>
      )}

      {/* CSS */}
      <style jsx>
        {`
          .pw-find-modal {
            width: 54rem;
            height: 33.5625rem;
            border-radius: 0.625rem;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
          }

          .pw-find-title {
            position: absolute;
            top: 5.19rem;
            left: 20.56rem;
            color: #000;
            font-size: ${Font.Size.XL};
            font-weight: 700;
          }

          .pw-find-input {
            position: relative;
            top: 9.88rem;
            width: 26.375rem;
            height: 3.125rem;
            padding: 18px;
            border: none;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            margin-bottom: 1.44rem;

            /* Placeholder 스타일 지정 */
            ::placeholder {
              color: #000;
              text-align: center;
              font-size: ${Font.Size.S};
              font-weight: 400;
              line-height: 129.8%;
            }
          }

          .pw-find-text {
            color: rgba(0, 0, 0, 0.8);
            font-size: ${Font.Size.S};
            text-align: left;
            font-weight: 400;
            line-height: 129.8%;
            margin-top: 9.25rem;
            margin-bottom: 3.69rem;
            margin-left: 13.81rem;
          }

          .pw-find-button {
            width: 26.4375rem;
            height: 2.5rem;
            border-radius: 0.5625rem;
            background: #229eeb;

            color: #fff;
            text-align: center;
            font-size: ${Font.Size.S};
            font-weight: 900;

            margin-bottom: 1.25rem;
          }

          .login {
            color: rgba(0, 0, 0, 0.8);
            font-size: ${Font.Size.S};
            font-weight: 400;
            line-height: 129.8%;
          }

          .pw-find-on {
            position: absolute;
            top: 9.87rem;
            left: 13.81rem;
            width: 26.375rem;
            height: 10.625rem;
            border-radius: 0.5625rem;
            background: #e9f7ff;
            display: flex;
            justify-content: center;
            align-items: center;

            color: rgba(0, 0, 0, 0.8);
            text-align: center;
            font-size: ${Font.Size.S};
            font-weight: 400;
            line-height: 129.8%;
          }
        `}
      </style>
    </div>
  );
}
