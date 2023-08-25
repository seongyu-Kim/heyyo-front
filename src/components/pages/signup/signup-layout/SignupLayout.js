import * as style from "@/components/pages/signup/signup-layout/SignupLayout.style";
import LoginLeftTab from "@/components/pages/login/login-left-tab/LoginLeftTab";
import SignupRightTab from "@/components/pages/signup/signup-right-tab/SignupRightTab";

export default function SignupLayout() {
  return (
    <style.SignupLayout>
      <LoginLeftTab />
      <SignupRightTab />
    </style.SignupLayout>
  );
}
