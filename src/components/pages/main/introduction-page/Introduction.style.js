import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
`;

{
  /* 소개 page */
}

// Main Banner
export const IntroductionMainBanner = styled.div`
  position: relative;
  margin: 0 auto;
`;

// 그룹 공부방
export const IntroductionGroupStudyMainBanner = styled.div``;

export const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  bottom: calc(50% + 20rem);
`;

export const GroupStudyButton = styled.button`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  width: 120rem;
  height: 22rem;
`;
// 자료실 공유
export const IntroductionReferenceroomMainBanner = styled.div``;

// 마이페이지
export const IntroductionMypageMainBanner = styled.div``;

// 커뮤니티
export const IntroductionCommunityMainBanner = styled.div``;
