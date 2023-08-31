import * as style from "@/components/pages/main/group-study-page/group-study-thumbnail-swiper/GroupStudyLikeThumbnailSwiper.style";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {useEffect, useState} from "react";
import GroupStudyLikeThumbnail
    from "@/components/pages/main/group-study-page/group-study-thumbnail/GroupStudyLikeThumbnail";
import {groupStudyLikeList} from "@/apis/group-study/list/groupStudyList";

export default function GroupStudyLikeThumbnailSwiper() {
    const [groupStudyLikeListData, setGroupStudyLikeListData] = useState([]);

    useEffect(() => {
        groupStudyLikeList()
            .then((response) => {
                console.log("Like 성공:", response);
                setGroupStudyLikeListData(response);
            });
    }, []);

    // 4개씩 묶은 배열
    const chunkSize = 4;
    const groupedLikeThumbnails = [];
    for (let i = 0; i < groupStudyLikeListData.length; i += chunkSize) {
        groupedLikeThumbnails.push(groupStudyLikeListData.slice(i, i + chunkSize));
    }
    return (
        <style.LikeSwiperBox
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation]}
        >
            {groupedLikeThumbnails.map((groupStudyGroupLike, pageIndex) => (
                <SwiperSlide key={pageIndex}>
                    <GroupStudyLikeThumbnail groupStudyLikeListData={groupStudyGroupLike} />
                </SwiperSlide>
            ))}

        </style.LikeSwiperBox>
    );
}
