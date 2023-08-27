import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";
import PageHead from "@/components/common/page-head/PageHead";
import NavBar from "@/components/common/navbar/NavBar";
import { RecoilRoot } from "recoil";
import axios from "axios";
import "@/assets/fonts/font.css";
import Header from "@/components/common/header/Header";

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
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <PageHead />
        <NavBar />
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
