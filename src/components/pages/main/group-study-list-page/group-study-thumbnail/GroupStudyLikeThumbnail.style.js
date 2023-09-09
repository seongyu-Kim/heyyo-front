import styled from "styled-components";
import Image from "next/image";
import { Font } from "@/assets/fonts/Font";

export const LikeThumbnailBox = styled.div`
  display: flex;
  gap: 3.4rem;
`;
export const LikeThumbnail = styled.div`
  position: relative;
  top: 20.2rem;
  left: 53.1rem;
  width: 19.1rem;
  height: 26.2rem;
  border-radius: 2.1rem;
  background: #d9d9d9;
  box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);
`;

export const LikeHeartButton = styled.button``;

export const LikeclickHeart = styled(Image)`
  position: absolute;
  top: 2rem;
  left: 15rem;
`;

export const LikeNonclickHeart = styled(Image)`
  position: absolute;
  top: 2rem;
  left: 15rem;
`;

export const LikeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 18rem;
  left: 0;
  width: 100%;
  height: 1.9rem;
  color: #fff;
  font-size: ${Font.Size.S};
  font-weight: 500;
  text-transform: uppercase;
`;

export const LikeHashTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 21rem;
  left: 0;
  width: 100%;
  height: 1.4rem;
  color: #fff;
  font-size: ${Font.Size.XS};
  font-weight: 500;
  text-transform: uppercase;
`;

export const LikeViews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 1.4rem;
  top: 23rem;
  color: #fff;
  font-size: ${Font.Size.XS};
  font-weight: 400;
  text-transform: uppercase;
`;

export const LikeViewsImage = styled(Image)`
  margin-right: 0.36rem;
`;
