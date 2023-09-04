import React from "react";
import * as style from "@/components/pages/notice/notice-competition-box/NoticeCompetitionBox.style";
import Image from "next/image";

export default function Rectangle({image}) {
    return (
        <style.BoxStyle>
            <Image
                src={image}
                alt="공모전 사진"
                loader={() => image}
                width={293}
                height={374}
            />
        </style.BoxStyle>

    );
}