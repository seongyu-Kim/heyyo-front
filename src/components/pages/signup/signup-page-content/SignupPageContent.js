import * as style from "@/components/pages/signup/signup-page-content/SignupPageContent.style";
import React from "react";
import SignupInputForm from "@/components/pages/signup/signup-input-form/SignupInputForm";

export default function SignupPageContent() {
  return (
    <style.SignupContainer>
      <style.SignRightText>
        어서오세요!
        <style.SignBr />
        해요에 여러분을 입력하세요.
      </style.SignRightText>
      <SignupInputForm />
    </style.SignupContainer>
  );
}
