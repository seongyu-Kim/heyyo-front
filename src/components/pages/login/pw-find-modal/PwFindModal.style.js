import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const PwFindModalDiv = styled.div`
  width: 86.4rem;
  height: 53.7rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.25);
`;

export const PwFindTitleDiv = styled.div`
  position: absolute;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 700;
  top: 8.3rem;
  left: 32.9rem;
`;

export const PwInputWrapper = styled.div`\
position: relative
`;

export const PwFindInput = styled.input`
  position: relative;
  width: 42.2rem;
  height: 5rem;
  padding: 18px;
  border: none;
  border-radius: 0.5625rem;
  background: #e9f7ff;
  margin-bottom: 1.44rem;
  top: 15.8rem;

  /* Placeholder 스타일 지정 */
  ::placeholder {
    color: #000;
    text-align: center;
    font-size: ${Font.Size.S};
    font-weight: 400;
    line-height: 129.8%;
  }
`;

export const PwFindTextDiv = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: ${Font.Size.S};
  text-align: left;
  font-weight: 400;
  line-height: 129.8%;
  margin-top: 15.8rem;
  margin-bottom: 2.9rem;
  margin-left: 24.3rem;
`;

export const PwFindTextAtag = styled.a`
  color: rgba(0, 0, 0, 0.8);
  font-size: ${Font.Size.S};
  font-weight: 400;
  line-height: 129.8%;
`;

export const PwFindTextAtag2 = styled.a`
  color: #ff3838;
  font-size: ${Font.Size.S};
  font-weight: 400;
  line-height: 129.8%;
`;

export const PwFindBr = styled.br``;

export const PwFindButtonDiv = styled.div``;

export const PwFindButton = styled.button`
  width: 42.3rem;
  height: 4rem;
  border-radius: 0.9rem;
  background: #229eeb;

  color: #fff;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 900;

  margin-bottom: 1.25rem;
`;

export const PwFindOn = styled.div`
  position: absolute;
  top: 15.8rem;
  left: 22.1rem;
  width: 42.2rem;
  height: 17rem;
  border-radius: 0.9rem;
  background: #e9f7ff;
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 400;
  line-height: 129.8%;
}`;

export const PwFindOnPtag = styled.p``;

export const LoginContainer = styled.div``;
export const LoginButton = styled.button`
  color: rgba(0, 0, 0, 80);
  font-size: ${Font.Size.S};
  font-weight: 400;
  line-height: 129.8%;
`;
