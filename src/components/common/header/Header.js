import * as style from "@/components/common/header/Header.style";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState(null);

  // 로그인 페이지에서 숨김
  const shouldHideHeader =
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname === "/survey";

  useEffect(() => {
    const storedAccessToken = sessionStorage.getItem("accessToken");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  const ShowGroupStudyMenu =
    router.pathname === "/groupstudylist" || router.pathname === "/groupstudy";

  // 로그인이 되어있을 때와 되어있지 않을 때의 링크 설정
  const homeLink = accessToken ? "/" : "/login";
  const groupStudyLink = accessToken ? "/groupstudylist" : "/login";
  const referenceRoomLink = accessToken ? "/referenceroom" : "/login";
  const myStudyRoomLink = accessToken ? "/mystudyroom" : "/login";

  return shouldHideHeader ? null : (
    <style.Header>
      <style.MenuUl>
        <style.MenuLi>
          <Link href={homeLink} passHref>
            <style.MenuAtag active={router.pathname === "/"}>
              해요? 해요!
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
        <style.MenuLi>
          <Link href={groupStudyLink} passHref>
            <style.MenuAtag active={ShowGroupStudyMenu}>
              그룹 공부방
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
        <style.MenuLi>
          <Link href={referenceRoomLink} passHref>
            <style.MenuAtag active={router.pathname === "/referenceroom"}>
              공유 자료실
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
        <style.MenuLi>
          <Link href={myStudyRoomLink} passHref>
            <style.MenuAtag active={router.pathname === "/mystudyroom"}>
              내 공부방
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
      </style.MenuUl>
    </style.Header>
  );
}
