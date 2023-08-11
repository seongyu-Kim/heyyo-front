import LoginInputForm from "@/components/pages/login/login-input-form/LoginInputForm";
import FindLinkBox from "@/components/pages/login/find-link-box/FindLinkBox";
import SnsLoginBox from "@/components/pages/login/sns-login-box/SnsLoginBox";
import { Font } from "/public/fonts/Font";

export default function LoginRightTab() {
  return (
    <div className="login-right">
      <span className="login-right-text">
        해요와 함께하러 오신 걸 환영해요!
      </span>
      <LoginInputForm />
      <FindLinkBox />
      <SnsLoginBox />

      {/* CSS */}
      <style jsx>
        {`
          .login-right {
            position: absolute;
            width: 41.5rem;
            height: 37.4375rem;
            background: #fff;
            box-shadow: 4px 4px 30px 2px rgba(0, 0, 0, 0.1);
            left: 48.6rem;
            right: 29.9rem;
            top: 17.8rem;
            bottom: 12.3rem;
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          .login-right-text {
            display: block;
            color: #000;
            font-size: ${Font.Size.XL};
            font-weight: 700;
            top: 8.69rem;
            bottom: 25.5rem;
            padding-top: 8.69rem;
            padding-bottom: 2.75rem;
          }
        `}
      </style>
    </div>
  );
}
