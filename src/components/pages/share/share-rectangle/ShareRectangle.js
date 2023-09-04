import React from "react";
import * as style from "@/components/pages/share/share-rectangle/ShareRectangle.style"
import Image from "next/image";

export default function ShareRectangle({text}) {
    return (
        <style.ContainerStyle>
            <style.TextStyle>
                {text}
            </style.TextStyle>
            <style.HeartStyle>
                <Image
                    src="/assets/img/Vector1.svg"
                    alt="Vector1"
                    loader={() => "/assets/img/Vector1.svg"}
                    width={22}
                    height={20.6}
                />
            </style.HeartStyle>
        </style.ContainerStyle>


    );
}
