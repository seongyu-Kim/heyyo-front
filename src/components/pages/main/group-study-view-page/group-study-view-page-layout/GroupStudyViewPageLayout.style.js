import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const Box = styled.div`
  width: 100%;
`;

export const GroupStudyViewContainer = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const GroupStudyTab = styled.div`
  width: 192rem;
  height: 135.3rem;
`;

export const GroupStudyOpposite = styled.div`
  width: 192rem;
  height: 135.3rem;
`;

export const GroupStudyOppositeTitle = styled.span`
  display: flex;
  justify-content: center;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 900;
  line-height: 129.8%;
  margin-top: 13.59rem;
`;
