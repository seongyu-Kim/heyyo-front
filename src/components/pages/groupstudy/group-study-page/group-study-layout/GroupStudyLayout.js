import * as style from "@/components/pages/groupstudy/group-study-page/group-study-layout/GroupStudyLayout.style";
import Image from "next/image";
import { useState } from "react";

export default function GroupStudyLayout() {
  // 채팅과 자료실 아이콘 클릭 시 이미지 변경
  const [chatImageClicked, setChatImageClicked] = useState(false);
  const [referenceImageClicked, setReferenceImageClicked] = useState(false);

  const handleChatImageClick = () => {
    setChatImageClicked(!chatImageClicked);
    setReferenceImageClicked(false);
  };

  const handleReferenceImageClick = () => {
    setReferenceImageClicked(!referenceImageClicked);
    setChatImageClicked(false);
  };

  return (
    <style.GroupstudyLayout>
      <style.TopContainer>
        <style.BackButton>
          <Image
            src="/assets/img/GroupStudyBackButton.svg"
            alt="GroupStudyBackButton"
            loader={() => "/assets/img/GroupStudyBackButton.svg"}
            width={50}
            height={50}
          />
        </style.BackButton>
        <style.TopBoxTitle>문학 파먹기 고독방🤫</style.TopBoxTitle>
        <style.HashTagBox>
          <style.Hashtag>#문학개론</style.Hashtag>
          <style.Hashtag>#고독방</style.Hashtag>
        </style.HashTagBox>
        <style.TopBox>
          <style.TopBoxShareButton>
            <Image
              src="/assets/img/GroupStudyShare.svg"
              alt="GroupStudyShare"
              loader={() => "/assets/img/GroupStudyShare.svg"}
              width={25}
              height={25}
            />
          </style.TopBoxShareButton>
          <style.TopBoxReportButton>
            <Image
              src="/assets/img/GroupStudyReport.svg"
              alt="GroupStudyReport"
              loader={() => "/assets/img/GroupStudyReport.svg"}
              width={25}
              height={25}
            />
          </style.TopBoxReportButton>
        </style.TopBox>
      </style.TopContainer>
      <style.Content>
        <style.ContentTitle>문학 파먹기 고독방🤫</style.ContentTitle>
        <style.ContentButton>입장하기</style.ContentButton>
      </style.Content>
      <style.BottomBox>
        <style.BottomBoxIcon>
          <Image
            src="/assets/img/GroupStudyBest.svg"
            alt="GroupStudyBest"
            loader={() => "/assets/img/GroupStudyBest.svg"}
            width={25}
            height={25}
          />
          <Image
            src={
              chatImageClicked
                ? "/assets/img/GroupStudyChat_Click.svg"
                : "/assets/img/GroupStudyChat_NonClick.svg"
            }
            alt={
              chatImageClicked
                ? "GroupStudyChat_Click"
                : "GroupStudyChat_NonClick"
            }
            loader={() =>
              chatImageClicked
                ? "/assets/img/GroupStudyChat_Click.svg"
                : "/assets/img/GroupStudyChat_NonClick.svg"
            }
            width={25}
            height={25}
            onClick={handleChatImageClick}
          />
          <Image
            src={
              referenceImageClicked
                ? "/assets/img/GroupStudyReference_Click.svg"
                : "/assets/img/GroupStudyReference_NonClick.svg"
            }
            alt={
              referenceImageClicked
                ? "GroupStudyReference_Click"
                : "GroupStudyReference_NonClick"
            }
            loader={() =>
              referenceImageClicked
                ? "/assets/img/GroupStudyReference_Click.svg"
                : "/assets/img/GroupStudyReference_NonClick.svg"
            }
            width={25}
            height={25}
            onClick={handleReferenceImageClick}
          />
        </style.BottomBoxIcon>
      </style.BottomBox>
    </style.GroupstudyLayout>
  );
}
