import React, { useEffect, useState } from "react";
import * as style from "@/components/pages/main/group-study-list-page/group-study-thumbnail/GroupStudyRecommendThumbnail.style";
import Image from "next/image";
import { groupStudyRecommendList } from "@/apis/group-study/group-study-list/groupStudyList";

export default function GroupStudyRecommendThumbnail() {
  const thumbnailArray = Array.from({ length: 4 });
  const [groupStudyRecommendListData, setGroupStudyRecommendListData] =
    useState([]);

  // useEffect(() => {
  //   groupStudyRecommendList()
  //       .then((response) => {
  //         console.log("Like 성공:", response);
  //         setGroupStudyRecommendListData(response);
  //       });
  // }, []);

  const [heartClickedArrays, setHeartClickedArrays] = useState(
    new Array(8).fill(false),
  );

  const toggleHeart = (groupIndex, thumbnailIndex) => {
    const newHeartClickedArrays = [...heartClickedArrays];
    const clickedIndex = groupIndex * 4 + thumbnailIndex;
    newHeartClickedArrays[clickedIndex] = !newHeartClickedArrays[clickedIndex];
    setHeartClickedArrays(newHeartClickedArrays);
  };

  return (
    <>
      {Array.from({ length: 2 }).map((_, groupIndex) => (
        <style.RecommendThumbnailBox key={groupIndex}>
          {thumbnailArray.map((_, thumbnailIndex) => (
            <style.RecommendThumbnail key={thumbnailIndex}>
              <style.RecommendHeartButton
                onClick={() => toggleHeart(groupIndex, thumbnailIndex)}
              >
                <style.RecommendNonclickHeart
                  src={
                    heartClickedArrays[groupIndex * 4 + thumbnailIndex]
                      ? "/assets/img/Click_Heart.svg"
                      : "/assets/img/Nonclick_Heart.svg"
                  }
                  alt={
                    heartClickedArrays[groupIndex * 4 + thumbnailIndex]
                      ? "Click_Heart"
                      : "Nonclick_Heart"
                  }
                  loader={() =>
                    heartClickedArrays[groupIndex * 4 + thumbnailIndex]
                      ? "/assets/img/Click_Heart.svg"
                      : "/assets/img/Nonclick_Heart.svg"
                  }
                  width={22}
                  height={22}
                />
              </style.RecommendHeartButton>
              <style.RecommendTitle>Title 들어갈 예정</style.RecommendTitle>
              <style.RecommendHashTag>
                #소통해요#집중해요
              </style.RecommendHashTag>
              <style.RecommendViews>
                <style.RecommendViewsImage
                  src="/assets/img/GroupStudy_Views.svg"
                  alt="Views"
                  loader={() => "/assets/img/GroupStudy_Views.svg"}
                  width={19}
                  height={17}
                />
                560
              </style.RecommendViews>
            </style.RecommendThumbnail>
          ))}
        </style.RecommendThumbnailBox>
      ))}
      <style.RecommendShowMoreButton>
        <Image
          src="/assets/img/ShowmoreButton.svg"
          alt="ShowmoreButton"
          loader={() => "/assets/img/ShowmoreButton.svg"}
          width={182}
          height={49}
        />
      </style.RecommendShowMoreButton>
    </>
  );
}
