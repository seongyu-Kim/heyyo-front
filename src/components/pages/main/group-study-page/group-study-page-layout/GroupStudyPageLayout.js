import * as style from "@/components/pages/main/group-study-page/group-study-page-layout/GroupStudyPageLayout.style";
import Image from "next/image";
import GroupHashtagBox from "@/components/pages/main/group-study-page/group-hashtag-box/GroupHashtagBox";
import GroupStudyThumbnailSwiper from "@/components/pages/main/group-study-page/group-study-thumbnail-swiper/GroupStudyThumbnailSwiper";
import GroupStudyRecommendThumbnail from "@/components/pages/main/group-study-page/group-study-recommend-thumbnail/GroupStudyRecommendThumbnail";

export default function GroupStudyPageLayout() {
  return (
    <style.Box>
      <style.HeyyoGroupStudyContainer>
        <Image
          src="/assets/img/banner/HeyyoGroupStudyBanner.svg"
          alt="HeyyoGroupStudyBanner"
          loader={() => "/assets/img/banner/HeyyoGroupStudyBanner.svg"}
          width={1920}
          height={541}
        />
        <style.FindDiv>
          <style.Container>
            <style.FindContentBold>FIND BY KEYWORD</style.FindContentBold>
            <style.FindContent>
              내가 공부하고싶은 공부방 분위기를 골라봐 YO!
            </style.FindContent>
          </style.Container>
          <GroupHashtagBox />
        </style.FindDiv>
        <style.NewGroupStudy>
          <style.Container>
            <style.NewContentBold>NEW</style.NewContentBold>
            <style.NewContent>
              방금 생긴 따끈따끈한 공부방이에YO!
            </style.NewContent>
          </style.Container>
          <GroupStudyThumbnailSwiper />
        </style.NewGroupStudy>
        <style.BestDiv>
          <style.Container>
            <style.BestContentBold>BEST</style.BestContentBold>
            <style.BestContent>실시간 인기있는 공부방이에yo!</style.BestContent>
          </style.Container>
          <GroupStudyThumbnailSwiper />
        </style.BestDiv>
        <style.RecommendDiv>
          <style.Container>
            <style.RecommendContentBold>
              이런 공부방은 어때yo !
            </style.RecommendContentBold>
          </style.Container>
          <GroupStudyRecommendThumbnail />
        </style.RecommendDiv>
      </style.HeyyoGroupStudyContainer>
    </style.Box>
  );
}
