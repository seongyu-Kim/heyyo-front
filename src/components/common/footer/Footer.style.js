import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 105.90332rem;
  height: 13.2rem;
  margin-top: 3.8rem;
  display: flex;
`;

export const FooterLine = styled.hr`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 17rem;
  width: 107rem;
  height: 0.1rem;
  background: #fff;
`;

export const FooterMenuBox = styled.div`
  position: relative;
  left: 16rem;
  width: 24.2rem;
  height: 13.2rem;
  flex-direction: column;
  gap: 3.3rem;
`;

export const FooterMenuTitle = styled.div`
  width: 21.9rem;
  height: 2.6rem;
  margin-bottom: 2rem;
  color: #fff;
  font-size: ${Font.Size.M};
  font-weight: 700;
`;

export const FooterMenu = styled.div`
  width: 21.9rem;
  height: 1.9rem;
  margin-top: 0.95rem;
  display: flex;
  color: #fff;
  font-size: ${Font.Size.S};
  font-weight: 400;
`;

export const FooterMenuButton = styled.button`
  width: 21.0033rem;
  height: 4.1568rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
`;
