import React from "react";
import Image from "next/image";

export default function ShareBanner() {
    return (
        <Image
            src="/assets/img/ShareBanner.svg"
            alt="ShareBanner"
            loader={() => "/assets/img/ShareBanner.svg"}
            width={1920}
            height={574}
        />
    );
}
