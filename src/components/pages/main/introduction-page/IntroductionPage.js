import * as style from "@/components/pages/main/introduction-page/Introduction.style";
import Image from "next/image";
import Link from "next/link";

export default function IntroductionPage() {
  return (
    <style.Box>
      <style.IntroductionMainBanner>
        <Image
          src="/assets/img/banner/IntroductionMainBanner.svg"
          alt="IntroductionMainBanner"
          loader={() => "/assets/img/banner/IntroductionMainBanner.svg"}
          layout="responsive"
          width={1920}
          height={3731}
        />
      </style.IntroductionMainBanner>

      <style.IntroductionGroupStudyMainBanner>
        <Link href="/login">
          <style.ButtonContainer>
            <style.GroupStudyButton />
          </style.ButtonContainer>
        </Link>
        <Image
          src="/assets/img/banner/IntroductionGroupStudyMainBanner.svg"
          alt="IntroductionGroupStudyMainBanner"
          loader={() =>
            "/assets/img/banner/IntroductionGroupStudyMainBanner.svg"
          }
          layout="responsive"
          width={1920}
          height={2010}
        />
      </style.IntroductionGroupStudyMainBanner>

      <style.IntroductionReferenceroomMainBanner>
        <Link href="/login">
          <style.ButtonContainer>
            <style.GroupStudyButton />
          </style.ButtonContainer>
        </Link>
        <Image
          src="/assets/img/banner/IntroductionReferenceroomMainBanner.svg"
          alt="IntroductionReferenceroomMainBanner"
          loader={() =>
            "/assets/img/banner/IntroductionReferenceroomMainBanner.svg"
          }
          layout="responsive"
          width={1920}
          height={1051}
        />
      </style.IntroductionReferenceroomMainBanner>

      <style.IntroductionMypageMainBanner>
        <Link href="/login">
          <style.ButtonContainer>
            <style.GroupStudyButton />
          </style.ButtonContainer>
        </Link>
        <Image
          src="/assets/img/banner/IntroductionMypageMainBanner.svg"
          alt="IntroductionMypageMainBanner"
          loader={() => "/assets/img/banner/IntroductionMypageMainBanner.svg"}
          layout="responsive"
          width={1920}
          height={1186}
        />
      </style.IntroductionMypageMainBanner>

      <style.IntroductionCommunityMainBanner>
        <Link href="/login">
          <style.ButtonContainer>
            <style.GroupStudyButton />
          </style.ButtonContainer>
        </Link>
        <Image
          src="/assets/img/banner/IntroductionCommunityMainBanner.svg"
          alt="IntroductionCommunityMainBanner"
          loader={() =>
            "/assets/img/banner/IntroductionCommunityMainBanner.svg"
          }
          layout="responsive"
          width={1920}
          height={1186}
        />
      </style.IntroductionCommunityMainBanner>
    </style.Box>
  );
}
