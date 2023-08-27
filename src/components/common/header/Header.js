import * as style from "@/components/common/header/Header.style";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  // 로그인 페이지에서 숨김
  const shouldHideHeader =
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname === "/survey";

  return shouldHideHeader ? null : (
    <style.Header>
      <style.MenuUl>
        <style.MenuLi>
          <Link href="/" passHref>
            <style.MenuAtag active={router.pathname === "/"}>
              해요? 해요!
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
        <style.MenuLi>
          <Link href="/groupstudy" passHref>
            <style.MenuAtag active={router.pathname === "/groupstudy"}>
              그룹 공부방
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
        <style.MenuLi>
          <Link href="/referenceroom" passHref>
            <style.MenuAtag active={router.pathname === "/referenceroom"}>
              공유 자료실
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
        <style.MenuLi>
          <Link href="/mystudyroom" passHref>
            <style.MenuAtag active={router.pathname === "/mystudyroom"}>
              내 공부방
            </style.MenuAtag>
          </Link>
        </style.MenuLi>
      </style.MenuUl>
    </style.Header>
  );
}
