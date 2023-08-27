import styled, { css } from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 8rem;
  background: #e9f7ff;
  top: 0rem;
  display: flex;
  justify-content: space-around;
`;

export const MenuUl = styled.ul`
  display: flex;
  align-items: center;
`;

export const MenuLi = styled.li`
  margin-right: 26rem;
  list-style-type: none;
`;

export const MenuAtag = styled.p`
  color: #8c9499;
  text-align: center;
  font-size: ${Font.Size.L};
  font-weight: 700;
  &:last-child {
    margin-right: 0;
  }

  ${({ active }) =>
    active &&
    css`
      color: #000;
    `}
`;
