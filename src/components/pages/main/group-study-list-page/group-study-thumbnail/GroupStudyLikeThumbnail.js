import React, { useState } from "react";
import * as style from "@/components/pages/main/group-study-list-page/group-study-thumbnail/GroupStudyLikeThumbnail.style";

export default function GroupStudyLikeThumbnail({ groupStudyLikeListData }) {
  const [heartClickedArray, setHeartClickedArray] = useState(
    Array.from({ length: groupStudyLikeListData.length }).fill(false),
  );

  const toggleHeart = (index) => {
    const likeHeartClickedArray = [...heartClickedArray];
    likeHeartClickedArray[index] = !likeHeartClickedArray[index];
    setHeartClickedArray(likeHeartClickedArray);
  };

  return (
    <style.LikeThumbnailBox>
      {groupStudyLikeListData.map((groupStudyLike, index) => (
        <style.LikeThumbnail key={index}>
          <style.LikeHeartButton onClick={() => toggleHeart(index)}>
            {heartClickedArray[index] ? (
              <style.LikeclickHeart
                src="/assets/img/Click_Heart.svg"
                alt="Click_Heart"
                loader={() => "/assets/img/Click_Heart.svg"}
                width={22}
                height={22}
              />
            ) : (
              <style.LikeNonclickHeart
                src="/assets/img/Nonclick_Heart.svg"
                alt="Nonclick_Heart"
                loader={() => "/assets/img/Nonclick_Heart.svg"}
                width={22}
                height={22}
              />
            )}
          </style.LikeHeartButton>
          <style.LikeTitle>{groupStudyLike.title}</style.LikeTitle>
          <style.LikeHashTag>
            {groupStudyLike.tags.map((tags) => `#${tags}`).join(" ")}
          </style.LikeHashTag>
          <style.LikeViews>
            <style.LikeViewsImage
              src="/assets/img/GroupStudy_Views.svg"
              alt="Views"
              loader={() => "/assets/img/GroupStudy_Views.svg"}
              width={19}
              height={17}
            />
            {groupStudyLike.viewerCount}
          </style.LikeViews>
        </style.LikeThumbnail>
      ))}
    </style.LikeThumbnailBox>
  );
}
