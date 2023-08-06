import NavBar from "@/components/common/navbar/NavBar";
import PageHead from "@/components/common/page-head/PageHead";
import LoginLeftTab from "@/components/pages/login/login-left-tab/LoginLeftTab";
import SignupRecommenderRightTab
    from "@/components/pages/signup/signup-recommender-right-tab/SignupRecommenderRightTab";

export default function recommender() {
    return (
        <div>
            <LoginLeftTab />
            <SignupRecommenderRightTab />
        </div>
    );
}
