import NavBar from "@/components/common/navbar/NavBar";
import PageHead from "@/components/common/page-head/PageHead";
import LoginLeftTab from "@/components/pages/login/login-left-tab/LoginLeftTab";
import SignupRightTab from "@/components/pages/signup/signup-right-tab/SignupRightTab";

export default function login() {
    return (
        <div>
            <PageHead />
            <NavBar />
            <LoginLeftTab />
            <SignupRightTab />
        </div>
    );
}
