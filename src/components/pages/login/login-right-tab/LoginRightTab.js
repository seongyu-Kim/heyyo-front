import * as style from "@/components/pages/login/login-right-tab/LoginRightTab.style";
import LoginInputForm from "@/components/pages/login/login-input-form/LoginInputForm";
import FindLinkBox from "@/components/pages/login/find-link-box/FindLinkBox";
import SnsLoginBox from "@/components/pages/login/sns-login-box/SnsLoginBox";

export default function LoginRightTab() {
  return (
    <style.LoginRightDiv>
      <style.LoginRightTextSpan>
        해요와 함께하러 오신 걸 환영해요!
      </style.LoginRightTextSpan>
      <LoginInputForm />
      <FindLinkBox />
      <SnsLoginBox />
    </style.LoginRightDiv>
  );
}
