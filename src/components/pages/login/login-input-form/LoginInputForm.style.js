import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const EmailWrapper = styled.div`
  position: relative;
`;

export const LoginEmailInput = styled.input`
  width: 38.3rem;
  height: 3.4rem;
  padding: 18px;
  border: none;
  border-radius: 0.9rem;
  background: #e9f7ff;
  left: 14rem;
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

export const PasswordContainerDiv = styled.div`
  position: relative;
`;

export const LoginPwInput = styled.input`
  width: 38.3rem;
  height: 3.4rem;
  padding: 18px;
  border: none;
  border-radius: 0.9rem;
  background: #e9f7ff;
  left: 14rem;
  margin-bottom: 1.5rem;
`;

export const PasswordDiv = styled.div`
  position: absolute;
  top: 0.63rem;
  left: 35.5rem;
  right: 1.4rem;
`;

export const LoginButtonContainer = styled.div`
  position: relative;
`;

export const LoginButton = styled.button`
  width: 38.3rem;
  height: 3.4rem;
  border-radius: 0.9rem;
  background: #229eeb;
  left: 14rem;
  margin-bottom: 0.9rem;
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 900;
`;
