import React from "react";
import * as style from "@/components/pages/share/share-box/ShareBox.style";
import Image from "next/image";
import ShareSwiper from "@/components/pages/share/share-swiper/ShareSwiper";

export default function ShareBox() {
    return (
        <style.ContainerDiv>
            <style.TitleDiv>
                <Image
                    src="/assets/img/title.svg"
                    alt="Title"
                    loader={() => "/assets/img/title.svg"}
                    width={384}
                    height={47}
                />


            </style.TitleDiv>
            <ShareSwiper/>

        </style.ContainerDiv>
    );
}
