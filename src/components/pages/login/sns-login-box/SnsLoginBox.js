import * as style from "@/components/pages/login/sns-login-box/SnsLoginBox.style";
import { KAKAO_AUTH_URL } from "@/apis/auth/login/kakaoOAuth";
import { NAVER_AUTH_URL } from "@/apis/auth/login/naverOAuth";
import { GOOGLE_AUTH_URL } from "@/apis/auth/login/googleOAuth";
import Link from "next/link";
import Image from "next/image";

export default function SnsLoginBox() {
  return (
    <style.BoxDiv>
      <style.NaverDiv>
        <Link href={NAVER_AUTH_URL}>
          <style.NaverButton>
            <Image
              src="/assets/icon/Naver.svg"
              alt="naver"
              loader={() => "/assets/icon/Naver.svg"}
              width={40}
              height={40}
            />
          </style.NaverButton>
        </Link>
      </style.NaverDiv>
      <style.KakaoDiv>
        <Link href={KAKAO_AUTH_URL}>
          <style.KakaoButton>
            <Image
              src="/assets/icon/Kakao.svg"
              alt="kakao"
              loader={() => "/assets/icon/Kakao.svg"}
              width={40}
              height={40}
            />
          </style.KakaoButton>
        </Link>
      </style.KakaoDiv>
      <style.GoogleDiv>
        <Link href={GOOGLE_AUTH_URL}>
          <style.GoogleButton>
            <Image
              src="/assets/icon/Google.svg"
              alt="google"
              loader={() => "/assets/icon/Google.svg"}
              width={40}
              height={40}
            />
          </style.GoogleButton>
        </Link>
      </style.GoogleDiv>
    </style.BoxDiv>
  );
}
