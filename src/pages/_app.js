import "@/styles/globals.css";
import { fontStyles } from "/public/fonts/Font";
import { createGlobalStyle } from "styled-components";
import PageHead from "@/components/common/page-head/PageHead";
import NavBar from "@/components/common/navbar/NavBar";
import { RecoilRoot } from "recoil";
import axios from "axios";

function getAuthTokenFromLocalStorage() {
  return sessionStorage.getItem("authToken");
}

const GlobalStyles = createGlobalStyle`
        ${fontStyles}

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
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
