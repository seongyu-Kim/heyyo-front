import NavBar from "@/components/common/navbar/NavBar";
import PageHead from "@/components/common/page-head/PageHead";
import LoginLeftTab from "@/components/pages/login/login-left-tab/LoginLeftTab";
import LoginRightTab from "@/components/pages/login/login-right-tab/LoginRightTab";

export default function login() {
  return (
    <div>
      <PageHead />
      <NavBar />
        <LoginLeftTab />
        <LoginRightTab />
    </div>
  );
}
