import * as style from "@/components/pages/main/group-study-list-page/group-study-list-page-layout/GroupStudyListPageLayout.style";
import Image from "next/image";
import GroupHashtagBox from "@/components/pages/main/group-study-list-page/group-hashtag-box/GroupHashtagBox";
import GroupStudyNewThumbnailSwiper from "@/components/pages/main/group-study-list-page/group-study-thumbnail-swiper/GroupStudyNewThumbnailSwiper";
import GroupStudyRecommendThumbnail from "@/components/pages/main/group-study-list-page/group-study-thumbnail/GroupStudyRecommendThumbnail";
import GroupStudyLikeThumbnailSwiper from "@/components/pages/main/group-study-list-page/group-study-thumbnail-swiper/GroupStudyLikeThumbnailSwiper";

export default function GroupStudyListPageLayout() {
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
          <GroupStudyNewThumbnailSwiper />
        </style.NewGroupStudy>
        <style.BestDiv>
          <style.Container>
            <style.BestContentBold>BEST</style.BestContentBold>
            <style.BestContent>실시간 인기있는 공부방이에yo!</style.BestContent>
          </style.Container>
          <GroupStudyLikeThumbnailSwiper />
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
