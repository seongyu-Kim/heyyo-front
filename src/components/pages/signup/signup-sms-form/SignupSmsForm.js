// TODO. 인증번호 전송 작업 필요, 인증번호 전송 시 확인 버튼 옆에 시간 표시 작업
import { Font } from "/public/fonts/Font";

export default function SignupSmsForm() {
  return (
    <div className="box">
      <div className="sms-container">
        <input
          name="sms"
          className="sms-send-input"
          type="text"
          maxLength="15"
          placeholder="' - ' 없이 숫자만 입력하세요."
        />
        <button className="sms-send-button">인증번호 전송</button>
      </div>

      <div className="sms-container">
        <input
          name="sms"
          className="sms-input"
          type="text"
          maxLength="15"
          placeholder="인증번호를 입력하세요."
        />
        <button className="sms-button">인증번호 확인</button>
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
        `}
      </style>
    </div>
  );
}
