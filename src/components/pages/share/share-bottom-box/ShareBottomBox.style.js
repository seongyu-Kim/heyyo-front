import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 10.3rem;
  gap: 7.7rem;
  padding: 0 14.2%;
  align-items: center;
  justify-content: center;
`;
export const BottomContainerDiv = styled.div`
  flex-shrink: 0;
  background-color: white;
  //min-height: 100vh;
  position: relative;
  margin-top: 9.8rem;
`;

export const TextContainerDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Write = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  flex-shrink: 0;
  position: relative;
  bottom: 6rem;
  right: 41.4rem;
`;

export const PaginationDiv = styled.div`
  position: relative;
  //bottom: 7.1rem;
  //left: 80.7rem;
  width: 100%;
  margin-top: 20.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationStyle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: rgba(0, 0, 0, 0.6);
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
