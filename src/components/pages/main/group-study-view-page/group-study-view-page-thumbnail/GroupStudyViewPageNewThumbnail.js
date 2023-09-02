import * as style from "@/components/pages/main/group-study-view-page/group-study-view-page-thumbnail/GroupStudyViewPageNewThumbnail.style";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { groupStudyViewNewList } from "@/apis/group-study/group-study-view-list/groupStudyViewList";
import { useRouter } from "next/router";

export default function GroupStudyViewPageNewThumbnail() {
  const numThumbnails = 6;
  const [groupStudyViewNewListData, setGroupStudyViewNewListData] = useState(
    [],
  );
  const router = useRouter();

  useEffect(() => {
    const { mbti } = router.query;

    if (mbti) {
      groupStudyViewNewList(mbti).then((response) => {
        console.log("데이터 가져오기 성공:", response);
        setGroupStudyViewNewListData(response);
      });
    }
  }, [router.query]);

  return (
    <style.ThumbnailContainer>
      {groupStudyViewNewListData.map((item, index) => (
        <style.ThumbnailBox key={index}>
          <style.ThumbnailImage />
          <style.ThumbnailTitle>{item.title}</style.ThumbnailTitle>
          <style.ThumbnailBr />
          <style.ThumbnailContent>{item.content}</style.ThumbnailContent>
          <style.ThumbnailBr />
          <style.ThumbnailHashTag>#{item.tags}</style.ThumbnailHashTag>
          <style.ThumbnailVIewLikeDiv>
            <style.ThumbnailViewLikeLeft>
              시청자 수: {item.viewerCount}
            </style.ThumbnailViewLikeLeft>
            <style.ThumbnailViewLikeRight>
              좋아요: {item.liked}
            </style.ThumbnailViewLikeRight>
          </style.ThumbnailVIewLikeDiv>
        </style.ThumbnailBox>
      ))}
      <style.MoreButton>
        <Image
          src="/assets/img/ShowmoreButton.svg"
          alt="ShowmoreButton"
          loader={() => "/assets/img/ShowmoreButton.svg"}
          width={182}
          height={49}
        />
      </style.MoreButton>
    </style.ThumbnailContainer>
  );
}
