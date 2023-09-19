import * as style from "@/components/pages/notice/notice-start-box/NoticeStartBox.style";
import Image from "next/image";
import { ImageWrapper } from "@/components/pages/notice/notice-start-box/NoticeStartBox.style";
export default function StartBox() {
  return (
    <style.Box>
      <style.ImageWrapper>
        <Image
          src="/assets/img/banner/NoticeBanner.svg"
          alt="배너 사진"
          loader={() => "/assets/img/banner/NoticeBanner.svg"}
          width={1920}
          height={574}
        />
      </style.ImageWrapper>
    </style.Box>
  );
}
