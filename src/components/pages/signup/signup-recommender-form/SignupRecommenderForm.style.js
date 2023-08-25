import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div``;

export const NickNameContainer = styled.div`
  margin-top: 23.1rem;
  margin-bottom: 2.2rem;
  margin-left: 9.05rem;
`;

export const NickNameSpan = styled.span``;

export const NickNameInput = styled.input`
  width: 29.4rem;
  height: 3.4rem;
  padding: 18px;
  border: none;
  border-radius: 0.9rem;
  background: #e9f7ff;
  left: 6.25rem;
  top: 14.44rem;
  margin-bottom: 1.37rem;

  /* Placeholder 스타일 지정 */
  ::placeholder {
    color: #000;
    text-align: center;
    font-size: ${Font.Size.S};
    font-weight: 400;
    line-height: 129.8%;
  }
`;

export const ButtonWrapper = styled.div``;

export const ButtonSpan = styled.span``;

export const NickNameButton = styled.button`
  width: 47.3rem;
  height: 3.4rem;
  border-radius: 0.9rem;
  background: #229eeb;

  color: #fff;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 900;
`;
