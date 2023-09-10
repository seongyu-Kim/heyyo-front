import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const GroupstudyLayout = styled.div`
  position: relative;
  width: 111.8rem;
  height: 82.60637rem;
  top: 5.81rem;
  left: calc(50% - (111.8rem * 0.5));
`;

export const TopContainer = styled.div`
  position: relative;
  width: 112rem;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
`;

export const TopBoxTitle = styled.span`
  width: auto;
  height: 4.7rem;
  margin-left: 3rem;
  margin-right: 5rem;
  display: flex;
  align-items: center;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 900;
  line-height: 129.8%;
`;

export const HashTagBox = styled.div`
  width: auto;
  height: 1.9rem;
  display: flex;
  gap: 1.7rem;
`;

export const Hashtag = styled.span`
  color: #000;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 500;
`;

export const TopBox = styled.div`
  position: absolute;
  right: 0;
  width: 16rem;
  height: 5rem;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;

export const TopBoxShareButton = styled.button`
  position: absolute;
  left: 2.83rem;
`;

export const TopBoxReportButton = styled.button`
  position: absolute;
  left: 10.33rem;
`;

export const Content = styled.div`
  position: absolute;
  width: 111.8rem;
  height: 64.5rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(7.5px);
  top: 6rem;
`;

export const ContentTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.M};
  font-weight: 400;
  margin-top: 27.9rem;
  width: auto;
  height: 2.6rem;
`;

export const ContentButton = styled.div`
  width: 25rem;
  height: 5rem;
  margin-top: 1.19rem;
  margin-left: 43.4rem;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.25);

  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomBox = styled.div`
  width: 112.0512rem;
  height: 8.3264rem;
  margin-top: 69.28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
`;

export const BottomBoxIcon = styled.div`
  width: 17.853rem;
  height: 2.7882rem;
  display: flex;
  gap: 5.1rem;
`;
