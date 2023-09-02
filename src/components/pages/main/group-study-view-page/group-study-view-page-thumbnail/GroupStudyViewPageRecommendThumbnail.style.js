import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";
import Image from "next/image";

export const RecommendThumbnailBox = styled.div`
  display: flex;
  gap: 3.4rem;
  margin-top: 6.9rem;
`;
export const RecommendThumbnail = styled.div`
  position: relative;
  top: 6.9rem;
  left: 39.9rem;
  width: 26rem;
  height: 36.7091rem;
  border-radius: 2.1rem;
  background: #d9d9d9;
  box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);
`;

export const RecommendHeartButton = styled.button``;

export const RecommendNonclickHeart = styled(Image)`
  position: absolute;
  top: 2.2rem;
  left: 20rem;
`;

export const RecommendTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 24rem;
  left: 0;
  width: 100%;
  height: 1.9rem;
  color: #fff;
  font-size: ${Font.Size.S};
  font-weight: 500;
  text-transform: uppercase;
`;

export const RecommendHashTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 27rem;
  left: 0;
  width: 100%;
  height: 1.4rem;
  color: #fff;
  font-size: ${Font.Size.XS};
  font-weight: 500;
  text-transform: uppercase;
`;

export const RecommendViews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 1.4rem;
  top: 29rem;
  color: #fff;
  font-size: ${Font.Size.XS};
  font-weight: 400;
  text-transform: uppercase;
`;

export const RecommendViewsImage = styled(Image)`
  margin-right: 0.36rem;
`;

export const RecommendShowMoreButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 15rem;
`;
