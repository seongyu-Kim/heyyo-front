import { useRouter } from "next/router";
import * as style from "@/components/pages/main/group-study-view-page/group-study-view-page-layout/GroupStudyViewPageLayout.style";
import Image from "next/image";
import GroupStudyViewPageTab from "@/components/pages/main/group-study-view-page/group-study-view-page-tab/GroupStudyViewPageTab";
import GroupStudyViewPageRecommendThumbnail from "@/components/pages/main/group-study-view-page/group-study-view-page-thumbnail/GroupStudyViewPageRecommendThumbnail";

export default function GroupStudyViewPageLayout() {
  const router = useRouter();

  // 파라미터에 groupstudyview?mbti='캐릭터 name' 으로 표시
  const { mbti } = router.query;

  const images = {
    Researching: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_연구.svg",
      alt: "HeyyoGroupStudyBanner_연구",
    },
    Quiet: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_한산.svg",
      alt: "HeyyoGroupStudyBanner_한산",
    },
    Focus: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_집중.svg",
      alt: "HeyyoGroupStudyBanner_집중",
    },
    Timid: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_소심.svg",
      alt: "HeyyoGroupStudyBanner_소심",
    },
    Useful: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_유익.svg",
      alt: "HeyyoGroupStudyBanner_유익",
    },
    Crowded: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_북적.svg",
      alt: "HeyyoGroupStudyBanner_북적",
    },
    Loneliness: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_고독.svg",
      alt: "HeyyoGroupStudyBanner_고독",
    },
    Communication: {
      src: "/assets/img/banner/HeyyoGroupStudyBanner_소통.svg",
      alt: "HeyyoGroupStudyBanner_소통",
    },
  };

  const selectedImage = images[mbti];

  if (!selectedImage) {
    return null;
  }

  return (
    <style.Box>
      <style.GroupStudyViewContainer>
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          loader={() => selectedImage.src}
          width={1920}
          height={541}
        />

        <style.GroupStudyTab>
          <GroupStudyViewPageTab />
        </style.GroupStudyTab>
        <style.GroupStudyOpposite>
          <style.GroupStudyOppositeTitle>
            정반대의 성향 공부방 탐색하기
          </style.GroupStudyOppositeTitle>
          <GroupStudyViewPageRecommendThumbnail />
        </style.GroupStudyOpposite>
      </style.GroupStudyViewContainer>
    </style.Box>
  );
}
