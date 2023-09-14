import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxStyle = styled.div`
  width: 113.1rem;
  height: 22.6rem;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
`;

export const QuestionListTitle = styled.span`
  position: relative;
  width: 53.4904rem;
  height: 3.1rem;
  top: 3.25rem;
  left: 4.4rem;
  color: #000;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 129.8%;
`;

export const QuestionListContents = styled.span`
  position: absolute;
  width: 84.4162rem;
  height: 3.4rem;
  margin-top: 7.35rem;
  left: 4.4rem;
  color: #000;
  font-size: ${Font.Size.S};
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
`;

export const Div = styled.div`
  position: relative;
  top: 11rem;
  left: 4.4rem;
  width: 34.4rem;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
`;

export const HashTagContainer = styled.div`
  display: flex;
`;

export const HashTagBox = styled.div`
  width: 11rem;
  height: 3.4rem;
  border-radius: 1.9rem;
  border: 2px solid #229eeb;
  margin-right: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HastTagContent = styled.span`
  width: 4.7456rem;
  color: #229eeb;
  text-align: center;
  font-size: ${Font.Size.XS};
  font-weight: 500;
`;

export const HeyyoText = styled.span`
  position: relative;
  width: 3.6265rem;
  top: 12rem;
  left: 4.4rem;
  color: #a3a3a3;
  font-size: ${Font.Size.S};
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
`;

export const TimeText = styled.span`
  position: relative;
  width: 4.2rem;
  top: 12rem;
  left: 48.83rem;
  color: #a3a3a3;
  font-size: ${Font.Size.S};
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
`;
export const Icons = styled.div`
  position: relative;
  top: 9rem;
  left: 87rem;
  height: 3rem;
  width: 24rem;
  display: flex;
`;
export const ViewIcon = styled.div`
  width: 3.5118rem;
  height: 2.6936rem;
  margin-right: 0.6rem;
`;
export const ViewNum = styled.span`
  color: #a3a3a3;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
  margin-right: 3.38rem;
  margin-top: 0.2rem;
`;
export const CommentIcon = styled.div`
  width: 2.8004rem;
  height: 2.6778rem;
  margin-right: 1rem;
`;
export const CommentNum = styled.span`
  color: #a3a3a3;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
  margin-right: 3.39rem;
  margin-top: 0.2rem;
`;
export const BookmarkIcon = styled.div`
  width: 2.299rem;
  height: 3rem;
  margin-right: 0.6rem;
`;
export const BookmarkNum = styled.span`
  color: #a3a3a3;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
  margin-top: 0.2rem;
`;
