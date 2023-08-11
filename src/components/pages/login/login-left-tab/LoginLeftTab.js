import Image from "next/image";
import { Font } from "/public/fonts/Font";
export default function LoginLeftTab() {
  return (
    <div className="login-left">
      <div className="login-left-image">
        <Image
          src="/icon/Sosimi.svg"
          alt="소시미"
          loader={() => "/icon/Sosimi.svg"}
          width={160}
          height={120.25}
        />
      </div>
      <a className="login-left-text">WELCOME!</a>

      {/* CSS */}
      <style jsx>
        {`
          .login-left {
            position: absolute;
            width: 18.75rem;
            height: 37.4375rem;
            background: #229eeb;
            box-shadow: 4px 4px 30px 2px rgba(0, 0, 0, 0.1);
            left: 29.87rem;
            right: 71.37rem;
            top: 17.8rem;
            bottom: 12.25rem;
          }

          .login-left-image {
            position: relative;
            left: 4.41rem;
            right: 4.34rem;
            top: 12.25rem;
            margin-bottom: 0.38rem;
          }

          .login-left-text {
            position: absolute;
            width: 13.6875rem;
            height: 3.0625rem;
            color: #fff;
            text-align: center;
            font-size: ${Font.Size.XL};
            font-weight: 900;
            left: 2.56rem;
            right: 2.5rem;
            top: 20.41rem;
          }
        `}
      </style>
    </div>
  );
}
