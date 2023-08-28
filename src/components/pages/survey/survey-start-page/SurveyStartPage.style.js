import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: calc(50vh - 6.6rem - (59.9rem * 0.5));
`;

export const TitleDiv = styled.div`
  text-align: center;
  font-size: ${Font.Size.XL};
  color: #000;
  font-weight: 700;
  line-height: 129.8%; /* 4.6728rem */
`;

export const SurveyImgDiv = styled.div`
  margin-top: 10.8rem;
  align-self: center;
`;

export const BtnDiv = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 4.4rem;
  align-self: center;
  border-radius: 13px;
  background: #f2923b;
`;

export const BtnContent = styled.p`
  margin-top: 1.2rem;
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.M};
  font-weight: 900;
`;
