import React, { useState } from "react";
import * as style from "@/components/pages/share/share-diff-text-box/ShareDiffTextBox.style";
import { TextDiffContainerDiv } from "@/components/pages/share/share-diff-text-box/ShareDiffTextBox.style";
import Image from "next/image";

export default function xShareDiffTextBox() {
  const [isVector1New, setIsVector1New] = useState(false);

  const handleVector1Click = () => {
    setIsVector1New(!isVector1New);
  };

  return (
    <TextDiffContainerDiv>
      <style.BoxDiffDiv>
        <style.BoxDiffTextStyle1>
          의대졸업생이 선물하는 뇌과학 요약정리✔
        </style.BoxDiffTextStyle1>
        <style.BoxDiffTextStyle2>
          좌뇌와 우뇌의 차이부터 많은 양을 암기할 수 있는 암기꿀팁까지!
        </style.BoxDiffTextStyle2>
        <style.BoxDiffTextStyle3>#의예 #좌뇌 #우뇌</style.BoxDiffTextStyle3>
        <style.BoxDiffTextStyle4>준규😎</style.BoxDiffTextStyle4>
        <style.BoxDiffTextStyle5>pdf</style.BoxDiffTextStyle5>

        <style.TextDiffBoxImage>
          <Image
            src="/assets/img/TextBoxImage.svg"
            alt="Title"
            loader={() => "/assets/img/TextBoxImage.svg"}
            width={356}
            height={229}
          />
        </style.TextDiffBoxImage>

        <style.VectorImage1 onClick={handleVector1Click}>
          <Image
            src={
              isVector1New
                ? "/assets/img/changeVector1.svg" // changeVector1.svg 파일 경로
                : "/assets/img/Vector1.svg"
            }
            alt="Vector1"
            loader={() =>
              isVector1New
                ? "/assets/img/changeVector1.svg" // changeVector1.svg 파일 경로
                : "/assets/img/Vector1.svg"
            }
            width={23}
            height={30}
          />
        </style.VectorImage1>

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
      </style.BoxDiffDiv>
    </TextDiffContainerDiv>
  );
}
