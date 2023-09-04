import * as style from "@/components/pages/notice/notice-competition-container/NoticeCompetitionContainer.style";
import NoticeSwiper from "@/components/pages/notice/notice-swiper/NoticeSwiper";
import * as React from "react";
import Image from "next/image";

export default function SwiperBox(){
    return(
        <style.CompetitionContainer>

                <style.CompetitionText>
                    <Image
                        src="/assets/img/Noticetitle.svg"
                        alt="공모전 Title"
                        loader={() => "/assets/img/Noticetitle.svg"}
                        width={384}
                        height={47}
                    />
                </style.CompetitionText>

            <NoticeSwiper />

        </style.CompetitionContainer>

    )
}