import React, { useState } from "react";
import * as style from "@/components/pages/main/group-study-page/group-study-thumbnail/GroupStudyThumbnail.style";

export default function GroupStudyThumbnail() {
  const thumbnailArray = Array.from({ length: 4 });
  const [heartClickedArray, setHeartClickedArray] = useState(
    new Array(4).fill(false),
  );

  const toggleHeart = (index) => {
    const newHeartClickedArray = [...heartClickedArray];
    newHeartClickedArray[index] = !newHeartClickedArray[index];
    setHeartClickedArray(newHeartClickedArray);
  };

  return (
    <style.ThumbnailBox>
      {thumbnailArray.map((_, index) => (
        <style.Thumbnail key={index}>
          <style.HeartButton onClick={() => toggleHeart(index)}>
            <style.NonclickHeart
              src={
                heartClickedArray[index]
                  ? "/assets/img/Click_Heart.svg"
                  : "/assets/img/Nonclick_Heart.svg"
              }
              alt={heartClickedArray[index] ? "Click_Heart" : "Nonclick_Heart"}
              loader={() =>
                heartClickedArray[index]
                  ? "/assets/img/Click_Heart.svg"
                  : "/assets/img/Nonclick_Heart.svg"
              }
              width={22}
              height={22}
            />
          </style.HeartButton>
          <style.Title>Title 들어갈 예정</style.Title>
          <style.HashTag>#소통해요 #집중해요</style.HashTag>
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
  );
}
