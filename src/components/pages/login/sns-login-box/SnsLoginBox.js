import Image from "next/image";
import { KAKAO_AUTH_URL } from "@/apis/auth/login/kakaoOAuth";
import { NAVER_AUTH_URL } from "@/apis/auth/login/naverOAuth";
import { GOOGLE_AUTH_URL } from "@/apis/auth/login/googleOAuth";
import Link from "next/link";

export default function SnsLoginBox() {
  return (
    <div className="box">
      <div>
        <Link href={NAVER_AUTH_URL}>
          <button>
            <Image
              src="/icon/Naver.svg"
              alt="naver"
              loader={() => "/icon/Naver.svg"}
              width={40}
              height={40}
            />
          </button>
        </Link>
      </div>
      <div>
        <Link href={KAKAO_AUTH_URL}>
          <button>
            <Image
              src="/icon/Kakao.svg"
              alt="kakao"
              loader={() => "/icon/Kakao.svg"}
              width={40}
              height={40}
            />
          </button>
        </Link>
      </div>
      <div>
        <Link href={GOOGLE_AUTH_URL}>
          <button>
            <Image
              src="/icon/Google.svg"
              alt="google"
              loader={() => "/icon/Google.svg"}
              width={40}
              height={40}
            />
          </button>
        </Link>
      </div>

      {/* CSS */}
      <style jsx>
        {`
          .box {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
