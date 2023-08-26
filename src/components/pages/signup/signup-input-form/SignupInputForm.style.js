import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const NameDiv = styled.div``;

export const SignupInput = styled.input`
  width: 29.4rem;
  height: 3.4rem;
  padding: 18px;
  border: none;
  border-radius: 0.9rem;
  background: #e9f7ff;
  margin-left: 11.8rem;
  margin-bottom: 1.5rem;

  /* Placeholder 스타일 지정 */
  ::placeholder {
    color: #000;
    text-align: center;
    font-size: ${Font.Size.S};
    font-weight: 400;
    line-height: 129.8%;
  }
`;

export const NickNameDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const NickNameLabel = styled.label``;

export const NickNameButton = styled.button`
  position: absolute;
  width: 3.7rem;
  height: 1.4rem;
  top: 1.1rem;
  left: 36.2rem;

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
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 1.2rem;
  margin-bottom: 2.8rem;
  margin-left: 0.5rem;
`;

export const ErrorMessage = styled.p`
  color: #f88;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  text-decoration-line: underline;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 1.2rem;
  margin-bottom: 2.8rem;
  margin-left: 0.5rem;
`;

export const PasswordDiv = styled.div`
  position: relative;
`;

export const PasswordImageDiv = styled.div`
  position: absolute;
  left: 38.6rem;
  right: 1.2rem;
  top: 0.63rem;
`;

export const PwMatchingMessage = styled.span`
  position: absolute;
  color: #229eeb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  top: 0.16rem;
  left: 3rem;
`;

export const PwMismatchMessage = styled.span`
  position: absolute;
  color: #f88;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  text-decoration-line: underline;
  top: 0.16rem;
  left: 3rem;
`;
