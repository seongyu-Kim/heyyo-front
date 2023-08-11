import { Font } from "/public/fonts/Font";

export default function SignupEmailForm() {
  return (
    <div className="box">
      <div className="email-container">
        <input
          name="email"
          className="email-input"
          type="text"
          maxLength="15"
          placeholder="이메일을 입력해주세요."
        />
      </div>

      {/* CSS */}
      <style jsx>
        {`
          .email-container {
            display: flex;
            align-items: center;
            margin-left: 7.37rem;
            margin-bottom: 0.94rem;
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
        `}
      </style>
    </div>
  );
}
