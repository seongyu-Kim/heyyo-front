import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";
import PageHead from "@/components/common/page-head/PageHead";
import NavBar from "@/components/common/navbar/NavBar";
import { RecoilRoot } from "recoil";
import axios from "axios";
import "@/assets/fonts/font.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import login from "@/pages/login";
import signup from "@/pages/signup";
import survey from "@/pages/survey";

function getAuthTokenFromLocalStorage() {
  return sessionStorage.getItem("authToken");
}

const GlobalStyles = createGlobalStyle`

        .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        position: relative;
      }
        `;

export default function App({ Component, pageProps }) {
  axios.interceptors.request.use((config) => {
    const authToken = getAuthTokenFromLocalStorage();
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });

  const isLoginPage = Component === login;
  const isSignupPage = Component === signup;
  const isSurveyPage = Component === survey;
  const shouldHideFooter = isLoginPage || isSignupPage || isSurveyPage;

  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <PageHead />
        <NavBar />
        <Header />
        <Component {...pageProps} />
        {!shouldHideFooter && <Footer />}
      </RecoilRoot>
    </>
  );
}
