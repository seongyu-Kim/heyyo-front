import "@/styles/globals.css";
import { fontStyles } from "/public/fonts/Font";
import PageHead from "@/components/common/page-head/PageHead";
import NavBar from "@/components/common/navbar/NavBar";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <style jsx global>
          {fontStyles}
        </style>
        <PageHead />
        <NavBar />
        <Component {...pageProps} />
        <style jsx global>
          {`
            .container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              text-align: center;
              position: relative;
            }
          `}
        </style>
      </RecoilRoot>
    </>
  );
}
