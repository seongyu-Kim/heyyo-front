import * as style from "@/components/pages/main/group-study-list-page/group-study-thumbnail-swiper/GroupStudyNewThumbnailSwiper.style";
import GroupStudyNewThumbnail from "@/components/pages/main/group-study-list-page/group-study-thumbnail/GroupStudyNewThumbnail";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { groupStudyNewList } from "@/apis/group-study/group-study-list/groupStudyList";
import { useEffect, useState } from "react";

export default function GroupStudyNewThumbnailSwiper() {
  const [groupStudyNewListData, setGroupStudyNewListData] = useState([]);

  useEffect(() => {
    groupStudyNewList().then((response) => {
      console.log("New 성공:", response);
      setGroupStudyNewListData(response);
    });
  }, []);

  // 4개씩 묶은 배열
  const chunkSize = 4;
  const groupedNewThumbnails = [];
  for (let i = 0; i < groupStudyNewListData.length; i += chunkSize) {
    groupedNewThumbnails.push(groupStudyNewListData.slice(i, i + chunkSize));
  }
  return (
    <style.NewSwiperBox
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation]}
    >
      {groupedNewThumbnails.map((groupStudyGroupNew, pageIndex) => (
        <SwiperSlide key={pageIndex}>
          <GroupStudyNewThumbnail groupStudyNewListData={groupStudyGroupNew} />
        </SwiperSlide>
      ))}
    </style.NewSwiperBox>
  );
}
