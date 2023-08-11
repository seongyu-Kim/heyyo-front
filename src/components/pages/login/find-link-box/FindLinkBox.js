import Link from "next/link";
import { Font } from "/public/fonts/Font";

export default function FindLinkBox() {
  return (
    <div className="box">
      <Link href="/" passHref>
        <div className="find">잊으셨나요?</div>
      </Link>
      <Link href="/signup" passHref>
        <div className="sign">회원가입</div>
      </Link>

      {/* CSS */}
      <style jsx>
        {`
          .box {
            position: relative;
            display: flex;
            justify-content: center;
            padding-bottom: 1.37rem;
          }
          .find {
            position: relative;
            color: #8c9499;
            text-align: center;
            font-size: ${Font.Size.XS};
            font-weight: 400;
            padding: 0 0.5rem;
          }

          .sign {
            position: relative;
            color: #8c9499;
            text-align: center;
            font-size: ${Font.Size.XS};
            font-weight: 400;
            padding: 0 0.5rem;
          }
        `}
      </style>
    </div>
  );
}
