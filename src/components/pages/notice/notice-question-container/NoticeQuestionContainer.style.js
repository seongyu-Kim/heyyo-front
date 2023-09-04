import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const QuestionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 126rem;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const ContainerTitle = styled.span`
  position: absolute;
  top: 5.4rem;
  width: 28.8rem;
  height: 4.7rem;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-style: normal;
  font-weight: 900;
  line-height: 129.8%;
`;

export const SearchBox = styled.div`
  position: absolute;
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

export const GrayBar = styled.div`
  position: absolute;
  width: 121.9rem;
  height: 0.7rem;
  background: #f5f5f5;
  margin-top: 7rem;
`;

export const BlueBar = styled.div`
  position: absolute;
  width: 40.6rem;
  height: 0.7rem;
  background: #229eeb;
  margin-top: 7rem;
  left: 0rem;
`;

export const WritingButton = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  position: relative;
  top: 114.55rem;
  left: 54.01rem;
`;

export const PaginationDiv = styled.div`
  position: absolute;
  bottom: 7.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationStyle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: rgba(0, 0, 0, 0.6);
  background-color: #f8f8f8;
  text-align: center;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
`;

export const PaginationNextStyle = styled.div`
  width: 8.8rem;
  height: 2.5rem;
  color: rgba(0, 0, 0, 0.6);
  background-color: #f8f8f8;
  text-align: center;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
`;
