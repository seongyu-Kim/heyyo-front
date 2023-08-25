import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div``;

export const SmsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 11.8rem;
  margin-bottom: 0.94rem;
`;

export const SmsSendInput = styled.input`
  width: 18.5rem;
  height: 3.4rem;
  padding: 18px;
  border: none;
  border-radius: 0.9rem;
  background: #e9f7ff;
  margin-right: 0.8rem;

  /* Placeholder 스타일 지정 */
  ::placeholder {
    color: #000;
    text-align: center;
    font-size: ${Font.Size.S};
    font-weight: 400;
    line-height: 129.8%;
  }
`;

export const SmsSendButton = styled.button`
  width: 10rem;
  height: 3.3rem;
  border-radius: 0.9rem;
  background: #e9f7ff;
  border: 0.5px solid #229eeb;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

  color: #000;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 400;

  &.sent {
    width: 10rem;
    height: 3.3rem;
    border-radius: 0.9rem;
    background: #229eeb;
    border: 0.5px solid #229eeb;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

    color: #fff;
    text-align: center;
    font-size: ${Font.Size.S};
    font-weight: 900;
  }
`;

export const ErrorMessagePtag = styled.p`
  color: #f88;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  text-decoration-line: underline;
  top: 0.56rem;
  margin-left: 0.5rem;
`;

export const SuccessMessage = styled.div`
  color: #229eeb;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  top: 0.1525rem;
  margin-left: 0.5rem;
`;

export const ErrorMessage = styled.div`
  color: #f88;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 700;
  text-decoration-line: underline;
  top: 0.56rem;
  margin-left: 0.5rem;
`;

export const SmsInput = styled.input`
  width: 18.5rem;
  height: 3.4rem;
  padding: 18px;
  border: none;
  border-radius: 0.9rem;
  background: #d9d9d9;
  margin-right: 0.8rem;

  /* Placeholder 스타일 지정 */
  ::placeholder {
    color: #000;
    text-align: center;
    font-size: ${Font.Size.S};
    font-weight: 400;
    line-height: 129.8%;
  }
`;

export const SmsButton = styled.button`
  width: 10rem;
  height: 3.3rem;
  border-radius: 0.9rem;
  background: #229eeb;
  border: 0.5px solid #229eeb;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

  color: #fff;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 900;
`;
