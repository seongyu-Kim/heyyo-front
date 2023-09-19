import styled, { css } from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const ContainerTitle = styled.span`
  position: relative;
  margin-top: 5.4rem;
  width: 29.6rem;
  color: #000;
  //text-align: center;
  font-size: ${Font.Size.XL};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-top: 3rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CategoryContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 121.9rem;
`;

export const QuestionTitleBox = styled.div`
  display: flex;
  margin-top: 6.3rem;
`;

export const QuestionCuriousBox = styled.div`
  width: 40.6rem;
  height: 5.3rem;
  text-align: center;

  box-sizing: border-box;
  border-bottom: 0.7rem solid #f5f5f5;

  transition: border 0.4s ease-out;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 0.7rem solid #229eeb;
    `}
`;

export const QuestionCuriousText = styled.span`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%; /* 3.1152rem */
`;

export const QuestionListTitle = styled.span`
  position: relative;
  width: 8.9rem;
  height: 3.1rem;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%; /* 3.1152rem */
`;

export const WorryListTitle = styled.span`
  position: relative;
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
