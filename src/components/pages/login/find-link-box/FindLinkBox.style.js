import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: 2.2rem;
`;

export const FindDiv = styled.div`
  position: relative;
  color: #8c9499;
  text-align: center;
  font-size: ${Font.Size.XS};
  font-weight: 400;
  padding: 0 0.5rem;
`;

export const PwModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: calc(50vh - 0.3rem - (53.7rem * 0.5));
  left: calc(50vw - (86.4rem * 0.5));
`;

export const SignDiv = styled.div`
  position: relative;
  color: #8c9499;
  text-align: center;
  font-size: ${Font.Size.XS};
  font-weight: 400;
  padding: 0 0.5rem;
`;
