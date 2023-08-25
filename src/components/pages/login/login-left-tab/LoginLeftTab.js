import * as style from "@/components/pages/login/login-left-tab/LoginLeftTab.style";
import Image from "next/image";

export default function LoginLeftTab() {
  return (
    <style.LoginLeftDiv>
      <style.LoginLeftImageDiv>
        <Image
          src="/assets/icon/Sosimi.svg"
          alt="소시미"
          loader={() => "/assets/icon/Sosimi.svg"}
          width={160}
          height={120.25}
        />
      </style.LoginLeftImageDiv>
      <style.LoginLeftText>WELCOME!</style.LoginLeftText>
    </style.LoginLeftDiv>
  );
}
