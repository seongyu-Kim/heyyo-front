import * as style from "@/components/pages/main/Heyyo-Main-page/HeyyoMainPage.style";
import Image from "next/image";

export default function HeyyoMainPage() {
  return (
    <style.Box>
      <style.HeyyoMainBanner>
        <Image
          src="/assets/img/banner/HeyyoMainBanner.svg"
          alt="HeyyoMainBanner"
          loader={() => "/assets/img/banner/HeyyoMainBanner.svg"}
          layout="responsive"
          width={1920}
          height={938}
        />
      </style.HeyyoMainBanner>
    </style.Box>
  );
}
