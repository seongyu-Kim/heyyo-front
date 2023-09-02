import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Tab = styled.div`
  position: relative;
  width: 122.1rem;
  height: 108.4rem;
  top: 6.8rem;
  left: calc(50% - (122.1rem * 0.5));
`;

export const TabButtons = styled.div`
  display: flex;
`;

export const NewTabButton = styled.button`
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 900;
  line-height: 129.8%;
  margin-left: 18.6rem;
`;

export const BestTabButton = styled.button`
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 900;
  line-height: 129.8%;
  margin-left: 30rem;
`;

export const TabImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.1rem;
`;
