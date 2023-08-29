import * as style from "@/components/pages/main/heyyo-layout/HeyyoLayout.style";
import HeyyoMainPage from "@/components/pages/main/Heyyo-Main-page/HeyyoMainPage";
import IntroductionPage from "@/components/pages/main/introduction-page/IntroductionPage";
import { useState, useEffect } from "react";

export default function HeyyoLayout() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const storedAccessToken = sessionStorage.getItem("accessToken");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  return (
    <style.Div>
      {accessToken ? <HeyyoMainPage /> : <IntroductionPage />}
    </style.Div>
  );
}
