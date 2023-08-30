import React, { useState } from "react";
import * as style from "@/components/pages/main/group-study-page/group-study-recommend-thumbnail/GroupStudyRecommendThumbnail.style";
import Image from "next/image";

export default function GroupStudyRecommendThumbnail() {
  const thumbnailArray = Array.from({ length: 4 });

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
        <style.ThumbnailBox key={groupIndex}>
          {thumbnailArray.map((_, thumbnailIndex) => (
            <style.Thumbnail key={thumbnailIndex}>
              <style.HeartButton
                onClick={() => toggleHeart(groupIndex, thumbnailIndex)}
              >
                <style.NonclickHeart
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
              </style.HeartButton>
              <style.Title>Title 들어갈 예정</style.Title>
              <style.HashTag>#소통해요#집중해요</style.HashTag>
              <style.Views>
                <style.ViewsImage
                  src="/assets/img/Views.svg"
                  alt="Views"
                  loader={() => "/assets/img/Views.svg"}
                  width={19}
                  height={17}
                />
                560
              </style.Views>
            </style.Thumbnail>
          ))}
        </style.ThumbnailBox>
      ))}
      <style.ShowMoreButton>
        <Image
          src="/assets/img/ShowmoreButton.svg"
          alt="ShowmoreButton"
          loader={() => "/assets/img/ShowmoreButton.svg"}
          width={182}
          height={49}
        />
      </style.ShowMoreButton>
    </>
  );
}
