import * as style from "@/components/pages/login/login-layout/LoginLayout.style";
import LoginLeftTab from "@/components/pages/login/login-left-tab/LoginLeftTab";
import LoginRightTab from "@/components/pages/login/login-right-tab/LoginRightTab";

export default function LoginLayout() {
  return (
    <style.LoginLayout>
      <LoginLeftTab />
      <LoginRightTab />
    </style.LoginLayout>
  );
}
