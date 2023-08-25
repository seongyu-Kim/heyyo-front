import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 11.8rem;
  margin-bottom: 1.5rem;
`;

export const EmailContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const EmailLabel = styled.label``;

export const EmailInput = styled.input`
  width: 29.4rem;
  height: 3.4rem;
  padding: 18px;
  border: none;
  border-radius: 0.9rem;
  background: #e9f7ff;

  /* Placeholder 스타일 지정 */
  ::placeholder {
    color: #000;
    text-align: center;
    font-size: ${Font.Size.S};
    font-weight: 400;
    line-height: 129.8%;
  }
`;

export const NickNameButton = styled.button`
  position: absolute;
  width: 3.7rem;
  height: 1.4rem;
  top: 1.1rem;
  left: 24.3rem;

  color: #8c9499;
  display: flex;
  text-align: center;
  font-size: ${Font.Size.XS};
  font-weight: 700;
`;

export const SuccessMessage = styled.p`
  color: #229eeb;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  top: 0.1525rem;
  margin-left: 0.5rem;
`;

export const ErrorMessage = styled.p`
  color: #f88;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  text-decoration-line: underline;
  top: 0.56rem;
  margin-left: 0.5rem;
`;
