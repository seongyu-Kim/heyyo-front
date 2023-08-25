import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const LoginLeftDiv = styled.div`
  position: relative;
  width: 30rem;
  height: 59.9rem;
  background: #229eeb;
  box-shadow: 4px 4px 30px 2px rgba(0, 0, 0, 0.1);
`;

export const LoginLeftImageDiv = styled.div`
  position: absolute;
  top: 19.6rem;
  left: 7.05rem;
`;

export const LoginLeftText = styled.a`
  position: absolute;
  width: 21.9rem;
  height: 4.9rem;
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 900;
  top: 32.23rem;
  left: 4.1rem;
`;
