import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: calc(50vh - 6.6rem - (59.9rem * 0.5));
  text-align: center;
`;

export const TitleDiv = styled.div`
  color: #000;
  font-size: ${Font.Size.XL};
  font-style: normal;
  font-weight: 700;
  line-height: 129.8%;
`;

export const TitleTypeDiv = styled.span`
  color: ${(props) => props.color};
  font-size: ${Font.Size.XXL};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%;
`;

export const BgDiv = styled.div`
  position: relative;
  background: ${(props) => props.bgColor};
  width: 108.2rem;
  height: 29rem;
  flex-shrink: 0;
  border-radius: 3.7rem;
  margin-top: 13.6rem;
  align-self: center;
  z-index: 2;
`;

export const BgContent = styled.div`
  color: ${(props) => props.color};
  font-size: ${Font.Size.XXL};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%; /* 6.49rem */
  margin-top: 11.2rem;
`;

export const BtnDiv = styled.button`
  width: 30rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 1.3rem;
  background: #f2923b;
  align-self: center;
  margin-top: 7.6rem;
`;

export const BtnContent = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 1.2rem;
`;

export const BtnDiv2 = styled.button`
  color: #8c9499;
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1rem;
`;
