import React, { useState } from "react";
import * as style from "@/components/pages/main/group-study-list-page/group-study-thumbnail/GroupStudyNewThumbnail.style";

export default function GroupStudyNewThumbnail({ groupStudyNewListData }) {
  const [heartClickedArray, setHeartClickedArray] = useState(
    Array.from({ length: groupStudyNewListData.length }).fill(false),
  );

  const toggleHeart = (index) => {
    const newHeartClickedArray = [...heartClickedArray];
    newHeartClickedArray[index] = !newHeartClickedArray[index];
    setHeartClickedArray(newHeartClickedArray);
  };

  return (
    <style.NewThumbnailBox>
      {groupStudyNewListData.map((groupStudyNew, index) => (
        <style.NewThumbnail key={index}>
          <style.NewHeartButton onClick={() => toggleHeart(index)}>
            {heartClickedArray[index] ? (
              <style.NewclickHeart
                src="/assets/img/Click_Heart.svg"
                alt="Click_Heart"
                loader={() => "/assets/img/Click_Heart.svg"}
                width={22}
                height={22}
              />
            ) : (
              <style.NewNonclickHeart
                src="/assets/img/Nonclick_Heart.svg"
                alt="Nonclick_Heart"
                loader={() => "/assets/img/Nonclick_Heart.svg"}
                width={22}
                height={22}
              />
            )}
          </style.NewHeartButton>
          <style.NewTitle>{groupStudyNew.title}</style.NewTitle>
          <style.NewHashTag>
            {groupStudyNew.tags.map((tags) => `#${tags}`).join(" ")}
          </style.NewHashTag>
          <style.NewViews>
            <style.NewViewsImage
              src="/assets/img/GroupStudy_Views.svg"
              alt="Views"
              loader={() => "/assets/img/GroupStudy_Views.svg"}
              width={19}
              height={17}
            />
            {groupStudyNew.viewerCount}
          </style.NewViews>
        </style.NewThumbnail>
      ))}
    </style.NewThumbnailBox>
  );
}
