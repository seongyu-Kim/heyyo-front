import NavBar from "@/components/common/navbar/NavBar";
import PageHead from "@/components/common/page-head/PageHead";
import LoginLeftTab from "@/components/pages/login/login-left-tab/LoginLeftTab";
import LoginRightTab from "@/components/pages/login/login-right-tab/LoginRightTab";
import LoginInputForm from "@/components/pages/login/login-input-form/LoginInputForm";
import FindLinkBox from "@/components/pages/login/find-link-box/FindLinkBox";
import SnsLoginBox from "@/components/pages/login/sns-login-box/SnsLoginBox";

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
