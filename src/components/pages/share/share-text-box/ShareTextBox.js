import React, { useState } from "react";
import * as style from "@/components/pages/share/share-text-box/ShareTextBox.style";
import Image from "next/image";

export default function ShareTextBox({ text }) {
    const [isVector1New, setIsVector1New] = useState(false);

    const handleVector1Click = () => {
        setIsVector1New(!isVector1New);
    };

    return (
        <style.BoxDiv>
            <style.BoxTextStyle1>의대졸업생이 선물하는 뇌과학 요약정리</style.BoxTextStyle1>
            <style.BoxTextStyle2>좌뇌와 우뇌의 차이부터 많은 양을 암기할 수 있는 암기꿀팁까지!</style.BoxTextStyle2>
            <style.BoxTextStyle3>#의예 #좌뇌 #우뇌</style.BoxTextStyle3>
            <style.BoxTextStyle4>준규</style.BoxTextStyle4>
            <style.BoxTextStyle5>pdf</style.BoxTextStyle5>

            <style.TextBoxImage>
                <Image
                    src="/assets/img/TextBoxImage.svg"
                    alt="Title"
                    loader={() => "/assets/img/TextBoxImage.svg"}
                    width={363}
                    height={258}
                />
            </style.TextBoxImage>

            <style.VectorImage3 onClick={handleVector1Click}>
                <Image
                    src={isVector1New ? "/assets/img/changeVector1.svg" : "/assets/img/changeVector1.svg"}
                    alt="changeVector1"
                    loader={() =>
                        isVector1New ? "/assets/img/changeVector1.svg" : "/assets/img/Vector1.svg"
                    }
                    width={23}
                    height={30}
                />
            </style.VectorImage3>

            <style.VectorImage2>
                <Image
                    src="/assets/img/Vector2.svg"
                    alt="Vector2"
                    loader={() => "/assets/img/Vector2.svg"}
                    width={23}
                    height={30}
                />
            </style.VectorImage2>

            {/*<style.VectorImage3>*/}
            {/*    <Image*/}
            {/*        src="/assets/img/Vector3.svg"*/}
            {/*        alt="Vector2"*/}
            {/*        loader={() => "/assets/img/Vector3.svg"}*/}
            {/*        width={23}*/}
            {/*        height={30}*/}
            {/*    />*/}
            {/*</style.VectorImage3>*/}

            <style.VectorImage4>
                <Image
                    src="/assets/img/Vector4.svg"
                    alt="Title"
                    loader={() => "/assets/img/Vector4.svg"}
                    width={23}
                    height={30}
                />
            </style.VectorImage4>
        </style.BoxDiv>
    );
}
