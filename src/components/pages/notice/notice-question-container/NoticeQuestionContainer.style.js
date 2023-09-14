import styled, { css } from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const ContainerTitle = styled.span`
  position: absolute;
  top: 5.4rem;
  width: 29.6rem;
  height: 4.7rem;
  color: #000;
  //text-align: center;
  font-size: ${Font.Size.XL};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBox = styled.div`
  position: relative;
  top: 15rem;
  height: 5rem;
  width: 98.6rem;
  justify-content: center;
  border-radius: 1.3rem;
  border: 3px solid #229eeb;
  background: #fff;
`;

export const SearchIcon = styled.div`
  position: relative;
  margin-top: 1rem;
  margin-left: 93.76rem;
`;

export const QuestionContainer = styled.div`
  position: relative;
  width: 100%;
  background: tomato;
  display: flex;
  justify-content: center;
  height: 126rem;

  ${({ active }) =>
    active &&
    css`
      height: 149.6rem;
    `}
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 24rem;
  width: 121.9rem;
  height: 6rem;
`;

export const QuestionListTitle = styled.span`
  position: absolute;
  width: 8.9rem;
  height: 3.1rem;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%; /* 3.1152rem */
  margin-right: 81rem;
`;

export const WorryListTitle = styled.span`
  position: absolute;
  width: 8.9rem;
  height: 3.1rem;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%; /* 3.1152rem */
`;

export const TabImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.1em;
`;
