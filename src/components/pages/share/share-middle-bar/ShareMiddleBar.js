import React, { useState } from "react";
import * as style from "@/components/pages/share/share-middle-bar/ShareMiddleBar.style";
import Image from "next/image";
import Link from "next/link";
import ShareBottomBox from "@/components/pages/share/share-bottom-box/ShareBottomBox";
import ShareDiffBottomBox from "@/components/pages/share/share-diff-bottom-box/ShareDiffBottomBox";

export default function ShareMiddleBar({ setSelectedTab }) {
  // const [selectedTab, setSelectedTab] = useState("ShareDiffBottomBox"); // 초기 선택 탭 설정

  return (
    <style.Wrapper>
      <style.BarStyle>
        <style.TextSet>
          <style.TextStyle>레벨순</style.TextStyle>
          <style.TextStyle2>인기순</style.TextStyle2>
          <style.TextStyle2>조회순</style.TextStyle2>
          <style.TextStyle2>최신순</style.TextStyle2>
        </style.TextSet>

        <style.BarImage1>
          <button
            onClick={() => setSelectedTab("ShareDiffBottomBox")}
            active={setSelectedTab === "ShareDiffBottomBox"}
          >
            <Image
              src="/assets/img/MiddleBar1.svg"
              alt="MiddleBar1"
              loader={() => "/assets/img/MiddleBar1.svg"}
              width={38.31}
              height={37.6}
            />
          </button>
        </style.BarImage1>

        <style.BarImage2>
          <button
            onClick={() => setSelectedTab("ShareBottomBox")}
            active={setSelectedTab === "ShareBottomBox"}
          >
            <Image
              src="/assets/img/MiddleBar2.svg"
              alt="MiddleBar2"
              loader={() => "/assets/img/MiddleBar2.svg"}
              width={38.31}
              height={38.31}
            />
          </button>
        </style.BarImage2>
      </style.BarStyle>

      {/*{selectedTab === "ShareDiffBottomBox" && (*/}
      {/*    <ShareDiffBottomBox />*/}
      {/*)}*/}
      {/*{selectedTab === "ShareBottomBox" && (*/}
      {/*    <ShareBottomBox />*/}
      {/*)}*/}
    </style.Wrapper>
  );
}
