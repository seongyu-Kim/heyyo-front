import { useState } from "react";
import * as style from "@/components/pages/main/group-study-view-page/group-study-view-page-tab/GroupStudyViewPageTab.style";
import Image from "next/image";
import GroupStudyViewPageNewThumbnail from "@/components/pages/main/group-study-view-page/group-study-view-page-thumbnail/GroupStudyViewPageNewThumbnail";
import GroupStudyViewPageBestThumbnail from "@/components/pages/main/group-study-view-page/group-study-view-page-thumbnail/GroupStudyViewPageBestThumbnail";

export default function GroupStudyViewPageTab() {
  const [selectedTab, setSelectedTab] = useState("New");

  return (
    <style.Tab>
      <style.TabButtons>
        <style.NewTabButton
          onClick={() => setSelectedTab("New")}
          active={selectedTab === "New"}
        >
          NEW
        </style.NewTabButton>
        <style.BestTabButton
          onClick={() => setSelectedTab("Best")}
          active={selectedTab === "Best"}
        >
          BEST
        </style.BestTabButton>
      </style.TabButtons>
      <style.TabImages>
        {selectedTab === "New" && (
          <Image
            src="/assets/img/NewTabButton.svg"
            alt="NewTabButton"
            loader={() => "/assets/img/NewTabButton.svg"}
            width={1221}
            height={7}
          />
        )}
        {selectedTab === "Best" && (
          <Image
            src="/assets/img/BestTabButton.svg"
            alt="BestTabButton"
            loader={() => "/assets/img/BestTabButton.svg"}
            width={1221}
            height={7}
          />
        )}
      </style.TabImages>
      {selectedTab === "New" && <GroupStudyViewPageNewThumbnail />}
      {selectedTab === "Best" && <GroupStudyViewPageBestThumbnail />}
    </style.Tab>
  );
}
