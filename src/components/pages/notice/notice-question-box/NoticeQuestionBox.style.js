import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxStyle = styled.div`
  position: relative;
  width: 113.1rem;
  height: 22.6rem;
  border-radius: 2rem;
  box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
  &.expanded {
    width: 113.1064rem;
    height: 46rem;
    //padding: 2rem;
    border: 2px solid #007bff;
    background: #fff;
  }
`;

export const QuestListTitle = styled.p`
  position: relative;
  height: 3.1rem;
  margin-top: 3.25rem;
  margin-bottom: 0;
  left: 4.4rem;
  color: #000;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 700;
  line-height: 129.8%;
`;

export const QuestListContents = styled.p`
  position: relative;
  width: 84.4162rem;
  height: 3.4rem;
  margin: 0;
  margin-top: 1rem;
  left: 4.4rem;
  color: #000;
  font-size: ${Font.Size.S};
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
`;

export const HashTagDiv = styled.div`
  position: relative;
  margin-top: 3.65rem;
  left: 4.4rem;
  height: 3.4rem;
  width: 100%;
  display: flex;
`;

export const HashtagContainer = styled.div`
  position: absolute;
  display: flex;
`;

export const HashtagBox = styled.div`
  width: 11rem;
  height: 3.4rem;
  border-radius: 1.9rem;
  border: 2px solid #229eeb;
  margin-right: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HashtagContent = styled.span`
  width: 4.7456rem;
  color: #229eeb;
  text-align: center;
  font-size: ${Font.Size.XS};
  font-weight: 500;
`;

export const BottomBox = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 1.06rem;
  display: flex;
  height: 3.79rem;
  width: 100%;
  justify-content: space-between;
`;

export const HeyyoText = styled.p`
  position: relative;
  width: 3.6265rem;
  color: #a3a3a3;
  margin-left: 4.4rem;
  font-size: ${Font.Size.S};
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
`;

export const TimeText = styled.p`
  position: relative;
  width: 4.2rem;
  color: #a3a3a3;
  font-size: ${Font.Size.S};
  font-style: normal;
  font-weight: 400;
  line-height: 129.8%;
`;
export const Icons = styled.div`
  position: relative;
  height: 3rem;
  width: 24rem;
  display: flex;
  justify-content: space-between;
  margin-right: 2.55rem;
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
