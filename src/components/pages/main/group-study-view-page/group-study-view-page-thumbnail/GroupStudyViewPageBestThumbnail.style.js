import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.9rem;
`;
export const ThumbnailBox = styled.div`
  width: 37.8rem;
  height: 42.1rem;
  border-radius: 2.1rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);
  margin-top: 6.6rem;
  margin-right: 2.2rem;
`;

export const ThumbnailImage = styled.div`
  width: 37.8099rem;
  height: 26.5776rem;
  background: antiquewhite; //임시지정
  border-radius: 2.1rem;
  margin-bottom: 2.59rem;
`;

export const ThumbnailTitle = styled.span`
  width: 35.8404rem;
  height: 3.584rem;
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 900;
  margin-left: 2.59rem;
`;

export const ThumbnailContent = styled.span`
  width: 32.4rem;
  height: 3.1rem;
  color: #000;
  font-size: ${Font.Size.M};
  font-weight: 500;
  margin-left: 2.59rem;
`;

export const ThumbnailHashTag = styled.span`
  color: #000;
  font-size: ${Font.Size.S};
  font-weight: 400;
  text-transform: uppercase;
  margin-left: 2.59rem;
`;

export const ThumbnailBr = styled.br``;

export const ThumbnailVIewLikeDiv = styled.div`
  width: 33rem;
  height: 3.584rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 2.59rem;
`;

export const ThumbnailViewLikeLeft = styled.span`
  font-size: ${Font.Size.S};
  color: #000;
  font-weight: 400;
`;

export const ThumbnailViewLikeRight = styled.span`
  font-size: ${Font.Size.S};
  color: #000;
  font-weight: 400;
`;

export const MoreButton = styled.button`
  margin-top: 9.1rem;
  margin-left: 50rem;
`;
