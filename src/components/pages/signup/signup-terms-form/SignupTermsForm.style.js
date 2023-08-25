import styled from "styled-components";
import { Font } from "@/assets/fonts/Font";

export const BoxDiv = styled.div``;
export const TermsContainer = styled.div``;
export const TermsTable = styled.table``;
export const TermsThead = styled.thead``;
export const TermsTr = styled.tr``;

export const TermsCheckTd = styled.td`
  width: 20px;
`;

export const CheckboxLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  margin-right: 0.28rem;
`;

export const HiddenInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const TermsAllTd = styled.td`
  width: 22.5rem;
  height: 2rem;
  color: #000;
  font-size: ${Font.Size.S};
  font-weight: 700;
`;

export const TermsTbody = styled.tbody``;

export const TermsLineTd = styled.td`
  width: 44.7rem;
  height: 0.1rem;
  background: url("/assets/icon/TermsLine.svg") no-repeat;
`;

export const DataDiv = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
`;

export const TermsTd = styled.td``;

export const TermsData = styled.td`
  width: 22.5rem;
  height: 2rem;
  color: #000;
  font-size: ${Font.Size.S};
  font-weight: 400;
`;

export const TermsButton = styled.button`
  color: #8c9499;
  text-align: right;
  font-size: ${Font.Size.XS};
  font-weight: 400;
  text-decoration-line: underline;
  margin-left: 15.2rem;
`;
