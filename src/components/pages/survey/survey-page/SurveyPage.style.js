import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const TitleDiv = styled.div`
  margin-top: calc(50vh - 6.6rem - (59.9rem * 0.5));
  text-align: center;
  font-size: ${Font.Size.XL};
  color: #000;
  font-weight: 700;
  line-height: 129.8%; /* 4.6728rem */
`;

export const BtnContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 9rem;
`;
export const BoxContainer = styled.div`
  position: relative;
`;

export const BtnDiv = styled.button`
  position: relative;
  width: 31rem;
  height: 29rem;
  margin-top: 13.85rem;
  margin-bottom: 10.55rem;
  border-radius: 3.7rem;
  z-index: 1;
  background: ${(props) => props.background};
`;

export const BtnContent = styled.p`
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 700;
`;

export const CharContainer1 = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};
`;

export const CharContainer2 = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: ${(props) => props.zIndex};
`;
