// TODO. 작업 완료 후 footer Link 설정 필요
import * as style from "@/components/common/footer/Footer.style";
import Image from "next/image";

export default function Footer() {
  return (
    <style.Footer>
      <style.FooterContainer>
        <Image
          src="/assets/img/FooterLogo.svg"
          alt="FooterLogo"
          loader={() => "/assets/img/FooterLogo.svg"}
          width={195}
          height={132}
        />
        <style.FooterMenuBox>
          <style.FooterMenuTitle>COMPANY</style.FooterMenuTitle>
          <style.FooterMenu>공지사항</style.FooterMenu>
          <style.FooterMenu>자주묻는질문</style.FooterMenu>
        </style.FooterMenuBox>
        <style.FooterMenuBox>
          <style.FooterMenuTitle>SERVICE</style.FooterMenuTitle>
          <style.FooterMenu>이용약관</style.FooterMenu>
          <style.FooterMenu>개인정보처리방침</style.FooterMenu>
          <style.FooterMenu>환불규정</style.FooterMenu>
        </style.FooterMenuBox>
        <style.FooterMenuBox>
          <style.FooterMenuTitle>고객센터</style.FooterMenuTitle>
          <style.FooterMenuButton>문의하기</style.FooterMenuButton>
          <style.FooterMenu>
            *주중 10~18시 / 주말 및 공휴일 제외
          </style.FooterMenu>
        </style.FooterMenuBox>
        <style.FooterLine />
      </style.FooterContainer>
    </style.Footer>
  );
}
