import React from "react";
import SignupInputForm from "@/components/pages/signup/signup-input-form/SignupInputForm";
import { Font } from "/public/fonts/Font";

export default function SignupPageContent() {
  return (
    <div>
      <span className="sign-right-text">
        어서오세요!
        <br />
        해요에 여러분을 입력하세요.
      </span>
      <SignupInputForm />

      {/* CSS */}
      <style jsx>
        {`
          .sign-right-text {
            display: block;
            color: #000;
            font-size: ${Font.Size.XL};
            font-weight: 700;
            line-height: 129.8%;
            padding-left: 7.37rem;
            padding-top: 5.12rem;
            padding-bottom: 2.3125rem;
          }
        `}
      </style>
    </div>
  );
}
